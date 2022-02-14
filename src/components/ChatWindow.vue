<template>
    <div class="chat-window">
        <div class="messages" ref="messageBox">
            <div class="single" v-for="message in formattedMessages" :key="message.id">
                <span class="created-at">{{message.created_at}}</span>
                <span class="name">{{message.username}}</span>
                <span class="message">{{message.message}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import {db} from '../firebase/config';
import { computed, onUpdated } from '@vue/runtime-core';
import {formatDistanceToNow} from 'date-fns';
export default {
    setup(){
        let messages = ref([]);
        let messageBox = ref(null);

        onUpdated(()=>{
            messageBox.value.scrollTop = messageBox.value.scrollHeight
        })

        let formattedMessages = computed(()=>{
            return messages.value.map((message)=>{
                let formatTime = formatDistanceToNow(message.created_at.toDate());
                return {...message, created_at:formatTime}
            })
        })

        db.collection('messages').orderBy('created_at').onSnapshot((snap)=>{
            let result = [];
            snap.docs.forEach((doc)=>{
                let document = {...doc.data(), id: doc.id};
                    
                doc.data().created_at && result.push(document);
            })
                messages.value = result
        })
        return {messages, formattedMessages, messageBox}
    }
}
</script>

<style>
     .chat-window {
        background: #fafafa;
        padding: 30px 20px;
      }
      .single {
        margin: 18px 0;
        
      }
      .created-at {
        display: block;
        color: #999;
        font-size: 12px;
        margin-bottom: 4px;
      }
      .name {
        font-weight: bold;
        margin-right: 6px;
      }
      .messages {
        max-height: 400px;
        overflow: auto;
        
      }
</style>