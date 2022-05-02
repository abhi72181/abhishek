// action types
export const IS_AUTH="IS_AUTH"
// Action Creators
export const isAuth=(data)=>{
    return {
        type:IS_AUTH,
        payload:data
    }
}