<template>
    <form @submit.prevent="save">
        <div class="col-3 container">
            <label class="form-label">Name</label>
            <input type="text" v-model="name" class="form-control" placeholder="masukkan nama">
        </div>
        <input type="submit" value="save">
    </form>
</template>
<script>
export default {
    data() {
        return {
            name        : ""
        }
    },
    methods: {
        save() {
            var data = {
                name : this.name
            }
            axios
            .post('http://127.0.0.1:8000/api/division', data)
            .then((response) => {
                console.log(response)
                this.$router.push({name: 'Data_Division'})
            })
        }
    }
}
</script>
