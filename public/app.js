
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA-Q9x5bven1Hd6GJnVggUiuu25GiKS1xQ",
    authDomain: "covidbuddy-f7795.firebaseapp.com",
    projectId: "covidbuddy-f7795",
    storageBucket: "covidbuddy-f7795.appspot.com",
    messagingSenderId: "1018512229251",
    appId: "1:1018512229251:web:cd0a7ba4bb7e00035decb6",
    measurementId: "G-C6EXC8FDRP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth();
  
  function signUp(){
    alert("Signed Up");
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    alert("Signed Up");
    window.location.href("sign_in.html");
}


  function SignIn(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      window.top.close();
      window.open("main.html"); 
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("Invalid User");
    });
    promise.catch(e => alert(e.message)); 
  }

  
  

  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  
  
  function googlesignin(){
    firebase.auth().signInWithRedirect(provider); 
  }
  

  function SignUp(){ 
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    if(name.value != "" && email.value != "" && password.value !=""){
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
    // Signed in
    window.top.close();
    window.open("sign_in.html");  
    var user = userCredential.user;
     })
    .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    });
    promise.catch(e => alert(e.message));
   }else{
     alert("Enter Username and Password")
   }
  }


  function SignOut(){
    window.top.close();
    window.open("sign_in.html"); 
  }

  var canvas = document.getElementById("Canvas");
if (canvas.getContext) 
{
  var ctx = canvas.getContext('2d');
  ctx.fillStyle='rgb(109, 104, 246)';    // color of fill
  ctx.fillRect(10, 40, 140, 160); // create rectangle  
}