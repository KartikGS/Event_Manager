// const scriptURL = 'https://script.google.com/macros/s/AKfycbz3ZjHoBjwdYR671fKzQskS2h1QS5Ydr3yZ0KziTHybPlF24KTztEL0-15m-pS4P36V-g/exec'
const form = document.forms['submit-to-google-sheet']
const url = "http://localhost:3000/new_user";
const options = {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
  body: "",
};

// form.addEventListener('submit', e => {
//   e.preventDefault()
//   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//     .then(response => {
//     document.getElementById('display').innerHTML=`
//     <div class="card">
// <div class="card-body">
//   <h5 class="card-title">${document.getElementById('inputName4').value}</h5>
//   <h6 class="card-subtitle mb-2 text-muted">Phone : ${document.getElementById('inputNumber4').value} &nbsp;&nbsp;&nbsp;&nbsp; Mail : ${document.getElementById('inputEmail4').value}</h6>
//   <h6 class="card-subtitle mb-2 text-muted">Branch : ${document.getElementById('inputBranch').value} &nbsp;&nbsp;&nbsp;&nbsp; Semester : ${document.getElementById('semester').value}</h6>
//   <p class="card-text">
//     ${document.getElementById('about').value}<br>${document.getElementById('inputAddress').value}<br>  ${document.getElementById('inputCity').value}  ${document.getElementById('inputState').value}  ${document.getElementById('inputZip').value}
//    </p>
// </div>
// </div>
//     `
//   })
//     .catch(error => console.error('Error!', error.message))
// })

form.addEventListener('submit',e=>{
  let name = document.getElementById('inputName4').value.trim();
  let password = document.getElementById('inputPassword4').value.trim();
  let gender = form.elements.namedItem("gender").value.trim();
  let dob = document.getElementById('dateOfBirth').value.trim();
  let email = document.getElementById('inputEmail4').value.trim();
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
      document.getElementById('display').innerHTML=`
       <div class="card">
        <div class="card-body">
          <h5 class="card-title">${document.getElementById('inputName4').value}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Age : ${document.getElementById('age').value} &nbsp;&nbsp;&nbsp;&nbsp; Mail : ${document.getElementById('inputEmail4').value}</h6>
          <p class="card-text"><h6>Branch : ${document.getElementById('inputBranch').value} &nbsp;&nbsp;&nbsp;&nbsp; Semester : ${document.getElementById('semester').value}</h6></p>
        </div>
      </div>
     ` 
    });
  }else{
      alert("Invalid Input");
      e.preventDefault()
  }
})
    
//age calculator
function displayAge(){
    var dob = new Date(document.getElementById('dateOfBirth').value);  
    var month_diff = Date.now() - dob.getTime();  
    var age_dt = new Date(month_diff);   
    var year = age_dt.getUTCFullYear();  
    var age = Math.abs(year - 1970);  
    document.getElementById('age').value=age.toString();
}  