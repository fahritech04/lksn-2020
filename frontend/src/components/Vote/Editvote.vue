<template>
    <form @submit.prevent="updatevote" class="container" v-if="edit!=null">
        <div class="mb-3">
            <label class="form-label">Pilihan</label>
            <select v-model="edit.choice_id">
                <option :value="tampil.id" v-for="(tampil, index) in choice" :key="index">
                    {{ tampil.choice }}
                </option>
            </select>
        </div>
        <div class="mb-3">
            <label class="form-label">Pengguna</label>
            <select v-model="edit.user_id">
                <option :value="tampil.id" v-for="(tampil, index) in user" :key="index">
                    {{ tampil.name }}
                </option>
            </select>
        </div>
        <div class="mb-3">
            <label class="form-label">Polling</label>
            <select v-model="edit.poll_id">
                <option :value="tampil.id" v-for="(tampil, index) in poll" :key="index">
                    {{ tampil.title }}
                </option>
            </select>
        </div>
        <div class="mb-3">
            <label class="form-label">Division</label>
            <select v-model="edit.division_id">
                <option :value="tampil.id" v-for="(tampil, index) in division" :key="index">
                    {{ tampil.name }}
                </option>
            </select>
        </div>
        <div class="btn">
            <input type="submit" value="updatevote" class="btn btn-success">
            <input type="button" value="Cancel" class="btn btn-outline-danger" @click="$router.go(-1)">
        </div>
    </form>
</template>
<script>
export default {
    data() {
        return {
            edit    :   null
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

        if(this.$route.params.id!=undefined){
            axios
            .get('http://127.0.0.1:8000/api/vote/'+this.$route.params.id+'/edit')
            .then(response => {
                this.edit = response.data
            })
        }
    },
    methods: {
        savevote() {
            var data = {
                choice_id   :   this.edit.choice_id,
                user_id     :   this.edit.user_id,
                poll_id     :   this.edit.poll_id,
                division_id :   this.edit.division_id
            }
            axios
            .put('http://127.0.0.1:8000/api/vote/'+this.$route.params.id, data)
            .then(response => {
                this.$router.push({name : 'Data_Vote'})
            })
        }
    }
}
</script>
