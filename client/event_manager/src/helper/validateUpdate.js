import toast from 'react-hot-toast'

export async function updateValidate(values){
    const errors = updateVerify({}, values);

    //if(values.username){
    //    // check user exist or not
    //    const { status } = await authenticate(values.username);
    //    
    //    if(status !== 200){
    //        errors.exist = toast.error('User does not exist...!')
    //    }
    //}

    return errors;
}

function updateVerify(error = {}, values){
    if(!values.username.trim() || !values.password.trim() || !values.email.trim()){
        error.username = toast.error('Invalid Inputs...!');
    }

    return error;
}