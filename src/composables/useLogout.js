import { ref } from "vue"
import { auth } from '../firebase/config'

let error = ref(null);

let logoutAccount = async() => {
    try{
        await auth.signOut();
        console.log('user signout');
    }catch(err){
        console.log(err.message);
    }
}

let useLogout = () => {
    return {error, logoutAccount}
}

export default useLogout