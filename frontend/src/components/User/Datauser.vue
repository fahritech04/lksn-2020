<template>
    <div class="table-responsive container">
        <router-link :to="{ name: 'Add_user' }" class="btn btn-warning mb-2">New Data</router-link>
        <!-- table -->
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">Nama</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th scope="col">Role</th>
                    <th scope="col">Division</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(tampil, index) in user" :key="index">
                    <th scope="row">{{ index+1 }}</th>
                    <td>{{ tampil.name }}</td>
                    <td>{{ tampil.email }}</td>
                    <td>{{ tampil.password }}</td>
                    <td>{{ tampil.role }}</td>
                    <td>{{ tampil.division.name }}</td>
                    <div class="btn-group">
                        <router-link :to="{ name: 'Edituser', params: {id: tampil.id}}" class="btn btn-warning btn-sm">Edit</router-link>
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
            user : null
        }
    },
    created() {
        axios
        .get('http://127.0.0.1:8000/api/user')
        .then(response => {
            this.user = response.data;
            console.log(response)
        })
    },
    methods: {
        del(id, index){
            axios
            .delete('http://127.0.0.1:8000/api/user/'+id)
            .then(response => {
                if(response.status==200){
                    this.user.splice(index, 1);
                }
            })
        }
    }
}
</script>
