import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

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




// let valuePostText = localStorage.getItem("postTextValue");
// let postText = document.querySelector(".postText");
// postText.innerText = valuePostText;
// let imageUrl = localStorage.getItem("imageUrl");
// let image = document.querySelectorAll(".postimg");
// for( let img of image){
//     img.src=imageUrl;
// }
let logout = document.querySelector(".logout");

logout.addEventListener("click", function(){
    const auth = getAuth();    
signOut(auth).then(() => {
  // Sign-out successful.
  alert("Successfully signed out");
  window.location.href = "../index.html";
  window.localStorage.removeItem('userID');
  window.localStorage.removeItem('userEmail');
  window.localStorage.removeItem('USER_NAME');
  window.localStorage.removeItem('USER_DP');
  window.localStorage.removeItem('SenderMail');
  
}).catch((error) => {
  // An error happened.
});
    // localStorage.removeItem("user"); 
});

// let usName = localStorage.getItem("userName");
// let putName = document.querySelector(".inpName").innerText = usName; 