<template>
    <div class="table-responsive container">
        <router-link :to="{ name: 'Add_Poll' }" class="btn btn-warning mb-2">New Data</router-link>
        <!-- table -->
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Deadline</th>
                    <th scope="col">Pembuat</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(tampil, index) in poll" :key="index">
                    <th scope="row">{{ index+1 }}</th>
                    <td>{{ tampil.title }}</td>
                    <td>{{ tampil.description }}</td>
                    <td>{{ tampil.deadline }}</td>
                    <td>{{ tampil.created_by }}</td>
                    <div class="btn-group">
                        <router-link :to="{ name: 'Edit_Poll', params: {id: tampil.id}}" class="btn btn-warning btn-sm">Edit</router-link>
                        <button @click="del(tampil.id, index)" class="btn btn-outline-danger btn-sm">Del</button>
                    </div>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            poll    :   null
        }
    },
    created() {
        axios
        .get('http://127.0.0.1:8000/api/poll')
        .then(response => {
            this.poll = response.data;
            console.log(response)
        })
    },
    methods: {
        del(id, index){
            axios
            .delete('http://127.0.0.1:8000/api/poll/'+id)
            .then(response => {
                if(response.status==200){
                    this.poll.splice(index, 1);
                }
            })
        }
    }
}
</script>
