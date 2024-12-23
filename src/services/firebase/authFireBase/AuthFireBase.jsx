  import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
  import { app } from "../fireBase";


  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  export const signUpApi = ({email, password})=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
    alert('user register successfully')
    })
    .catch((error) => {
      alert(error ,'user register successfully')
    });
  }



  export const SignInApi = ({email, password})=>{

    signInWithEmailAndPassword(auth, email, password)
    .then((value) => {
      alert('sign- in user successfully')
    })
    .catch((error) => {
      alert(error,'sign- in user unsuccessfull')
      
    });
  }

  export const CheckAuthentication = (setUser)=>{
    
    onAuthStateChanged(auth, (user) => {
      if (user) {
  setUser(user)
      }else {
        setUser(null)
      }})
  }


   export const GoogleSignUp = ()=>{

    signInWithPopup(auth , provider)
    .then((value) => {
      alert('sign- in user successfully')
    })
    .catch((error) => {
      alert(error,'sign- in user   unsuccessfull')
      
    });

  }