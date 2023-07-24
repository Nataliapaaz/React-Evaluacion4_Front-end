import { Persona } from "../interfaces/iformulario";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "./firebaseApp";

export const registrarPersona = async(p:Persona) =>{

      const docRef = await addDoc(collection(db, "personas"),p)

}