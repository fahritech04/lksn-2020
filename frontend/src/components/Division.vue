<template>
    <div class="table-responsive">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, impedit.</p>
        <p v-for="(tampil, index) in division" :key="index">
            {{ index+1 }}
            {{ tampil.name }}
        </p>
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
