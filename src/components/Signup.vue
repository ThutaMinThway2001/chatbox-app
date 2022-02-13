<template>
  <h2>Sign Up</h2>
  <form @submit.prevent="signUp">
      <input type="text" placeholder="display name" v-model="displayName">
      <input type="email" placeholder="email" v-model="email">
      <input type="password" placeholder="password" v-model="password">
      <div v-if="error" class="error">{{error}}</div>
      <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../composables/useSignup'

export default {
    setup(){
        let displayName=ref("");
        let email=ref("");
        let password=ref("");
        let {error, signupAccount} = useSignup();
        let signUp=async()=>{
            await signupAccount(email.value, password.value, displayName.value)
        }
        return {displayName,email,password,signUp, error};
    }
}
</script>