import { useState } from "react"
import firebase from 'firebase';



export default function Login(){
    const[email,setEmail]=useState("")
    const[password,setPass]=useState("")

    function FirebaseSignup(){
        firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
  //  var user = userCredential.user;
    alert("loggedin")
    // ...
  })
  .catch((error) => {
    // var errorCode = error.code;
    // var errorMessage = error.message;
    // ..
  });
    }

    return(
<div>
    <input type="text" placeholder="enter email" onChange={e => setEmail(e.target.value)} />
    <input type="password" placeholder="enter password" onChange={e => setPass(e.target.value)} />
    <input type="submit" placeholder="signup" onClick={FirebaseSignup()} />
    
</div>
    )
}