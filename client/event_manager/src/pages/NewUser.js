import Navbar from "../components/Navbar";
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { newUserValidate } from '../helper/validateNewUser'
import { useState } from "react";

function NewUser(){

  const displayAge=(e)=>{
    var dob = new Date(e.target.value);  
    var month_diff = Date.now() - dob.getTime();  
    var age_dt = new Date(month_diff);   
    var year = age_dt.getUTCFullYear();  
    var age = Math.abs(year - 1970);
    formik.values.dob=e.target.value  
    setAge(age)
  }

  const [age,setAge] = useState("")
  const [sem,setSem] = useState(5)

  const formik = useFormik({
    initialValues : {
      username : '',
      password: '',
      gender:'',
      dob:'',
      email:'',
      branch:'CE',
      sem:'5'
    },
    validate : newUserValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit : async values => {
      console.log(values)
      //setUsername(values.username);
      //navigate('/password')
    }
  })

  return(
      <div>
          <Toaster position='top-center' reverseOrder={false}></Toaster>
          <div className="container mr-auto">
              <div className="row">
                  
                  <div className="col-md-4">
                    <Navbar/>
                  </div>
                  <div className="col-md-8">
                    <form className="row g-3" onSubmit={formik.handleSubmit} name="submit-to-google-sheet">          
                        <div className="col-md-6">
                          <label htmlFor="inputName4" className="form-label">Username</label>
                          <input type="text" className="form-control" id="inputName4"  placeholder="First Middle Last"  name="Name" required {...formik.getFieldProps('username')}/>
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="inputPassword4" className="form-label">Password</label>
                          <input type="password" className="form-control" id="inputPassword4" name="Password" required {...formik.getFieldProps('password')}/>
                        </div>
                        <div className="col-md-6">
                              <label htmlFor="gender" className="form-label">Gender</label>
                              <div className="col-md-12" id="gender">
                                  <div className="col-md-5 form-check form-check-inline">
                                      <input className="form-check-input" type="radio" name="gender" id="inlineRadio1" value="Male" required checked={formik.values.gender === 'Male'} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                    <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                                  </div>
                                  <div className="col-md-5 form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" id="inlineRadio2" value="Female" required checked={formik.values.gender === 'Female'} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                    <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                                  </div>  
                              </div>
                        </div>
                        <div className="col-md-4">
                          <label htmlFor="inputNumber4" className="form-label">Date Of Birth</label>
                          <input type="date" className="form-control" id="dateOfBirth" name="dateOfBirth" required onChange={displayAge}/>
                        </div>        
                        <div className="col-md-2">
                          <label htmlFor="inputNumber4" className="form-label">Age</label>
                          <input type="text" className="form-control" id="age" name="age" disabled value={age}/>
                        </div>
                        <div className="col-md-8">
                          <label htmlFor="inputEmail4" className="form-label">VJTI Email ID</label>
                          <input type="email" className="form-control" id="inputEmail4" name="Email" required pattern="[a-z]*_b[0-9][0-9]@[a-z][a-z].vjti.ac.in" {...formik.getFieldProps('email')}/>
                        </div>
                        <div className="col-md-5">
                          <label htmlFor="inputBranch" className="form-label">Branch</label>
                          <select id="inputBranch" className="form-select" name="Branch" required {...formik.getFieldProps('branch')}>
                            <option>CE</option>
                            <option>IT</option>
                            <option>EE</option>
                            <option>EXTC</option>
                            <option>TEXTILE</option>
                            <option>STRUCTURAL</option>
                            <option>PRODUCTION</option>
                            <option>MECHANICAL</option>
                          </select>
                        </div>
                        <div className=" col-md-7">
                          <label htmlFor="semester" className="form-label">Semester</label>
                          <div className="row m-1" id="sem">
                          <input id="semester" type="range" className="col-sm-7 mb-sm-2" value={sem} min="1" max="8" onInput={(e)=>setSem(e.target.value)} name="Semester" required {...formik.getFieldProps('sem')}/>
                          <input type="text" className="offset-sm-1 col-sm-1 col-md-2 col-lg-2" disabled value={sem}/>
                          </div>
                        </div>
                        <div className="col-8">
                          <button type="submit" className="btn btn-primary" name="submit">Sign in</button>
                        </div>
                    </form>
                  </div>
              </div>
              <div className="row mt-5">
                <div className="offset-3 col-6" id="display"></div>
               </div>
          </div>
      </div>
  )
}

export default NewUser;