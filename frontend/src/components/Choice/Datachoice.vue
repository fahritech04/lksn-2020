<template>
    <div class="table-responsive container">
        <router-link :to="{ name: 'Add_Choice' }" class="btn btn-warning mb-2">New Data</router-link>
        <!-- table -->
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">Choice</th>
                    <th scope="col">Polling ID</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(tampil, index) in choice" :key="index">
                    <th scope="row">{{ index+1 }}</th>
                    <td>{{ tampil.choice }}</td>
                    <td>{{ tampil.poll.id }}</td>
                    <div class="btn-group">
                        <router-link :to="{ name: 'Edit_Choice', params: {id: tampil.id}}" class="btn btn-warning btn-sm">Edit</router-link>
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
            choice  :   null
        }
    },
    created() {
        axios
        .get('http://127.0.0.1:8000/api/choice')
        .then(response => {
            this.choice = response.data;
            console.log(response)
        })
    },
    methods: {
        del(id, index){
            axios
            .delete('http://127.0.0.1:8000/api/choice/'+id)
            .then(response => {
                if(response.status==200){
                    this.choice.splice(index, 1);
                }
            })
        }
    }
}
</script>
