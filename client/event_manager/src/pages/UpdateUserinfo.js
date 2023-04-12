import Navbar from "../components/Navbar";
import { useFormik } from 'formik';
import { updateValidate } from '../helper/validateUpdate'
import { Toaster } from 'react-hot-toast';

function UpdateUserInfo(){

  const formik = useFormik({
    initialValues : {
      username : '',
      password: '',
      email:'',
    },
    validate : updateValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit : async values => {
      console.log(values)
      //setUsername(values.username);
      //navigate('/password')
    }
  })

    return(
    <div className="container mr-auto">
      <Toaster position='top-center' reverseOrder={false}></Toaster>
        <div className="row">
            <div className="col-md-4">
              <Navbar/>
            </div>
            <div className="col-md-8" id="verification">
                <form onSubmit={formik.handleSubmit} className="d-flex flex-column">
                    <div className="col-12 mt-3">
                      <label className="visually-hidden" htmlFor="inlineFormInputGroupUsername">Username</label>
                      <div className="input-group">
                        <div className="input-group-text">Name</div>
                        <input type="text" className="form-control" id="name" placeholder="First Middle Last" {...formik.getFieldProps('username')}/>
                      </div>
                    </div>
                  
                    <div className="col-12 mt-3">
                        <label className="visually-hidden" htmlFor="pass">Password</label>
                        <input type="password" className="form-control" placeholder="Password" aria-label="Password" id="pass" {...formik.getFieldProps('password')}/>
                    </div>
            
                    <div className="col-12 mt-3">
                      <label className="visually-hidden" htmlFor="inlineFormInputGroupUsername">VJTI Email ID</label>
                      <div className="input-group">
                        <div className="input-group-text">Vjti Email ID</div>
                        <input type="email" className="form-control" id="inputEmail4" name="Email" required pattern="[a-z]*_b[0-9][0-9]@[a-z][a-z].vjti.ac.in" {...formik.getFieldProps('email')}/>
                      </div>
                    </div>
            
                    <div className="col-12 mt-3">
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-12" id="display">

            </div>
        </div>
    </div>
    )
}

export default UpdateUserInfo;