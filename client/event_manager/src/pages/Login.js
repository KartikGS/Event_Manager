import Navbar from "../components/Navbar";
import { useFormik } from 'formik';
import { loginValidate } from '../helper/validateLogin'
import { Toaster } from 'react-hot-toast';

function Login(){

  const formik = useFormik({
    initialValues : {
      username : '',
      password: '',
      remember:'',
    },
    validate : loginValidate,
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
                <div className="col-md-8">
                    <form onSubmit={formik.handleSubmit} className="d-flex flex-column">
                        <div className="col-12 m-3">
                          <label className="visually-hidden" htmlFor="inlineFormInputGroupUsername">Username</label>
                          <div className="input-group">
                            <div className="input-group-text">Name</div>
                            <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="First Middle Last" {...formik.getFieldProps('username')}/>
                          </div>
                        </div>

                        <div className="col-12 m-3">
                          <label className="visually-hidden" htmlFor="pass">Password</label>
                           <input type="password" className="form-control" placeholder="Password" aria-label="Password" id="pass" {...formik.getFieldProps('password')}/>
                        </div>

                        <div className="col-12 m-3">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="inlineFormCheck" {...formik.getFieldProps('remember')}/>
                            <label className="form-check-label" htmlFor="inlineFormCheck">
                              Remember me
                            </label>
                          </div>
                        </div>

                        <div className="col-12 m-3">
                          <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;