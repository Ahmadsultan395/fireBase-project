import React, { useState } from 'react'
import { signUpApi } from '../../services/firebase/authFireBase/AuthFireBase'


const SignUp = () => {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')

  const handleSignUp = async (e) => {
    e.preventDefault();  // Prevent form from reloading the page
    try {
      await signUpApi({ email, password });
    } catch (error) {
      // Error will be handled in the signUpApi catch block
      console.error(error);  // Optional, you can log the error
    }
  };
  return (
   <>
   <form action="">
    <h1>SIGN UP FORM </h1> <br />
    <label htmlFor="username"></label><br />
    <input type="email"  name='email' value={email} placeholder='enter email' 
    onChange={(e)=> setEmail(e.target.value)}/><br />
    <label htmlFor="password"></label><br />
    <input type="password"  name='password' value={password} placeholder='enter passowrd'
    onChange={(e)=> setPassword(e.target.value)}/><br /> <br />
    <button onClick={handleSignUp}>submit</button>
   </form>
   </>
  )
}

export default SignUp