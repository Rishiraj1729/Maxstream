
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDNKIdKpsQ9Pwm3r3c41mWG6F8F_lH8aog",
  authDomain: "maxxstream-57c06.firebaseapp.com",
  projectId: "maxxstream-57c06",
  storageBucket: "maxxstream-57c06.appspot.com",
  messagingSenderId: "237800525383",
  appId: "1:237800525383:web:23651acf0a06d9a9e52b62"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languagecode="en"
const provider = new GoogleAuthProvider()



const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault()
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("signing in")
      window.location.href="index.html"
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("suceessfull")
      // ..
    });
})
