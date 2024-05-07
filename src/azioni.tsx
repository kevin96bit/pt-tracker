"use server"

import {sessionOptions, SessionData, defaultSession} from "@/libe"
import { getIronSession } from "iron-session"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"



export const getSession = async ()=>{
    // all'inizio la sessione è un oggetto vuoto
    const session = await getIronSession<SessionData>(cookies(), sessionOptions)

    // in questo caso è falso
    if(!session.isLoggedIn){
        // passo il valore default sottostante
        session.isLoggedIn = defaultSession.isLoggedIn;
    }
// mi ritorna session
    return session;
}


export const accedi = async (formData: { email: string; password: string }) => {
    const session = await getSession();
  
    const { email, password } = formData;
  
    // Logica di autenticazione o verifica
    // Esempio di logica di autenticazione:
  
    // Se l'email e la password sono corrette
    
    // TEST CON DATO FINTO
    if (email === "kevin96imerti@outlook.it" && password === "passwordCorretta") {
      session.email = email;
      session.isLoggedIn=true;
      await session.save();
      console.log("sessione creata")
      redirect("/");
    } else {
        console.log("errore")
      return { error: "Credenziali non valide" };
    }
  };


export const logout = async () => {
    const session = await getSession();
    session.destroy();
    redirect("/");
  };