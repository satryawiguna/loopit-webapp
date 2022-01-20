<template>
  <main class="form-register">
        <v-form ref="registerForm">
            <h2>Member Register</h2>

            <div class="mb-3">
                <v-text-field label="Full Name" v-model="full_name" hide-details="auto" dark></v-text-field>
            </div>
            <div class="mb-3">
                <v-text-field label="Nick Name" v-model="nick_name" hide-details="auto" dark></v-text-field>
            </div>
            <div class="mb-3">
                <v-text-field label="Phone" v-model="phone" hide-details="auto" dark></v-text-field>
            </div>

            <br /><br />

            <div class="mb-3">
                <v-text-field label="Username" v-model="username" :rules="username_rules" hide-details="auto" dark></v-text-field>
            </div>
            <div class="mb-3">
                <v-text-field label="Email" v-model="email" :rules="email_rules" hide-details="auto" dark></v-text-field>
            </div>
            <div class="mb-3">
                <v-text-field label="Password" type="password" v-model="password" :rules="password_rules" hide-details="auto" dark></v-text-field>
            </div>
            <div class="mb-3">
                <v-text-field label="Password Confirmation" type="password"  v-model="password_confirmation" :rules="[passwordConfirmationRule]" hide-details="auto" dark></v-text-field>
            </div>
            
            <br /><br />

            <v-btn @click="register()" style="width: 100%;">Register</v-btn>
        </v-form>

        <br /><br />
        
        <router-link to="/login">Back to Login</router-link>
    </main>
</template>

<script>
import axios from "axios";

export default {
    name: "Register",
    data() {
        return {
            full_name: [],
            nick_name: [],
            phone: [],
            username: [],
            username_rules: [
                (v) => !!v || 'Username is required',
            ],
            email: [],
            email_rules: [
                (v) => !!v || 'E-mail is required',
                (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ],
            password: [],
            password_rules: [
                (v) => !!v || 'Password is required',
            ],
            password_confirmation: []
        }
    },
    methods: {
        async register() {
            if (this.$refs.registerForm.validate()) {
                await axios.post('/register/member', {
                    full_name: this.full_name,
                    nick_name: this.nick_name,
                    phone: this.phone,
                    username: this.username,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation,
                });

                await this.$router.push('/login');
            }
            
        }
    },
    computed: {
        passwordConfirmationRule() {
            return () => (this.password === this.password_confirmation) || 'Password must match'
        }
    }
}
</script>

<style>
body {
    background-color: #3432ff;
}

.form-register {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
}

.form-register a {
    color: antiquewhite;
}

.form-register h2 {
    color: #ffffff;
    margin-bottom: 20px;
}

.v-messages__message {
    color: #000;
}

</style>