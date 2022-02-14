<template>
  <div class="container">
       <Navbar></Navbar>
       <NewChatForm></NewChatForm>
  </div>
</template>

<script>
import NewChatForm from '../components/NewChatForm'
import { watch } from '@vue/runtime-core'
import Navbar from '../components/Navbar'
import {useRouter} from 'vue-router'
import getUser from '../composables/getUser'

export default {
  components: {
    NewChatForm, Navbar },
  setup(){
    let router = useRouter();
    let {user} = getUser();

    watch(user, ()=>{
      if(!user.value){
        router.push('/')
      }
    })
  }
}
</script>

<style>

</style>