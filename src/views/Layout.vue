<template>
    <v-app>
        <Navigation />

        <div class="container-fluid">
        <div class="row">
            <Menu />

            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div class="table-responsive">
                    <router-view />
                </div>
            </main>
        </div>
        </div>
    </v-app>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import Menu from '@/components/Menu.vue';
import axios from 'axios';

export default {
    name: "Layout",
    components: {
        Navigation,
        Menu
    },
    async mounted() {
        try {
            const {data} = await axios.get('/auth/me');

            await this.$store.dispatch('setUser', data);
        } catch (e) {
            await this.$router.push('/login');
        }
    }
}
</script>