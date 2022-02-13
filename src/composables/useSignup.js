import {ref} from 'vue'
import {auth} from "../firebase/config"

let error = ref(null);

let signupAccount = async(email, password, displayName) =>{
    try{
        let res=await auth.createUserWithEmailAndPassword(email,password)
        if(!res){
            throw new Error("could not create new user")
        }
        res.user.updateProfile({displayName})
        return res;
    }catch(err){
        error.value=err.message;
        console.log(error.value);
    }
}

let useSignup = () =>{
    return {error, signupAccount}
}

export default useSignup;
