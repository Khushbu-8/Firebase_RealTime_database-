import { getDatabase, ref,set } from "firebase/database";
import { app } from "../../firebaseconfigdb";

const db = getDatabase(app)

export const AddUser = (data) => {
   return async(dispatch) =>{
      try {
         set(ref(db,"User/" + data.id),{
            name: data.name,
            phone: data.phone,
            email: data.email,
            company : data.email,
            massege:data.massege
         })
         dispatch({
            type:"Add_Detail",
            payload:data
         })
      } catch (error) {
         console.log(error);
         return false;
      }
   }
}
