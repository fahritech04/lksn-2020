<template>
    <div class="table-responsive container">
        <router-link :to="{ name: 'Add_Vote' }" class="btn btn-warning mb-2">New Data</router-link>
        <!-- table -->
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">Pilihan</th>
                    <th scope="col">Pengguna</th>
                    <th scope="col">Polling</th>
                    <th scope="col">Division</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(tampil, index) in vote" :key="index">
                    <th scope="row">{{ index+1 }}</th>
                    <td>{{ tampil.choice.choice }}</td>
                    <td>{{ tampil.user }}</td>
                    <td>{{ tampil.poll }}</td>
                    <td>{{ tampil.division }}</td>
                    <!-- <td>{{ tampil.choice_id }}</td>
                    <td>{{ tampil.user_id }}</td>
                    <td>{{ tampil.poll_id }}</td>
                    <td>{{ tampil.division_id }}</td> -->
                    <div class="btn-group">
                        <router-link :to="{ name: 'Edit_Vote', params: {id: tampil.id}}" class="btn btn-warning btn-sm">Edit</router-link>
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
            vote : null
        }
    },
    created() {
        axios
        .get('http://127.0.0.1:8000/api/vote')
        .then(response => {
            this.vote = response.data;
            console.log(response)
        })
    },
    methods: {
        del(id, index){
            axios
            .delete('http://127.0.0.1:8000/api/vote/'+id)
            .then(response => {
                if(response.status==200){
                    this.vote.splice(index, 1);
                }
            })
        }
    }
}
</script>
