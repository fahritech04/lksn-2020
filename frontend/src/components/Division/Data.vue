<template>
    <div class="table-responsive container">
        <router-link :to="{name: 'Add'}" class="btn btn-warning mb-2">New Data</router-link>
        <!-- table -->
        <table class="table table-hover table-bordered">
            <thead>
                <tr class="text-nowrap">
                    <th scope="col">No</th>
                    <th scope="col">Nama</th>
                    <th scope="col">Keterangan</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(tampil, index) in division" :key="index">
                    <th scope="row">{{ index+1 }}</th>
                    <td>{{ tampil.name }}</td>
                    <div class="btn-group">
                        <router-link :to="{ name : 'Edit', params: {id: tampil.id} }" class="btn btn-warning btn-sm">Edit</router-link>
                        <button @click="del(tampil.id, index)" class="btn btn-outline-danger btn-sm">Del</button>
                    </div>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    data(){
        return {
            division : null
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
        del(id, index){
            axios
            .delete('http://127.0.0.1.:8000/api/division/'+id)
            .then(response => {
                if(response.status==200){
                    this.division.splice(index, 1);
                }
            })
        }
    }
}
</script>
