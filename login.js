import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
//  import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyAN3vyT1zRUykvDZjLBHb7mKjL5rCiie-8",
   authDomain: "smit-project-a55c0.firebaseapp.com",
   projectId: "smit-project-a55c0",
   storageBucket: "smit-project-a55c0.firebasestorage.app",
   messagingSenderId: "801548382249",
   appId: "1:801548382249:web:414cd370cbf1c5a877ac38"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth();
 
let btnLogin = document.querySelector(".loginBtn");
btnLogin.addEventListener("click", login);

function login(event){
  event.preventDefault();
  let email = document.querySelector(".loginEmail").value;
  let password = document.querySelector(".loginPassword").value;

  if(email=="" || password==""){
    alert("Required Email And Password");
  }
  else{
  signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  // The link was successfully sent. Inform the user.
  // Save the email locally so you don't need to ask the user for it again
  // if they open the link on the same device.
  // window.localStorage.setItem('emailForSignIn', email);
  const user= userCredential.user;
  window.localStorage.setItem('userID', user.uid);
  window.localStorage.setItem('userEmail',email);
  // console.log(window.localStorage.getItem('userID'));
  window.location.href= "./Social Media/main.html"; 
  // ...
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  alert("User Does Not Exist")
  // ...
});
}
}

