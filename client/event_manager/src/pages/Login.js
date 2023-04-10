import Navbar from "../components/Navbar";

function Login(){
    return(
        <div className="container mr-auto">
            <div className="row">
                <div className="col-md-4">
                  <Navbar/>
                </div>
                <div className="col-md-8">
                    <form className="d-flex flex-column">
                        <div className="col-12 m-3">
                          <label className="visually-hidden" for="inlineFormInputGroupUsername">Username</label>
                          <div className="input-group">
                            <div className="input-group-text">Name</div>
                            <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="First Middle Last"></input>
                          </div>
                        </div>

                        <div className="col-12 m-3">
                          <label className="visually-hidden" for="pass">Password</label>
                           <input type="password" className="form-control" placeholder="Password" aria-label="Password" id="pass"></input>
                        </div>

                        <div className="col-12 m-3">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="inlineFormCheck"></input>
                            <label className="form-check-label" for="inlineFormCheck">
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