import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore, collection, limit ,addDoc, getDocs, query, where, doc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

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

const userReq = collection(db, "users");

async function getdata() {
  let id = window.localStorage.getItem('userID');
  const q = query(collection(db, "users"), where("userId", "==", id), limit(10));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data().textForPost, doc.data().imgUrl); 

//     let valuePostText = doc.data().textForPost;
// let postText = document.querySelector(".postText");
// postText.innerText = valuePostText;
// let imageUrl = doc.data().imgUrl;
// let image = document.querySelectorAll(".postimg");
// for( let img of image){
//     img.src=imageUrl;
// }
      
      let posts = document.querySelector(".posts");
      let div = document.createElement("div");
      posts.appendChild(div);
      div.classList.add("post");
      div.innerHTML = `
            <div class="postheader"><div class="logo"><img class="logoo"  src=${doc.data().user_DP}><p> ${doc.data().user_Name} </p></div><div class="more"><span class="material-symbols-outlined">
                more_vert
                </span></div></div>
            <div class="postcontent">
                <p class="postText">${doc.data().textForPost}</p>
                <img class="postimg" src=${doc.data().imgUrl}>
                <img class="postimg" src=${doc.data().imgUrl}>
            </div>
    
            <div class="postfooter">
                <span class="material-symbols-outlined one">
                    thumb_up
                    </span>
                <span class="material-symbols-outlined first">
                favorite
                </span><span class="emojiestext em1">25K Likes</span>
                    <span class="material-symbols-outlined two">
                        maps_ugc
                        </span>
                    </span><span class="emojiestext em2">90 Comments</span>
                        <span class="material-symbols-outlined three">
                            share_windows
                            </span>
                        </span><span class="emojiestext em3">250 Shares</span></div>
        `;

  });
  
}
getdata();
    
  //  
// Create a query against the collection.
// const q = query(userReq, where("From", "==", "abc@gmail.com")); // yhn email mi jis ko request receive krni hi us ki email likho
// console.log(q);

// let myposts = document.querySelector(".myposts");
// myposts.addEventListener("click", async () => {

//   let id = window.localStorage.getItem('userID');
//   const q = query(collection(db, "users"), where("userId", "==", id));
  
//   const querySnapshot = await getDocs(q);
//   querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     console.log(doc.id, " => ", doc.data().textForPost, doc.data().imgUrl);

// //     let valuePostText = doc.data().textForPost;
// // let postText = document.querySelector(".postText");
// // postText.innerText = valuePostText;
// // let imageUrl = doc.data().imgUrl;
// // let image = document.querySelectorAll(".postimg");
// // for( let img of image){
// //     img.src=imageUrl;
// // }
      
//       let posts = document.querySelector(".posts");
//       let div = document.createElement("div");
//       posts.appendChild(div);
//       div.classList.add("post");
//       div.innerHTML = `
//             <div class="postheader"><div class="logo"><img class="logoo"  src="data:image/jpeg;base64,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"></div><div class="title inpName">Person</div><div class="more"><span class="material-symbols-outlined">
//                 more_vert
//                 </span></div></div>
//             <div class="postcontent">
//                 <p class="postText">${doc.data().textForPost}</p>
//                 <img class="postimg" src=${doc.data().imgUrl}>
//                 <img class="postimg" src=${doc.data().imgUrl}>
//             </div>
    
//             <div class="postfooter">
//                 <span class="material-symbols-outlined one">
//                     thumb_up
//                     </span>
//                 <span class="material-symbols-outlined first">
//                 favorite
//                 </span><span class="emojiestext em1">25K Likes</span>
//                     <span class="material-symbols-outlined two">
//                         maps_ugc
//                         </span>
//                     </span><span class="emojiestext em2">90 Comments</span>
//                         <span class="material-symbols-outlined three">
//                             share_windows
//                             </span>
//                         </span><span class="emojiestext em3">250 Shares</span></div>
//         `;

//   });
  
// });



async function getOnlyUserName() {
  const qi = query(collection(db, "usermails"), where("userEmail", "==", window.localStorage.getItem('userEmail')));
  const querySnapshot = await getDocs(qi);
  querySnapshot.forEach((doc) => {
      let UserDP = doc.data().dpURL;
      let LogoUser = document.querySelector(".logoo");
      LogoUser.src = UserDP;
      // console.log(UserDP);
  });
  
}

getOnlyUserName();