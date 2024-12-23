import React from 'react'
import { collection, getFirestore } from 'firebase/firestore'
import { app } from '../../services/firebase/fireBase'
import { addDoc } from 'firebase/firestore'


const GetSendData = () => {
  const firestore =getFirestore(app);

  const addCities  = async ()=>{
    const docRef =await addDoc(collection  (firestore , "cities") ,{
      name :'lahore' , 
      passcode :'909090', 
      lat:'100', 
      long:'238'
    })
  }
  return (
  <>
  <button onClick={addCities}>add cities</button>
  </>
  )
}

export default GetSendData