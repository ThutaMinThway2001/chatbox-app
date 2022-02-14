import {ref} from 'vue'
import {db} from '../firebase/config'

let useCollection = (collection) => {
    let error = ref(null);

    let addDocument = async(document) => {
        try{
            await db.collection(collection).add(document)
        }catch(err){
            console.log(err)
        }
    }

    return {error, addDocument};
}

export default useCollection;