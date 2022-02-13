import {ref} from 'vue'
import { auth } from '../firebase/config'

let error = ref("");
let loginAccount = async(email, password) => {
    try{
        let response = await auth.signInWithEmailAndPassword(email, password);

        if(!response){
          throw new Error('Cannot login');
        }
        return response;
      }catch(err){
        error.value = err.message;
        console.log(error.value)
      }
}

let useLogin = () => {
    
    return {error, loginAccount}
}

export default useLogin