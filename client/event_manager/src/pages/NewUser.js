import Navbar from "../components/Navbar";

function NewUser(){
    return(
        <div>
            <div className="container mr-auto">
                <div className="row">
                    
                    <div className="col-md-4">
                      <Navbar/>
                    </div>

                    <div className="col-md-8">

                      <form className="row g-3" name="submit-to-google-sheet">          

                          <div className="col-md-6">
                            <label for="inputName4" className="form-label">Username</label>
                            <input type="text" className="form-control" id="inputName4"  placeholder="First Middle Last"  name="Name" required></input>
                          </div>


                          <div className="col-md-6">
                            <label for="inputPassword4" className="form-label">Password</label>
                            <input type="password" className="form-control" id="inputPassword4" name="Password" required></input>
                          </div>


                          <div className="col-md-6">
                                <label for="gender" className="form-label">Gender</label>
                                <div className="col-md-12" id="gender">
                                    <div className="col-md-5 form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender" id="inlineRadio1" value="Male"></input>
                                      <label className="form-check-label" for="inlineRadio1">Male</label>
                                    </div>
                                    <div className="col-md-5 form-check form-check-inline">
                                      <input className="form-check-input" type="radio" name="gender" id="inlineRadio2" value="Female"></input>
                                      <label className="form-check-label" for="inlineRadio2">Female</label>
                                    </div>  
                                </div>
                          </div>


                          <div className="col-md-4">
                            <label for="inputNumber4" className="form-label">Date Of Birth</label>
                            <input type="date" className="form-control" id="dateOfBirth" name="dateOfBirth" onchange="displayAge()" required></input>
                          </div>        

                          <div className="col-md-2">
                            <label for="inputNumber4" className="form-label">Age</label>
                            <input type="text" className="form-control" id="age" name="age" disabled></input>
                          </div>

                          <div className="col-md-8">
                            <label for="inputEmail4" className="form-label">VJTI Email ID</label>
                            <input type="email" className="form-control" id="inputEmail4" name="Email" required pattern="[a-z]*_b[0-9][0-9]@[a-z][a-z].vjti.ac.in"></input>
                          </div>

                          <div className="col-md-5">
                            <label for="inputBranch" className="form-label">Branch</label>
                            <select id="inputBranch" className="form-select" name="Branch" required>
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
                            <label for="semester" className="form-label">Semester</label>
                            <div className="row m-1" id="sem">
                            <input id="semester" type="range" className="col-sm-7 mb-sm-2" value="1" min="1" max="8" oninput="this.nextElementSibling.value = this.value" name="Semester" required></input>
                            <input type="text" className="offset-sm-1 col-sm-1 col-md-2 col-lg-2" disabled></input>
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