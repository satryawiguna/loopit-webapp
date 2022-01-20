<template>
    <div>
        <div class="pt-3 pb-2 mb-3 border-bottom">
            <v-btn :href="'/category/create'" color="primary" elevation="2" small>Add New</v-btn>
        </div>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">#ID</th>
                        <th class="text-left">Name</th>
                        <th class="text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="category in categories.slice((page-1)*perPage, page*perPage)" :key="category.id">
                        <td>{{ category.id }}</td>
                        <td>{{ category.name }}</td>
                        <td>
                            <v-btn-toggle>
                                <v-btn :href="'/category/' + category.id + '/edit'" color="primary" elevation="2" small>Edit</v-btn>
                                <v-btn @click="destroy(category.id)" color="error" elevation="2" small>Delete</v-btn>
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
    name: "Categories",
    data() {
        return {
            id: null,
            categories: [],
            filter: {
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
        const {data} = await axios.post('/categories', this.filter);

        this.categories = data.data;
        this.lastPage = Math.ceil(data.data.length / this.perPage);
    },
    methods: {
        async destroy(id) {
            this.id = id;

            this.$swal(this.options).then(async (result) => {
                if (result.value) { 
                    await axios.delete('category/delete/' + id);

                    this.categories = this.categories.filter(item => item.id !== id);
                }
            });
        }
    }
});
</script>
