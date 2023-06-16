<template>
        <Header />
        <h1>Hello user, Welcome to the Update Movie Page</h1>
</template>

<script>
import Header from './Header.vue'
export default {
        name: 'UpdateMovie',
        components: {
                Header
        },
        mounted() {
        let user = localStorage.getItem('user-info');
                if(!user)
                {
                        this.$router.push({name: 'SignUp'})
                }
        }
}
</script>