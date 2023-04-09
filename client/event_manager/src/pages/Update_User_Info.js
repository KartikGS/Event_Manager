import Navbar from "../components/Navbar";

function Update_User_Info(){
    return(
        //<Header/>

    <div class="container mr-auto">
        <div class="row">
            <div class="col-md-4">
              <Navbar/>
            </div>
            <div class="col-md-8" id="verification">
                <form class="d-flex flex-column">
                    <div class="col-12 mt-3">
                      <label class="visually-hidden" for="inlineFormInputGroupUsername">Username</label>
                      <div class="input-group">
                        <div class="input-group-text">Name</div>
                        <input type="text" class="form-control" id="name" placeholder="First Middle Last"></input>
                      </div>
                    </div>
                  
                    <div class="col-12 mt-3">
                        <label class="visually-hidden" for="pass">Password</label>
                        <input type="password" class="form-control" placeholder="Password" aria-label="Password" id="pass"></input>
                    </div>
            
                    <div class="col-12 mt-3">
                      <label class="visually-hidden" for="inlineFormInputGroupUsername">VJTI Email ID</label>
                      <div class="input-group">
                        <div class="input-group-text">Vjti Email ID</div>
                        <input type="email" class="form-control" id="inputEmail4" name="Email" required pattern="[a-z]*_b[0-9][0-9]@[a-z][a-z].vjti.ac.in"></input>
                      </div>
                    </div>
            
                    <div class="col-12 mt-3">
                      <button type="submit" class="btn btn-primary" onclick="verify(event)">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-12" id="display">

            </div>
        </div>
    </div>
    )
}

export default Update_User_Info;