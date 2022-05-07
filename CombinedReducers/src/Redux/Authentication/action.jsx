export const STATUS_OF_USER = "STATUS_OF_USER";


//function checking the status of the user whether logged in or not

export const statusOfUser = (data) =>{
    return {
        type : STATUS_OF_USER,
        payload : data
    }
};