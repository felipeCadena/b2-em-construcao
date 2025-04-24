"use client";

import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative h-screen w-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[url('/paraquedas.webp')] bg-cover bg-center bg-no-repeat" />

      {/* Conteúdo */}
      <div className="z-10 text-center absolute md:top-1/6 max-sm:w-full max-sm:px-8 max-sm:bottom-[21%] max-sm:right-0 right-20 xl:right-20 2xl:right-56">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-2 text-black">
          em breve!
        </h1>

        <div className="md:mt-6 max-w-md px-6 md:px-8 mx-auto z-50">
          <div className="flex flex-col w-full">
            <input
              type="email"
              placeholder="Seu email"
              className="p-4 rounded-t-md w-full focus:outline-none bg-white text-gray-800"
            />
            <button className="bg-black text-white text-2xl font-bold p-4 rounded-b-md hover:bg-gray-700 transition-colors cursor-pointer">
              me avise!
            </button>
          </div>
        </div>
      </div>

      <div className="w-30 h-24 md:h-30 mx-auto md:my-2 z-10 absolute bottom-8">
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
