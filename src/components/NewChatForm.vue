<template>
    <form @submit.prevent="Sending">
        <textarea
         placeholder="text message and hit enter to send" 
         v-model="message"
         ></textarea>
         <div class="flexing">
             <div class="item">

             </div>
             <div class="item">
                 <button class="btn" type="submit">
                    Send
                </button>
             </div>
         </div>
    </form>
</template>

<script>
import { ref } from 'vue'
import getUser from "../composables/getUser";
import {timestamp} from "../firebase/config";
import useCollection from '../composables/useCollection'
export default {
    setup(){
        let message=ref("");
        let {user}=getUser();
        let {error, addDocument} = useCollection("messages");

        let Sending = async() => {
            let chat = {
                message: message.value,
                username: user.value.displayName,
                created_at: timestamp() 
            }
            await addDocument(chat)
            message.value = "";
        }

        return {message, Sending, error}
    }
}
</script>

<style>
      form {
        margin: 10px;
      }
      textarea {
        width: 100%;
        max-width: 100%;
        margin-bottom: 6px;
        padding: 10px;
        box-sizing: border-box;
        border: 0;
        border-radius: 20px;
        font-family: inherit;
        outline: none;
      }
      .flexing{
          display: flex;
          justify-content: space-between;
      }
      .btn{
          margin-bottom: 10px;
      }
</style>