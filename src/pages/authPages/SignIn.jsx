import React, { useState } from 'react'
import { GoogleSignUp, SignInApi } from '../../services/firebase/authFireBase/AuthFireBase'


const SignIn = () => {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')

  const handleSignIn = async (e) => {
    e.preventDefault();  
    try {
      await SignInApi({ email, password });
    } catch (error) {
      
      console.error(error);  
    }
  };

const  handleGoogleSignIn = async (e)=>{
  e.preventDefault();  
  try {
    await GoogleSignUp();
  } catch (error) {
    
    console.error(error);  
  }
}
  return (
   <>
   <form action="">
    <h1>LOGIN FORM</h1>
    <label htmlFor="username"></label><br />
    <input type="email"  name='email' value={email} placeholder='enter email' 
    onChange={(e)=> setEmail(e.target.value)}/><br />
    <label htmlFor="password"></label><br />
    <input type="password"  name='password' value={password} placeholder='enter passowrd'
    onChange={(e)=> setPassword(e.target.value)}/><br /> <br />

    <button onClick={handleGoogleSignIn}>google signIn</button>
    <button onClick={handleSignIn}>submit</button>
   </form>
   </>
  )
}

export default SignIn