import toast from 'react-hot-toast'

export async function newUserValidate(values){
    const errors = newUserVerify({}, values);

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

function newUserVerify(error = {}, values){
    if(!values.username.trim() || !values.password.trim() || !values.gender.trim() || !values.email.trim() || !values.dob.trim() || !values.branch.trim() || !values.sem.trim()){
        error.username = toast.error('Invalid Inputs...!');
    }

    return error;
}