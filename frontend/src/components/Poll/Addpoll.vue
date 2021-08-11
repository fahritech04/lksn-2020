<template>
    <form @submit.prevent="savepoll" class="container">
        <div class="mb-3">
            <label class="form-label">Title</label>
            <input type="text" v-model="title" class="form-control" placeholder="Masukkan Title">
        </div>
        <div class="mb-3">
            <label class="form-label">Description</label>
            <input type="text" v-model="description" class="form-control">
        </div>
        <div class="mb-3">
            <label class="form-label">Deadline</label>
            <input type="datetime-local" v-model="deadline" class="form-control">
        </div>
        <div class="mb-3">
            <label class="form-label">Pembuat</label>
            <select v-model="created_by">
                <option :value="data.id" v-for="(data, index) in user" :key="index">
                    {{ data.name }}
                </option>
            </select>
        </div>
        <input type="submit" class="btn btn-primary" value="savepoll">
    </form>
</template>
<script>
export default {
    data() {
        return {
            title       :   "",
            description :   "",
            deadline    :   "",
            created_by  :   "",
            user        :   ""
        }
    },
    created(){
        axios
        .get('http://127.0.0.1:8000/api/user')
        .then(response => {
            this.user = response.data;
            console.log(response)
        })
    },
    methods: {
        savepoll() {
            var data = {
                title       :   this.title,
                description :   this.description,
                deadline    :   this.deadline,
                created_by  :   this.created_by
            }
            axios
            .post('http://127.0.0.1:8000/api/poll', data)
            .then(response => {
                console.log(response)
                this.$router.push({name :   'Data_Poll'})
            })
        }
    }
}
</script>
