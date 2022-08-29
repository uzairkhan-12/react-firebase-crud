
import db from './firebase'
import { addDoc, collection , setDoc , doc, deleteDoc } from 'firebase/firestore';
import { async } from '@firebase/util';
   export  const handleNew = async () => {
        // const docRef = doc(db, "cololrs","color001");
        // const payload = {name:"black" , value:"#000"}
        // await setDoc(docRef,payload)
        
        //setDoc ko use krty huwe hmen id pas krni prhti ha js ko 
        //agr hm dobara use kren to same id py data override krta ha is lie aik or 
        //approach use krty han jo random id generate kr sky usko addDoc kehty han
        const name = prompt("Please enter color name")
      const value = prompt("please enter value")
      if(!name) return
      if(!value) return
        const collectionRef = collection(db,"cololrs") //no need of id
        const payload = {name , value}
       const colorRef =  await addDoc(collectionRef , payload)
       console.log("The id of newly created color is ", colorRef.id)
      }
      export const handleEdit = async (id) => {
        const name = prompt("please enter color name")
        const value= prompt("please enter value")
        if(!name) return
        if(!value) return
        const docRef = doc(db, "cololrs",id);
         const payload = {name , value}
         await setDoc(docRef,payload)
      }
      export const handleDelete = async (id) => {
        const docRef = doc(db, "cololrs",id);
        await deleteDoc(docRef)
      }