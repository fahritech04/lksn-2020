<template>
    <div class="table-responsive container">
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
    }
}
</script>
