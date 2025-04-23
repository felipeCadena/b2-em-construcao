"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Data alvo: 1 de junho do ano atual
    const currentYear = new Date().getFullYear();
    const targetDate = new Date(`June 1, ${currentYear} 00:00:00`);

    // Se a data já passou este ano, usar o próximo ano
    if (targetDate < new Date()) {
      targetDate.setFullYear(currentYear + 1);
    }

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Imagem de fundo (substitua pelo caminho real depois) */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {/* Quando tiver a imagem real: */}
          <Image
            src="/paraquedas.webp"
            alt="Fundo"
            width={1920}
            height={1080}
            className="absolute inset-0 w-screen h-screen object-cover"
            priority
          />
        </div>
      </div>

      <div className="z-50 md:hidden absolute top-4 mx-auto">
        <div className="w-32 h-10 mx-auto my-2">
          <Image
            src="/logo-web.png"
            alt="Logo"
            width={96}
            height={48}
            className="w-32 h-10 object-contain"
          />
        </div>
        <h1 className="text-5xl md:text-6xl text-center font-bold mb-2">
          EM BREVE
        </h1>

        <p className="text-xl text-center mb-4">
          Data de lançamento: 01 de junho
        </p>
      </div>

      {/* Conteúdo */}
      <div className="z-10 text-white text-center px-4 max-w-4xl absolute bottom-8">
        <div className="mx-auto w-32 h-10 z-50 max-sm:hidden">
          <Image
            src="/logo-web.png"
            alt="Logo"
            width={96}
            height={48}
            className="w-32 h-10 object-contain"
          />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-2 max-sm:hidden">
          EM BREVE
        </h1>

        <p className="text-xl md:text-xl mb-4 max-sm:hidden">
          Data de lançamento: 01 de junho
        </p>

        {/* Contagem regressiva */}
        <div className="grid grid-cols-4 gap-4 md:gap-6 mb-6 text-[#8DC63F]">
          <CountdownBox value={timeLeft.days} label="DIAS" />
          <CountdownBox value={timeLeft.hours} label="HORAS" />
          <CountdownBox value={timeLeft.minutes} label="MINUTOS" />
          <CountdownBox value={timeLeft.seconds} label="SEGUNDOS" />
        </div>

        <div className="flex flex-col gap-4 items-center justify-center max-w-lg mx-auto z-50">
          <p className="font-bold text-lg md:text-xl text-[#8DC63F]">
            Increva-se para ficar por dentro das novidades!
          </p>

          <div className="flex w-full">
            <input
              type="email"
              placeholder="Seu email"
              className="py-3 px-4 rounded-l-md w-full focus:outline-none bg-white text-gray-800"
            />
            <button className="bg-[#8DC63F] text-white font-bold py-3 px-6 rounded-r-md hover:bg-[#97E169] transition-colors cursor-pointer">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

function CountdownBox({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#8DC63F] text-white w-full py-4 md:py-5 rounded-md">
        <div className="text-3xl md:text-5xl font-bold">{value}</div>
      </div>
      <div className="text-xs md:text-sm mt-2 font-bold">{label}</div>
    </div>
  );
}
