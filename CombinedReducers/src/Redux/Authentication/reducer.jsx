import { STATUS_OF_USER } from "./action";

const init = {
    isLoggedIn : false
};

export const authenticationReducer = (store = init , {type, payload}) =>{
    switch(type) {
        case STATUS_OF_USER : 
        if( payload !== null ){
            //it means payload is having some value and that means it is logged in
            return{
                ...store,
                isLoggedIn : true
            }
        }
        return store ;
        default : return store;
    }
}