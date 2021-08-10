<template>
    <form @submit.prevent="saveuser" class="container">
        <div class="mb-3">
            <label class="form-label">Nama</label>
            <input type="text" v-model="name" class="form-control" placeholder="Masukkan nama anda">
        </div>
        <div class="mb-3">
            <label class="form-label">Email</label>
            <input type="email" v-model="email" class="form-control">
        </div>
        <div class="mb-3">
            <label class="form-label">Password</label>
            <input type="text" v-model="password" class="form-control">
        </div>
        <div class="mb-3">
            <label class="form-label">Role</label>
            <select v-model="role">
                <option value="Admin">Admin</option>
                <option value="User">User</option>
            </select>
        </div>
        <div class="mb-3">
            <label class="form-label">Division ID</label>
            <select v-model="division_id">
                <option :value="data.id" v-for="(data, index) in division" :key="index">
                    {{ data.name }}
                </option>
            </select>
        </div>
        <input type="submit" class="btn btn-primary" value="saveuser">
    </form>
</template>
<script>
export default {
    data() {
        return {
            name        : "",
            email       : "",
            password    : "",
            role        : "",
            division_id : "",

            division    : ""
        }
    },
    created(){
        axios
        .get('http://127.0.0.1:8000/api/division')
        .then(response => {
            this.division = response.data;
            console.log(response)
        })
    },
    methods: {
        saveuser() {
            var data = {
                name    :   this.name,
                email   :   this.email,
                password:   this.password,
                role    :   this.role,
                division_id: this.division_id
            }
            axios
            .post('http://127.0.0.1:8000/api/user', data)
            .then(response => {
                console.log(response)
                this.$router.push({name : 'Data_User'})
            })
        }
    }
}
</script>
