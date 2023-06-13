<template>
  <img class="logo" alt="MovieBox logo" src="./assets/MovieBox_Logo_No_Background.png">
  <SignUp />
  <div class="register">
    <input type="text" placeholder="Enter Name" />
    <input type="text" placeholder="Enter Email" />
    <input type="password" placeholder="Enter Password" />
  <button>Sign Up</button>
</div>
</template>

<script>
import SignUp from './components/SignUp.vue'
export default {
  name: 'App',
  components:{
    SignUp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo{
  width:100px;
}

.register input{
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-left: auto;
  margin-bottom: 30px;
  margin-right: auto;
  border: 1px solid lightgray;
}

.register button{
  width: 320px;
  height: 40px;
  border: 1px solid lightgray;
  background: lightgray;
  cursor: pointer;
}
</style>
