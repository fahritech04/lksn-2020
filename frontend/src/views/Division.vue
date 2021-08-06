<template>
    <div class="table-responsive container">
        <!-- <p>Muhammad Raihan Fahrifi</p>
        <p v-for="(tampil, index) in division" :key="index">
            {{ index+1 }}
            {{ tampil.name }}
        </p> -->

        <!-- table -->
        <table class="table table-hover table-bordered">
            <thead>
                <tr class="text-nowrap">
                    <th scope="col">No</th>
                    <th scope="col">Nama</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(tampil, index) in division" :key="index">
                    <th scope="row">{{ index+1 }}</th>
                    <td>{{ tampil.name }}</td>
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
    }
}
</script>
