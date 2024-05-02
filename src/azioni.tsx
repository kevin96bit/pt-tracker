"use server"

import {sessionOptions, SessionData, defaultSession} from "@/libe"
import { getIronSession } from "iron-session"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

// creo un finto dato per eseguire il test 
let email = "kevin96imerti@outlook.it"
// let username = "kevin"

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


export const accedi = async (formData:FormData)=>{
const session = await getSession()

const formEmail = formData.get("email") as string
const formPassword = formData.get("password") as string

// IN SEGUITO INSERIRO' LA LOGICA DELLA RICERCA DEL DATABASE

// NEL FRATTEMPO ESEGUO UN TEST 

if(formEmail !== email){
    return{error:"Credenziali errate"}
}

session.email = "1";

await session.save()
redirect("/")

}


export const logout = async () => {
    const session = await getSession();
    session.destroy();
    redirect("/contatti");
  };