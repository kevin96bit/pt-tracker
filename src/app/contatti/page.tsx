"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Page = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [errore, setErrore] = useState<boolean>(false);
  const [successo, setSuccesso] = useState<boolean>(false);

  // Funzione per inviare l'email
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm("service_rv3fn7d", "template_ita", formRef.current!, {
        publicKey: "s8SHwkWx0MQP5JnpB",
      })
      .then(
        () => {
          setSuccesso(true);
          console.log("SUCCESS!");
        },
        (error) => {
          setErrore(true);
          console.log("FAILED...", error.text);
        }
      );
  };


  return (
    <section className="flex items-center justify-center">
      <div className="w-3/4 flex flex-col h-screen items-center justify-center">
        <div className="w-3/4 border rounded-md h-2/3 shadow-lg shadow-slate-400">
          <div className="w-full h-10 bg-blue-400 rounded">
            <div className=" w-full h-full flex justify-end items-center">
              <div className="w-20 h-4 bg-slate-300 rounded-md mr-12"></div>
              <div className="w-20 h-4 bg-slate-300 rounded-md mr-12"></div>
              <div className="w-20 h-4 bg-slate-300 rounded-md mr-12"></div>
              <div className="w-20 h-4 bg-slate-300 rounded-md mr-12"></div>
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-[50%] pl-2">
              <p className="text-4xl font-extrabold mt-3">
                Per maggiori informazioni
              </p>
              <p className="text-4xl font-extrabold mt-3">contattami !</p>
              <div className="mx-auto w-2/4 p-[1px] bg-blue-400 my-6"></div>
              {/* Form */}
              <div className="w-full p-4">
                <form
                  onSubmit={sendEmail}
                  ref={formRef}
                  className="flex flex-col space-y-4 mx-auto"
                >
                  <input
                    type="text"
                    placeholder="Nome"
                    name="name"
                    className="border border-blue-300 rounded px-4 py-2"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="border border-blue-300 rounded px-4 py-2"
                  />
                  <textarea
                    rows={8}
                    placeholder="Messaggio"
                    name="message"
                    className="border border-blue-300 rounded px-4 py-2"
                  ></textarea>
                  <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600">
                    Invia
                  </button>
                  {/* Utilizza flex e items-center per centrare le span orizzontalmente */}
                  <div className="pt-1 mx-auto flex items-center">
                    {errore && (
                      <span className="text-red-500">&quot;Errore&quot;</span>
                    )}
                    {successo && (
                      <span className="text-blue-500">
                        &quot;Email inviata con successo&quot;
                      </span>
                    )}
                  </div>
                </form>
              </div>
              {/* Fine form */}
            </div>
            <div className="w-[50%] flex flex-col items-center justify-center bg-gradient-to-t ">
              <div className=" px-4">
                <p className="text-2xl">
                  Se hai delle opinioni, sono qui per ascoltarti! Non vedo
                  l&#39;ora di sentire cosa ne pensi🙏
                </p>
              </div>
              {/* Immagine */}
              <Image
                src="/personeCheparlano-removebg-preview.png"
                width={500}
                height={500}
                alt="Chi siamo immagine"
                className=" w-full h-[70%] rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
