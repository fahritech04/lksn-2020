<template>
    <form @submit.prevent="savevote" class="container">
        <div class="mb-3">
            <label class="form-label">Pilihan</label>
            <select v-model="choice_id">
                <option :value="data.id" v-for="(data, index) in choice" :key="index">
                    {{ data.choice }}
                </option>
            </select>
        </div>
        <div class="mb-3">
            <label class="form-label">Pengguna</label>
            <select v-model="user_id">
                <option :value="data.id" v-for="(data, index) in user" :key="index">
                    {{ data.name }}
                </option>
            </select>
        </div>
        <div class="mb-3">
            <label class="form-label">Pemilihan</label>
            <select v-model="poll_id">
                <option :value="data.id" v-for="(data, index) in poll" :key="index">
                    {{ data.title }}
                </option>
            </select>
        </div>
        <div class="mb-3">
            <label class="form-label">Division</label>
            <select v-model="division_id">
                <option :value="data.id" v-for="(data, index) in division" :key="index">
                    {{ data.name }}
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
            choice_id   :   "",
            user_id     :   "",
            poll_id     :   "",
            division_id :   "",

            choice      :   "",
            user        :   "",
            poll        :   "",
            division    :   ""
        }
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
