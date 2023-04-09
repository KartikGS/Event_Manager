import Navbar from "../components/Navbar";

function New_User(){
    return(
        <div>
            <div class="container mr-auto">
                <div class="row">
                    
                    <div class="col-md-4">
                      <Navbar/>
                    </div>

                    <div class="col-md-8">

                      <form class="row g-3" name="submit-to-google-sheet">          

                          <div class="col-md-6">
                            <label for="inputName4" class="form-label">Username</label>
                            <input type="text" class="form-control" id="inputName4"  placeholder="First Middle Last"  name="Name" required></input>
                          </div>


                          <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Password</label>
                            <input type="password" class="form-control" id="inputPassword4" name="Password" required></input>
                          </div>


                          <div class="col-md-6">
                                <label for="gender" class="form-label">Gender</label>
                                <div class="col-md-12" id="gender">
                                    <div class="col-md-5 form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="gender" id="inlineRadio1" value="Male"></input>
                                      <label class="form-check-label" for="inlineRadio1">Male</label>
                                    </div>
                                    <div class="col-md-5 form-check form-check-inline">
                                      <input class="form-check-input" type="radio" name="gender" id="inlineRadio2" value="Female"></input>
                                      <label class="form-check-label" for="inlineRadio2">Female</label>
                                    </div>  
                                </div>
                          </div>


                          <div class="col-md-4">
                            <label for="inputNumber4" class="form-label">Date Of Birth</label>
                            <input type="date" class="form-control" id="dateOfBirth" name="dateOfBirth" onchange="displayAge()" required></input>
                          </div>        

                          <div class="col-md-2">
                            <label for="inputNumber4" class="form-label">Age</label>
                            <input type="text" class="form-control" id="age" name="age" disabled></input>
                          </div>

                          <div class="col-md-8">
                            <label for="inputEmail4" class="form-label">VJTI Email ID</label>
                            <input type="email" class="form-control" id="inputEmail4" name="Email" required pattern="[a-z]*_b[0-9][0-9]@[a-z][a-z].vjti.ac.in"></input>
                          </div>

                          <div class="col-md-5">
                            <label for="inputBranch" class="form-label">Branch</label>
                            <select id="inputBranch" class="form-select" name="Branch" required>
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

                          <div class=" col-md-7">
                            <label for="semester" class="form-label">Semester</label>
                            <div class="row m-1" id="sem">
                            <input id="semester" type="range" class="col-sm-7 mb-sm-2" value="1" min="1" max="8" oninput="this.nextElementSibling.value = this.value" name="Semester" required></input>
                            <input type="text" class="offset-sm-1 col-sm-1 col-md-2 col-lg-2" disabled></input>
                            </div>
                          </div>

                          <div class="col-8">
                            <button type="submit" class="btn btn-primary" name="submit">Sign in</button>
                          </div>
                      </form>
                    </div>
                </div>
                <div class="row mt-5">
                  <div class="offset-3 col-6" id="display"></div>
                 </div>
            </div>
        </div>
    )
}

export default New_User;