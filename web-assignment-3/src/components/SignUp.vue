<template>
<div class="container">
        <div class="columns is-centered">
                <div class="column has-text-centered is-6-fullhd is-6-desktop is-6-tablet is-12-mobile">
                <input class="input is-primary is-normal" type="text" v-model="name" placeholder="Enter Name" />
                <input class="input is-primary is-normal" type="text" v-model="email" placeholder="Enter Email" />
                <input class="input is-primary is-normal" type="password" v-model="password" placeholder="Enter Password" />
                <button class="button is-primary is-fullwidth is-normal" v-on:click="signUp">Sign Up</button>
                </div>
        </div>
</div>
</template>
<script>
/*export default {
        name :'SignUp'
}*/

import axios from 'axios'
export default {
  name: 'SignUp',
  data()
  {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods:{
    async signUp()
    {
      //console.warn("signup",this.name,this.email,this.password)
      let result = await axios.post("http://localhost:3000/users",{
        name:this.name,
        email:this.email,
        password:this.password
      })

      console.warn(result);
      if(result.status==201)
      {
        //alert("sign up complete");
        localStorage.setItem("user-info",JSON.stringify(result.data))
        this.$router.push({name: 'HomePage'})
      }
    }
  },
  mounted() {
        let user = localStorage.getItem('user-info');
        if(user)
        {
                this.$router.push({name: 'HomePage'})
        }
  },
}
</script>