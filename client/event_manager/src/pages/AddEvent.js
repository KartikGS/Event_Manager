import Navbar from "../components/Navbar";

function AddEvent(){
    return(
        <div classNameName="container mr-auto">
            <div className="row">
                <div className="col-md-4">
                  <Navbar/>
                </div>
                <div className="col-md-8">
                    <form id='form' className="row g-3" name="submit-to-google-sheet" method="POST" enctype="multipart/form-data">

                        <div className="col-md-6">
                          <label for="inputName4" className="form-label">Title</label>
                          <input type="text" className="form-control" id="inputName4"  placeholder=""  name="title" required></input>
                        </div>


                        <div className="col-md-6">
                          <label for="inputPassword4" className="form-label">Venue</label>
                          <input type="text" className="form-control" id="inputPassword4" name="venue" required></input>
                        </div>

                        <div className="col-md-12">
                          <label for="inputNumber4" className="form-label">Start Date and Time</label>
                          <input type="datetime-local" className="form-control" id="dateOfBirth" name="start" required></input>
                        </div>        


                        <div className="col-md-12">
                          <label for="inputNumber4" className="form-label">End Date and Time</label>
                          <input type="datetime-local" className="form-control" id="inputNumber4" name="end" required></input>
                        </div>

                        <div className="col-md-6">
                          <label for="inputImage" className="form-label">BillBoard</label>
                          <input type="file" className="form-control" id="inputImage" name="file" accept="image/png" onchange="loadFile(event)"></input>
                        </div>

                        <div className="col-md-6">
                          <label for="inputState" className="form-label">Club</label>
                          <select id="inputState" className="form-select" name="club" required>
                            <option>GSDC</option>
                            <option>COC</option>
                            <option>E-CELL</option>
                            <option>Enthusia</option>
                            <option>Ranghawardhan</option>
                          </select>
                        </div>

                        <div className="col-12">
                          <label for="about" className="form-label">Description of the event</label>
                          <textarea className="form-control" id="about" name="desc" rows="5" required></textarea>
                        </div>

                        <div className="col-6">
                          <button type="submit" id='add1' className="btn btn-primary">Add to Database</button>
                        </div>
                    </form>
                    <div className="col-6 m-1">
                      <button id='add' onclick="handleAuthClick()" className="btn btn-primary">Add to Calender</button>
                    </div>
                    <pre id="content"></pre>
                    <iframe src="https://calendar.google.com/calendar/embed?src=kgshetty_b20%40it.vjti.ac.in&ctz=Asia%2FKolkata" width="800" height="600" frameborder="0" scrolling="no" title="Calender"/>
                </div>
            </div>
            <div className="row mt-5">
              <div className="offset-3 col-6" id="display"></div>
            </div>
        </div>
    )
}

export default AddEvent;