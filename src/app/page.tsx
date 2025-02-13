"use client"; // Necesario para animaciones en Next.js App Router
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const greetings = ["Hola", "Welcome", "Bonjour", "Hallo", "Ciao", "こんにちは", "안녕하세요", "مرحبا"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 500); // Cambia cada 2 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      {/* Sección principal con animación */}
      <section className="text-center p-10">
        <motion.h1
          key={index}
          className="text-6xl font-extrabold tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {greetings[index]}
        </motion.h1>
        <p className="mt-4 text-xl opacity-80">Descubre mi trabajo y proyectos</p>
      </section>

      {/* Tarjeta con efecto glass */}
      <div className="mt-10 rounded-2xl bg-white/10 backdrop-blur-lg p-8 text-center max-w-sm">
        <h2 className="text-2xl font-semibold">Diseño Elegante</h2>
        <p className="mt-2 opacity-80">Minimalismo y estilo premium en cada detalle.</p>
      </div>
    </main>
  );
}
