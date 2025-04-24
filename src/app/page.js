"use client";

import React from "react";
import Image from "next/image";
import { sendEmail } from "../libs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [email, setEmail] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleEmail = (email) => {
    setIsLoading(true);
    sendEmail(email)
      .then(() => {
        setEmail("");
        toast.success("Cadastro efetuado com sucesso!");
      })
      .catch((error) => {
        console.error("Erro ao receber o email:", error);
        toast.error("Erro ao se cadastrar. Tente novamente!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <main className="relative h-screen w-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="h-screen w-screen">
        <Image
          src="/paraquedas-1.jpeg"
          alt="Imagem de fundo"
          width={1920}
          height={1080}
          className="object-cover h-screen w-screen max-sm:hidden"
          priority
        />
        <Image
          src="/paraquedas.webp"
          alt="Imagem de fundo"
          width={1920}
          height={1080}
          className="object-cover w-full h-full md:hidden"
          priority
        />
      </div>

      {/* Conteúdo */}
      <div className="z-10 text-center absolute md:top-[30%] max-sm:w-full max-sm:px-8 max-sm:top-[52%] max-sm:right-0 right-52 xl:right-52 2xl:right-80">
        <h1 className="text-5xl md:text-[4rem] font-extrabold mb-2 text-black">
          Em breve!
        </h1>

        <div className="mt-12 max-w-[16rem] md:max-w-[17rem] mx-auto z-50">
          <div className="flex flex-col">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Seu email"
              className="p-3 rounded-t-md w-full text-sm focus:outline-none bg-white text-gray-800"
            />
            <button
              onClick={() => handleEmail(email)}
              className="bg-black text-white text-lg font-bold p-3 rounded-b-md hover:bg-gray-700 transition-colors cursor-pointer"
            >
              Me avise!
            </button>
          </div>
        </div>
      </div>

      <div className="w-30 h-24 md:h-30 mx-auto md:my-2 z-10 absolute bottom-8 md:bottom-0">
        <Image
          src="/logo.png"
          alt="Logo"
          width={96}
          height={48}
          className="w-30 h-24 md:h-30 object-contain"
        />
      </div>
    </main>
  );
}
