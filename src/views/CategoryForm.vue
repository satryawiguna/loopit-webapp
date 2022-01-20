<template>
  <div>
      <form @submit.prevent="submit">
          <div class="mb-3">
              <v-text-field label="Name" v-model="name"></v-text-field>
          </div>
          <div class="mb-3">
              <v-btn type="submit" to="/categories">Cancel</v-btn>
              &nbsp;
              <v-btn color="primary" type="submit">Save</v-btn>
          </div>
      </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "CategoryForm",
    data() {
        return {
            name: ""
        }
    },
    async mounted() {
        if (this.$route.params.id) {
            const {data} = await axios.get('/category/' + this.$route.params.id);

            this.name = data.data.name
        }
    },
    methods: {
        async submit() {
            if (this.$route.params.id) {
                await axios.put('/category/update', {   
                    id: this.$route.params.id,
                    name: this.name
                });
            } else {
                await axios.post('/category/store', {   
                    name: this.name
                });
            }
            

            return this.$router.push('/categories');
        }
    }
}
</script>

<style>

</style>