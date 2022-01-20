<template>
    <main class="form-signin">
        <v-form ref="loginForm">
            <div class="mb-3">
                <img class="mb-4" src="../assets/logo.svg" alt="">
            </div>
            <div class="mb-3" v-if="error">
                <v-alert
                v-model="error"
                close-text="Close Alert"
                color="red"
                dismissible
                @input="onClose"
                >Login invalid</v-alert>
            </div>
            <div class="mb-3">
                <v-text-field label="Identity" v-model="identity" hide-details="auto" dark></v-text-field>
            </div>
            <div class="mb-3">
                <v-text-field label="Password" type="password" v-model="password" hide-details="auto" dark></v-text-field>
            </div>

            <br /><br />

            <v-btn @click="login()" style="width: 100%;">Signin</v-btn>
        </v-form>
        <br />
        <router-link to="/register">Don't have any account yet</router-link>
    </main>
</template>

<script>
import axios from 'axios'

export default {
    name: "Login",
    data() {
        return {
            error: false,
            identity: "",
            password: ""
        }
    },
    methods: {
        async login() {
            await axios.post('/auth/login', {
                identity: this.identity,
                password: this.password
            }).then(async response => {
                await this.$router.push('/');
            }).catch(error => {
                if (error.response) {
                    if (error.response.status == 401) {
                        this.error = true;
                    }
                    
                }
            });

            
        },
        showError() {
            return this.error = true;
        },
        onClose() {
            return this.error = false;
        }
    }
}
</script>

<style>
body {
    background-color: #3432ff;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin a {
    color: antiquewhite;
}

</style>