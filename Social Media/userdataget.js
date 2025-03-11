import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs,limit , query, where, doc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";


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



async function getDpandUser_Name() {

    const qi = query(collection(db, "usermails"), where("userEmail", "==", window.localStorage.getItem('userEmail')));
    const querySnapshot = await getDocs(qi);
    querySnapshot.forEach((doc) => {
        let UserName = doc.data().userName;
        let UserDP = doc.data().dpURL;
        let Logo = document.querySelector(".navbarlogo");
        Logo.src = UserDP;
        let Lo = document.querySelector(".lo");
        Lo.src = UserDP;
        let UserNameText = document.querySelector(".logosidetext");
        UserNameText.innerText = UserName;
    });
  
  }
  getDpandUser_Name();