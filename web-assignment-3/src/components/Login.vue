<template>
<h1>Login Page</h1>
<div class="container">
        <div class="columns is-centered">
                <div class="column has-text-centered is-6-fullhd is-6-desktop is-6-tablet is-12-mobile">
                <input class="input is-primary is-normal" type="text" v-model="email" placeholder="Enter Email" />
                <input class="input is-primary is-normal" type="password" v-model="password" placeholder="Enter Password" />
                <button class="button is-primary is-fullwidth is-normal" v-on:click="logIn">Login</button>
                <router-link to="/sign-up">Sign Up</router-link>
                </div>
        </div>
</div>
</template>

<script>
export default {
        name: "LogIn"
}
</script>