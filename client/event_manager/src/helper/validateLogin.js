import toast from 'react-hot-toast'

export async function loginValidate(values){
    const errors = loginVerify({}, values);

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

function loginVerify(error = {}, values){
    if(!values.username.trim() || !values.password.trim()){
        error.username = toast.error('Invalid Inputs...!');
    }

    return error;
}