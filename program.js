var user = [];
function submit() {
     var userName =  document.getElementById("Name").value ;
     var userEmail = document.getElementById("Email").value;
     var userPhone =document.getElementById("phone").value ;

    var newUser = {
        name : userName ,
        email :  userEmail,
        phone : userPhone,
    }
    user.push(newUser);
    displayResult ();
}
  function  displayResult() {
 var result = "";
 for (let index = 0; index < user.length; index++) {
    const users = user[index];
    console.log("users" + users);
    result = result + `<div><h1>Name : ${users.name}</h1> <p> Email : ${users.email}</p><span>Phone : ${users.phone}</span>`;
 }
 console.log("result", result);
 document.getElementById("result").innerHTML = result;
    
  }
