<template>
    <form @submit.prevent="update" v-if="edit!=null">
        <div class="col-6 container">
            <label>Input Name</label>
            <input type="text" v-model="edit.name" class="form-control">
            <div class="btn">
                <input type="submit" value="Update" class="btn btn-success">
                <input type="button" value="Cancel" class="btn btn-outline-danger" @click="$router.go(-1)">
            </div>
        </div>
    </form>
</template>
<script>
export default {
    data() {
        return {
            edit : null
        }
    },
    async created() {
        if(this.$route.params.id!=undefined){
            await axios
            .get('http://127.0.0.1:8000/api/division/'+this.$route.params.id+'/edit')
            .then(response => {
                this.edit = response.data
            })
        }
    },
    methods: {
        update() {
            var data = {
                name        : this.edit.name
            }
            axios
            .put('http://127.0.0.1:8000/api/division/'+this.$route.params.id, data)
            .then(response => {
                this.$router.push({ name : 'Data_Division' })
            })
        }
    }
}
</script>
