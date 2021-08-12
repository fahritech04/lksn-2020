<template>
    <form @submit.prevent="updatepoll" class="container" v-if="edit!=null">
        <div class="mb-3">
            <label class="form-label">Title</label>
            <input type="text" v-model="edit.title" class="form-control" placeholder="Masukkan Title">
        </div>
        <div class="mb-3">
            <label class="form-label">Description</label>
            <input type="text" v-model="edit.description" class="form-control">
        </div>
        <div class="mb-3">
            <label class="form-label">Deadline</label>
            <input type="datetime-local" v-model="edit.deadline" class="form-control">
        </div>
        <div class="mb-3">
            <label class="form-label">Pembuat</label>
            <select v-model="edit.created_by">
                <option :value="data.id" v-for="(data, index) in user" :key="index">
                    {{ data.name }}
                </option>
            </select>
        </div>
        <div class="btn">
            <input type="submit" value="updatepoll" class="btn btn-success">
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
        .get('http://127.0.0.1:8000/api/user')
        .then(response => {
            this.user = response.data;
            console.log(response)
        })

        if(this.$route.params.id!=undefined){
            axios
            .get('http://127.0.0.1:8000/api/poll/'+this.$route.params.id+'/edit')
            .then(response => {
                this.edit = response.data
            })
        }
    },
    methods: {
        updatepoll() {
            var data = {
                title       :   this.edit.title,
                description :   this.edit.description,
                deadline    :   this.edit.eadline,
                created_by  :   this.edit.created_by
            }
            axios
            .put('http://127.0.0.1:8000/api/poll/'+this.$route.params.id, data)
            .then(response => {
                console.log(response)
                this.$router.push({name :   'Data_Poll'})
            })
        }
    }
}
</script>
