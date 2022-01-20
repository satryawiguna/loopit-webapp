<template>
  <div>
      <form @submit.prevent="submit">
          <div class="mb-3">
              <v-select :items="categories.data" item-text='name' item-value='id' v-model="category" label="Categories"></v-select>
          </div>
          <div class="mb-3">
              <v-text-field label="Name" v-model="name"></v-text-field>
          </div>
          <div class="mb-3">
                 <v-text-field label="Kilometer" v-model="kilometer"></v-text-field>
          </div>
          <div class="mb-3">
              <v-text-field label="Color" v-model="color"></v-text-field>
          </div>
          <div class="mb-3">
              <v-text-field label="Machine" v-model="machine"></v-text-field>
          </div>
          <div class="mb-3">
              <v-text-field label="Passenger" v-model="passenger"></v-text-field>
          </div>
          <div class="mb-3">
              <v-select :items="transmissions" v-model="transmission" label="Transmission"></v-select>
          </div>
          <div class="mb-3">
              <v-file-input truncate-length="15" @change="onFileSelected"></v-file-input>
          </div>
          <div class="mb-3">
              <v-img
                v-if="this.$route.params.id"
                max-height="200"
                max-width="200"
                :src="photo"
                ></v-img>
          </div>
          <div class="mb-3">
              <v-btn type="submit" to="/cars">Cancel</v-btn>
              &nbsp;
              <v-btn color="primary" type="submit">Save</v-btn>
          </div>
      </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "CarForm",
    data() {
        return {
            categories: [],
            transmissions: ["manual", "automatic"],
            _photo_: "",

            category: null,
            name: "",
            kilometer: "",
            color: "",
            machine: "",
            passenger: "",
            transmission: "",
            photo: ""
        }
    },
    async mounted() {
        const categories = await axios.post('/categories');
        this.categories = categories.data;

        if (this.$route.params.id) {
            const {data} = await axios.get('/product/' + this.$route.params.id);

            this.category = this.categories.data.filter(category => category.id == data.data.id)[0]
            this.name = data.data.name;
            this.kilometer = data.data.kilometer;
            this.color = data.data.color;
            this.machine = data.data.machine;
            this.passenger = data.data.passenger;
            this.transmission = data.data.transmission;
            this.photo = data.data.photo;         
        }
    },
    methods: {
        onFileSelected(even) {
            if (this.$route.params.id) {
                this._photo_ = even
            } else {
                this.photo = even
            }
            
        },
        async submit() {
            const formData = new FormData();

            formData.append('user_id', this.$store.state.user.id);
            formData.append('category_id', (this.category instanceof Object) ? this.category.id : this.category);
            formData.append('name', this.name);
            formData.append('kilometer', this.kilometer);
            formData.append('color', this.color);
            formData.append('machine', this.machine);
            formData.append('passenger', this.passenger);
            formData.append('transmission', this.transmission);

            if (this.$route.params.id) {
                formData.append('id', this.$route.params.id);
                formData.append('photo', this._photo_, this._photo_.name);

                await axios.post('/product/update', formData);
            } else {
                formData.append('photo', this.photo, this.photo.name);
                
                await axios.post('/product/store', formData);
            }

            return this.$router.push('/cars');
        }
    }
}
</script>
