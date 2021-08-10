<template>
    <form @submit.prevent="update" class="container" v-if="edit!=null">
        <div class="mb-3">
            <label class="form-label">Nama</label>
            <input type="text" v-model="edit.name" class="form-control" placeholder="Masukkan nama anda">
        </div>
        <div class="mb-3">
            <label class="form-label">Email</label>
            <input type="email" v-model="edit.email" class="form-control">
        </div>
        <div class="mb-3">
            <label class="form-label">Password</label>
            <input type="text" v-model="edit.password" class="form-control">
        </div>
        <div class="mb-3">
            <label class="form-label">Role</label>
            <select v-model="edit.role">
                <option value="Admin">Admin</option>
                <option value="User">User</option>
            </select>
        </div>
        <div class="mb-3">
            <label class="form-label">Division</label>
            <select v-model="edit.division_id">
                <option :value="data.id" v-for="(data, index) in division" :key="index">
                    {{ data.name }}
                </option>
            </select>
        </div>
        <div class="btn">
            <input type="submit" value="Update" class="btn btn-success">
            <input type="button" value="Cancel" class="btn btn-outline-danger" @click="$router.go(-1)">
        </div>
    </form>
</template>
<script>
export default {
    data() {
        return {
            edit    :   null
        }
    },

    created(){
        axios
        .get('http://127.0.0.1:8000/api/division')
        .then(response => {
            this.division = response.data
            console.log(response)
        })

        if(this.$route.params.id!=undefined){
            axios
            .get('http://127.0.0.1:8000/api/user/'+this.$route.params.id+'/edit')
            .then(response => {
                this.edit = response.data
            })
        }
    },

    methods: {
        update() {
            var data = {
                name        :   this.edit.name,
                email       :   this.edit.email,
                password    :   this.edit.password,
                role        :   this.edit.role,
                division_id :   this.edit.division_id
            }
            axios
            .put('http://127.0.0.1:8000/api/user/'+this.$route.params.id, data)
            .then(response => {
                this.$router.push({ name : 'Data_User' })
            })
        }
    }
}
</script>
