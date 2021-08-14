<template>
    <form @submit.prevent="savevote" class="container">
        <div class="mb-3">
            <label class="form-label">Pilihan</label>
            <select v-model="choice_id">
                <option :value="tampil.id" v-for="(tampil, index) in choice" :key="index">
                    {{ tampil.choice }}
                </option>
            </select>
        </div>
        <div class="mb-3">
            <label class="form-label">Pengguna</label>
            <select v-model="user_id">
                <option :value="tampil.id" v-for="(tampil, index) in user" :key="index">
                    {{ tampil.name }}
                </option>
            </select>
        </div>
        <div class="mb-3">
            <label class="form-label">Polling</label>
            <select v-model="poll_id">
                <option :value="tampil.id" v-for="(tampil, index) in poll" :key="index">
                    {{ tampil.title }}
                </option>
            </select>
        </div>
        <div class="mb-3">
            <label class="form-label">Division</label>
            <select v-model="division_id">
                <option :value="tampil.id" v-for="(tampil, index) in division" :key="index">
                    {{ tampil.name }}
                </option>
            </select>
        </div>
        <input type="submit" class="btn btn-primary" value="savevote">
    </form>
</template>
<script>
export default {
    data() {
        return {
            choice_id   : "",
            user_id     : "",
            poll_id     : "",
            division_id : "",

            choice      : "",
            user        : "",
            poll        : "",
            division    : ""

        }
    },
    created(){
        axios
        .get('http://127.0.0.1:8000/api/choice')
        .then(response => {
            this.choice = response.data;
            console.log(response)
        })
        axios
        .get('http://127.0.0.1:8000/api/user')
        .then(response => {
            this.user = response.data;
            console.log(response)
        })
        axios
        .get('http://127.0.0.1:8000/api/poll')
        .then(response => {
            this.poll = response.data;
            console.log(response)
        })
        axios
        .get('http://127.0.0.1:8000/api/division')
        .then(response => {
            this.division = response.data;
            console.log(response)
        })
    },
    methods: {
        savevote() {
            var data = {
                choice_id   :   this.choice_id,
                user_id     :   this.user_id,
                poll_id     :   this.poll_id,
                division_id :   this.division_id
            }
            axios
            .post('http://127.0.0.1:8000/api/vote', data)
            .then(response => {
                console.log(response)
                this.$router.push({name : 'Data_Vote'})
            })
        }
    }
}
</script>
