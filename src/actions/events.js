import { types } from "../types/types";


export const eventStartAddNew= (event) =>{
    return async(dispatch)=>{
        console.log(event)
    }
}


const eventAddNew = (event) =>({
    type:types.eventAddNew,
    payload:event

})



export const eventLogout= () =>({

    type: types.eventLogout
})