"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import './globals.css'; // Importa el archivo CSS global

export default function Home() {
  const greetings = ["Hola", "Welcome", "Bonjour", "Hallo", "Ciao", "こんにちは", "안녕하세요", "مرحبا"];
  const [index, setIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 500); // Cambia cada 2 segundos

    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <main className={`flex min-h-screen flex-col items-center justify-center ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <button onClick={toggleTheme} className="absolute top-4 right-4 p-2 rounded-md bg-gray-800 text-white">
        {isDarkMode ? '☀️' : '🌙'}
      </button>
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
      <div className={`mt-10 rounded-2xl ${isDarkMode ? 'bg-white-10' : 'bg-black-10'} backdrop-blur-lg p-8 text-center max-w-sm`}>
        <h2 className="text-2xl font-semibold">Diseño Elegante</h2>
        <p className="mt-2 opacity-80">Minimalismo y estilo premium en cada detalle.</p>
      </div>

      {/* Formulario de contacto */}
      <div className="mt-10 max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
        <form className={`bg-white/10 backdrop-blur-lg p-8 rounded-2xl ${isDarkMode ? 'bg-white-10' : 'bg-black-10'}`}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="name">Nombre</label>
            <input className={`w-full p-2 rounded-md ${isDarkMode ? 'bg-white-20 text-black' : 'bg-black-20 text-white'}`} type="text" id="name" name="name" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
            <input className={`w-full p-2 rounded-md ${isDarkMode ? 'bg-white-20 text-black' : 'bg-black-20 text-white'}`} type="email" id="email" name="email" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="message">Mensaje</label>
            <textarea className={`w-full p-2 rounded-md ${isDarkMode ? 'bg-white-20 text-black' : 'bg-black-20 text-white'}`} id="message" name="message" rows="4" required></textarea>
          </div>
          <button className="w-full p-2 rounded-md bg-blue-500 text-white font-semibold" type="submit">Enviar</button>
        </form>
      </div>
    </main>
  );
}