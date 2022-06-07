import { store } from "./store"
import { ADDITION } from "./action"
import { MULTIPLICATION } from "./action"
import { DIVISION } from "./action"
import { SUBTRACTION } from "./action"
const init={count:0}
export const calculatorReducer=(state=init,{type,payload})=>{
 console.log(state,payload,type,typeof(payload),"payload")
 switch(type){
    case ADDITION:{
        state.count=state.count+payload
        return {...state}
    }
    case SUBTRACTION:{
        state.count=state.count-payload
        return {...state}
    }
    case MULTIPLICATION:{
        state.count=state.count*payload
        return {...state}
    }
    case DIVISION:{
        state.count=state.count/payload
        return {...state}
    }
    
    
    default: return {...state}
}
}