const url = "http://localhost:5000/update";
const options = {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
  body: "",
};

function verify(e){
    let name = document.getElementById('name').value.trim();
  let password = document.getElementById('pass').value.trim();
  let email = document.getElementById('inputEmail4').value.trim();
  options.body =JSON.stringify({
    name: name,
    password: password,
    email: email,
  })
  if(name && password && email){
    e.preventDefault();
    fetch(url, options)
    .then((response) =>response.json())
    .then((data) => {
      alert(`${data.message}`);
      if(data.message=='Verified'){
        document.getElementById('display').innerHTML=`
        <div class="col-md-12">
        <form class="row g-3" name="submit-to-google-sheet">          
          
          <div class="col-md-6">
    <label for="inputName4" class="form-label">Username</label>
    <input type="text" class="form-control" id="inputName4"  placeholder="First Middle Last"  name="Name" required>
  </div>
  
  
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4" name="Password" required>
  </div>
  
  
  <div class="col-md-6">
     <label for="gender" class="form-label">Gender</label>
    <div class="col-md-12" id="gender">
      <div class="col-md-5 form-check form-check-inline">
  <input class="form-check-input" type="radio" name="gender" id="inlineRadio1" value="Male">
  <label class="form-check-label" for="inlineRadio1">Male</label>
</div>
<div class="col-md-5 form-check form-check-inline">
  <input class="form-check-input" type="radio" name="gender" id="inlineRadio2" value="Female">
  <label class="form-check-label" for="inlineRadio2">Female</label>
</div>  
    </div>
  </div>
  
  
  <div class="col-md-4">
    <label for="inputNumber4" class="form-label">Date Of Birth</label>
    <input type="date" class="form-control" id="dateOfBirth" name="dateOfBirth" onchange="displayAge()" required>
  </div>        
  
  <div class="col-md-2">
    <label for="inputNumber4" class="form-label">Age</label>
    <input type="text" class="form-control" id="age" name="age" disabled>
  </div>
    
  <div class="col-md-8">
    <label for="inputEmail4" class="form-label">VJTI Email ID</label>
    <input type="email" class="form-control" id="email" name="Email" required pattern="[a-z]*_b[0-9][0-9]@[a-z][a-z].vjti.ac.in">
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
    <input id="semester" type="range" class="col-sm-7 mb-sm-2" value="1" min="1" max="8" oninput="this.nextElementSibling.value = this.value" name="Semester" required>
    <input type="text" class="offset-sm-1 col-sm-1 col-md-2 col-lg-2" disabled>
    </div>
  </div>
  
  <div class="col-8">
    <button type="submit" class="btn btn-primary" name="submit" onclick="update(event)">Update</button>
  </div>
</form>
      </div>
        `
      }
    });
  }else{
      alert("Invalid Input");
      e.preventDefault()
  }
}

function update(e){
  let name = document.getElementById('inputName4').value.trim();
  let password = document.getElementById('inputPassword4').value.trim();
  let gender = document.forms['submit-to-google-sheet'].elements.namedItem("gender").value.trim();
  let dob = document.getElementById('dateOfBirth').value.trim();
  let email = document.getElementById('email').value.trim();
  let branch = document.getElementById('inputBranch').value.trim();
  let sem = document.getElementById('semester').value.trim();
  options.body =JSON.stringify({
    name: name,
    password: password,
    gender: gender,
    dob: dob,
    email: email,
    branch: branch,
    sem: sem
  })
  if(name && password && email && branch && sem){
    e.preventDefault();
    fetch(url, options)
    .then((response) =>response.json())
    .then((data) => {
      alert(`${data.message}`); 
    });
  }else{
      alert("Invalid Input");
      e.preventDefault()
  }
}

//age calculator
function displayAge(){
    var dob = new Date(document.getElementById('dateOfBirth').value);  
    var month_diff = Date.now() - dob.getTime();  
    var age_dt = new Date(month_diff);   
    var year = age_dt.getUTCFullYear();  
    var age = Math.abs(year - 1970);  
    document.getElementById('age').value=age.toString();
}