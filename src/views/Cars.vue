<template>
  <div>
        <div class="pt-3 pb-2 mb-3 border-bottom">
            <v-btn :href="'/car/create'" color="primary" elevation="2" small>Add New</v-btn>
        </div>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">#ID</th>
                        <th class="text-left">Photo</th>
                        <th class="text-left">Category</th>
                        <th class="text-left">Name</th>
                        <th class="text-left">Kilometer</th>
                        <th class="text-left">Color</th>
                        <th class="text-left">Machine</th>
                        <th class="text-left">Passenger</th>
                        <th class="text-left">Transmission</th>
                        <th class="text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="car in cars.slice((page-1)*perPage, page*perPage)" :key="car.id">
                        <td>{{ car.id }}</td>
                        <td><v-img lazy-src="https://dummyimage.com/100x100/a1a1a1/ffffff"
                                max-height="100"
                                max-width="100"
                                :src="car.photo" /></td>
                        <td>{{ car.category.name }}</td>
                        <td>{{ car.name }}</td>
                        <td>{{ car.kilometer }}</td>
                        <td>{{ car.color }}</td>
                        <td>{{ car.machine }}</td>
                        <td>{{ car.passenger }}</td>
                        <td>{{ car.transmission }}</td>
                        <td>
                            <v-btn-toggle>
                                <v-btn :href="'/car/' + car.id + '/edit'" color="primary" elevation="2" small>Edit</v-btn>
                                <v-btn @click="destroy(car.id)" color="error" elevation="2" small>Delete</v-btn>
                            </v-btn-toggle>
                        </td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
        <br /><br />
        <v-pagination v-model="page" total-visible="5" :length="this.lastPage"></v-pagination>
    </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";

export default Vue.extend({
    name: "Cars",
    data() {
        return {
            id: null,
            cars: [],
            filter: {
                category_id: null,
                search: null
            },
            page: 1,
            perPage: 5,
            lastPage: 0,
            options: {
                title: 'Are you sure?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }
        }
    },
    async mounted() {
        const {data} = await axios.post('/products', this.filter);
        this.cars = data.data;

        this.lastPage = Math.ceil(data.data.length / this.perPage);
    },
    methods: {
        async destroy(id) {
            this.id = id;

            this.$swal(this.options).then(async (result) => {
                if (result.value) { 
                    await axios.delete('product/delete/' + this.id);

                    this.cars = this.cars.filter(item => item.id !== id);
                }
            });
        }
    }
})
</script>