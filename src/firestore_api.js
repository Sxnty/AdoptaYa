import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";
export const addPet = async (age, animal, img, name, shelter ) => {
    try {
        const docRef = await addDoc(collection(db, "animals"), {
            age,
            animal,
            img,
            name,
            shelter,
        });
      
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}