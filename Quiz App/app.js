function signup(){

    var a = document.getElementById('email').value;
    var b = document.getElementById('pass').value;
  
  //   firebase.auth().createUserWithEmailAndPassword(email, password)
  // .then((userCredential) => {
  //   // Signed in 
  //   var user = userCredential.user;
  //   // ...
  // })
  // .catch((error) => {
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   // ..
  // });
    localStorage.setItem('email', a)
    localStorage.setItem('password', b)

}
function signin(){

    var a = document.getElementById('emailx').value;
    var b = document.getElementById('passx').value;

  //   firebase.auth().signInWithEmailAndPassword(email, password)
  // .then((userCredential) => {
  //   // Signed in
  //   var user = userCredential.user;
  //   // ...
  // })
  // .catch((error) => {
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  // });
    localStorage.getItem('email')
    localStorage.getItem('password')
    if( a== localStorage.getItem('email') && b == localStorage.getItem('password') )
{
    alert("Correct")
}
else{
    alert('Wrong')
}
}
function pop(){
  window.location.href='./signin.html'
}