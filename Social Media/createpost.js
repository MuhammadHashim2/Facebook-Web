import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";


// Your web app's Firebase configuration
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

let btn = document.querySelector('.createPostBtn');
btn.addEventListener('click', async () => {
    let textarea = document.querySelector('textarea').value;
    let imageurl = document.querySelector('input').value;
    try {
        const docRef = await addDoc(collection(db, "users"), {
          textForPost: textarea,
          imgUrl: imageurl,
          userId: window.localStorage.getItem('userID'),
          userEmail: window.localStorage.getItem('userEmail'),
          user_Name: window.localStorage.getItem("USER_NAME"),
          user_DP: window.localStorage.getItem("USER_DP")
        });
        window.location.href = "./main.html";
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

});


// async function getDpandUserName(){
//   const q = query(collection(db, "usermails"), where("userEmail", "!=",
//      window.localStorage.getItem('userEmail')));
//      const qi = query(collection(db, "users"), where("userEmail", "!=",
//       window.localStorage.getItem('userEmail')));  
//   const querySnapshot1 = await getDocs(qi);     
//   const querySnapshot = await getDocs(q);
//   querySnapshot.forEach((doc) => {
//     if(doc.data().userEmail == ) {

//     }
//       var UserName = doc.data().userName;
//       let UserDP = doc.data().dpURL;
      
//   });
// }

// getDpandUserName();

// let btn = document.querySelector('.createPostBtn');
// btn.addEventListener('click', () => {
//     let textarea = document.querySelector('textarea').value;
//     let imageurl = document.querySelector('input').value;
//     localStorage.setItem('imageUrl', imageurl);
//     localStorage.setItem("postTextValue",`${textarea}`);
//     window.location.href = "./main.html";
// });


