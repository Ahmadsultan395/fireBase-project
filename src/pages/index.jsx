import React, { useEffect, useState } from 'react'
import SignUp from './authPages/SignUp'
import SignIn from './authPages/SignIn'
import { CheckAuthentication } from '../services/firebase/authFireBase/AuthFireBase';
import { getAuth, signOut } from 'firebase/auth';
import GetSendData from './sendGetData/GetSendData';



const Pages = () => {
const [user , setUser] = useState(null)
const auth = getAuth();
    // console.log(user,'sjahdkjhaskj')
useEffect(()=>{
CheckAuthentication(setUser)
},[])


const SignOut =()=>{
  signOut(auth)
  .then((value)=>{
    alert('user logout successfully')
    setUser(null)
  })
  .catch((error)=>{
    alert(error , ' logout failed')
  })
}

  if (user === null) {
   return(
    <>
     <SignUp/>
     <SignIn/>
    </>
   )
  }

  return (
    <>
    <GetSendData/>

    <h1> user login successfully {user?.email}</h1>
    <button onClick={SignOut}> LogOut</button>
    </>
  )
}

export default Pages