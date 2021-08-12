<template>
    <form @submit.prevent="savechoice" class="container">
        <div class="mb-3">
            <label class="form-label">Choice</label>
            <input type="text" v-model="choice" class="form-control">
        </div>
        <div class="mb-3">
            <label class="form-label">Polling ID</label>
            <select v-model="poll_id">
                <option :value="tampil.id" v-for="(tampil, index) in poll" :key="index">
                    {{ tampil.id }}
                </option>
            </select>
        </div>
        <input type="submit" class="btn btn-primary" value="savechoice">
    </form>
</template>
<script>
export default {
    data() {
        return {
            choice        : "",
            poll_id       : "",

            poll          : ""
        }
    },
    created(){
        axios
        .get('http://127.0.0.1:8000/api/poll')
        .then(response => {
            this.poll = response.data;
            console.log(response)
        })
    },
    methods: {
        savechoice() {
            var data = {
                choice    :   this.choice,
                poll_id   :   this.poll_id
            }
            axios
            .post('http://127.0.0.1:8000/api/choice', data)
            .then(response => {
                console.log(response)
                this.$router.push({name : 'Data_Choice'})
            })
        }
    }
}
</script>
