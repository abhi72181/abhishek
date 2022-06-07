export const ADDITION="ADDITION";
export const SUBTRACTION="SUBTRACTION";
export const MULTIPLICATION="MULTIPLICATION";
export const DIVISION="DIVISION";

export const add=({payload})=>{
    return {
        type:ADDITION,
    payload:payload
    }
    
}

export const sub=({payload})=>{
    return {
        type:SUBTRACTION,
    payload:payload
    }
    
}

export const multiply=({payload})=>{
    return {
        type:MULTIPLICATION,
    payload:payload
    }
    
}

export const divide=({payload})=>{
    return {
        type:DIVISION,
    payload:payload
    }
    
}
