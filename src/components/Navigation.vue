<template>
    <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Loopit</a>
        
        <nav class="my-2 my-md-0 mr-md-3">
            <router-link to="/profile" class="p-2 text-white text-decoration-none">{{user.email}}</router-link>
            <a href="#" class="p-2 text-white text-decoration-none" @click="logout()">Signout</a>
        </nav>
    </header>
</template>

<script>
import axios from 'axios';

export default {
    name: "Navigation",
    methods: {
        async logout() {
            await axios.post('/auth/logout', {
                email: this.$store.state.user.email
            });

            await this.$router.push('/login');
        }
    },
    computed: {
        user() {
            return this.$store.state.user;
        }
    }
}
</script>