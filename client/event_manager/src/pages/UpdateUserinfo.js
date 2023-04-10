import Navbar from "../components/Navbar";

function UpdateUserInfo(){
    return(
        //<Header/>

    <div className="container mr-auto">
        <div className="row">
            <div className="col-md-4">
              <Navbar/>
            </div>
            <div className="col-md-8" id="verification">
                <form className="d-flex flex-column">
                    <div className="col-12 mt-3">
                      <label className="visually-hidden" for="inlineFormInputGroupUsername">Username</label>
                      <div className="input-group">
                        <div className="input-group-text">Name</div>
                        <input type="text" className="form-control" id="name" placeholder="First Middle Last"></input>
                      </div>
                    </div>
                  
                    <div className="col-12 mt-3">
                        <label className="visually-hidden" for="pass">Password</label>
                        <input type="password" className="form-control" placeholder="Password" aria-label="Password" id="pass"></input>
                    </div>
            
                    <div className="col-12 mt-3">
                      <label className="visually-hidden" for="inlineFormInputGroupUsername">VJTI Email ID</label>
                      <div className="input-group">
                        <div className="input-group-text">Vjti Email ID</div>
                        <input type="email" className="form-control" id="inputEmail4" name="Email" required pattern="[a-z]*_b[0-9][0-9]@[a-z][a-z].vjti.ac.in"></input>
                      </div>
                    </div>
            
                    <div className="col-12 mt-3">
                      <button type="submit" className="btn btn-primary" onclick="verify(event)">Submit</button>
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