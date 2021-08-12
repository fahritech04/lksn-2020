<template>
    <form @submit.prevent="updatechoice" class="container" v-if="edit!=null">
        <div class="mb-3">
            <label class="form-label">Choice</label>
            <input type="text" v-model="edit.choice" class="form-control" placeholder="Masukkan nama anda">
        </div>
        <div class="mb-3">
            <label class="form-label">Polling ID</label>
            <select v-model="edit.poll_id">
                <option :value="tampil.id" v-for="(tampil, index) in poll" :key="index">
                    {{ tampil.id }}
                </option>
            </select>
        </div>
        <div class="btn">
            <input type="submit" value="updatechoice" class="btn btn-success">
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
        .get('http://127.0.0.1:8000/api/poll')
        .then(response => {
            this.poll = response.data
            console.log(response)
        })

        if(this.$route.params.id!=undefined){
            axios
            .get('http://127.0.0.1:8000/api/choice/'+this.$route.params.id+'/edit')
            .then(response => {
                this.edit = response.data
            })
        }
    },

    methods: {
        updatechoice() {
            var data = {
                choice    :   this.edit.choice,
                poll_id   :   this.edit.poll_id
            }
            axios
            .put('http://127.0.0.1:8000/api/choice/'+this.$route.params.id, data)
            .then(response => {
                console.log(response)
                this.$router.push({name : 'Data_Choice'})
            })
        }
    }
}
</script>
