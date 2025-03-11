import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getFirestore, collection, addDoc, doc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

//  import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfigAuth = {
   apiKey: "AIzaSyAN3vyT1zRUykvDZjLBHb7mKjL5rCiie-8",
   authDomain: "smit-project-a55c0.firebaseapp.com",
   projectId: "smit-project-a55c0",
   storageBucket: "smit-project-a55c0.firebasestorage.app",
   messagingSenderId: "801548382249",
   appId: "1:801548382249:web:414cd370cbf1c5a877ac38"
 };

// Initialize Firebase App for Auth
const authApp = initializeApp(firebaseConfigAuth, "authApp");  // Named instance
const auth = getAuth(authApp);  // Get Auth instance

 let btnSignup = document.querySelector(".signupBtn");

btnSignup.addEventListener("click", datahandler);
function datahandler(event){
 
    event.preventDefault();
    let userName = document.querySelector(".name").value;
    let email = document.querySelector(".signupEmail").value;
    let password = document.querySelector(".signupPassword").value;

    if(email=="" || password==""){
      alert("Required Email And Password");
    }
    else{
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // The link was successfully sent. Inform the user.
    // Save the email locally so you don't need to ask the user for it again
    // if they open the link on the same device.
    // window.localStorage.setItem('emailForSignIn', email);
    const user= userCredential.user;

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("User Already Exists");
    // ...
  });
}
}

 

const firebaseConfigDB = {
  apiKey: "AIzaSyBO5R1pBY0ZgxLif13xHDhu15aCHi212kY",
  authDomain: "database-e77bf.firebaseapp.com",
  projectId: "database-e77bf",
  storageBucket: "database-e77bf.firebasestorage.app",
  messagingSenderId: "445149188563",
  appId: "1:445149188563:web:7de8f2b637871929fe5f26"
};

// Initialize Firebase App for Firestore
const dbApp = initializeApp(firebaseConfigDB, "dbApp");  // Named instance
const db = getFirestore(dbApp);  // Get Firestore instance

async function pushMail(e){
  const userReq = collection(db, "usermails");
 e.preventDefault();
 let userName = document.querySelector(".name").value;
 let email = document.querySelector(".signupEmail").value;
 let userDP = document.querySelector(".dpURL").value;
window.localStorage.setItem("USER_NAME", userName);
window.localStorage.setItem("USER_DP", userDP);
  try {
    const docRef = await addDoc(collection(db, "usermails"), {
       userName : userName,
       userEmail : email,
       dpURL : userDP,
    });
    window.location.href= "./index.html";
  } catch (e) {
    console.error("Error adding document: ", e);
  }

} 
 

btnSignup.addEventListener("click", pushMail);