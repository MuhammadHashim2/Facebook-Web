import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, where } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBO5R1pBY0ZgxLif13xHDhu15aCHi212kY",
    authDomain: "database-e77bf.firebaseapp.com",
    projectId: "database-e77bf",
    storageBucket: "database-e77bf.firebasestorage.app",
    messagingSenderId: "445149188563",
    appId: "1:445149188563:web:7de8f2b637871929fe5f26"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

document.querySelector(".requestdiv").addEventListener("click", async (event) => {
  if (event.target.classList.contains("mail")) {
      let userEmail = event.target.id; // Get the email from the button's ID
      // localStorage.setItem("SendTo:", userEmail);

      try {
        const docRef = await addDoc(collection(db, "requests"), {
          SendTo: userEmail,
          FromEmail: localStorage.getItem('userEmail')
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      event.target.remove();
  }});
    






