<template>
  <h2>Login</h2>
  <form @submit.prevent="login">
    <input type="email" placeholder="email" v-model="email">
    <input type="password" placeholder="password" v-model="password">
    <div v-if="error" class="error">{{error}}</div>
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useLogin from '../composables/useLogin'

export default {
    setup(props, context){
        let email = ref("");
        let password = ref("");
        let {error, loginAccount} = useLogin();

        let login = async() => {
          let response = await loginAccount(email.value, password.value);
          if(response){
            context.emit('enterChatRoom')
          }
        }

        return {email, password, login, error}
    }
}
</script>

<style>
</style>