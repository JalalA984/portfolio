"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaPaperPlane } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { HiArrowRight } from "react-icons/hi";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        formRef.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
        }
      )
      .then(
        () => {
          setStatus("success");
          formRef.current?.reset();
          
          // Reset button to idle after 4 seconds so they can send another if they want
          setTimeout(() => {
            setStatus("idle");
          }, 4000);
        },
        (error) => {
          console.error("Email sending failed:", error);
          setStatus("error");
        }
      );
  };

  return (
    <main className="min-h-screen w-full bg-[#E4E4E4] dark:bg-black text-gray-900 dark:text-gray-100 font-sans selection:bg-gray-900 selection:text-white pt-32 pb-20 px-6 sm:px-12">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* LEFT COLUMN: INFO & STATUS */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between h-full"
        >
            <div>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-2">
                    ( 05 — CONNECTION )
                </span>
                <h1 className="text-4xl sm:text-7xl font-bold tracking-tighter uppercase leading-[0.9] mb-12">
                    Initiate<br />
                    Comm.
                </h1>

                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md leading-relaxed mb-12">
                   
                </p>

                {/* DIRECT LINKS */}
                <div className="space-y-6">
                    <a href="mailto:jalalb984@gmail.com" className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 border border-gray-400 dark:border-gray-700 flex items-center justify-center group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-300">
                            <SiGmail />
                        </div>
                        <div>
                            <span className="text-[10px] font-mono uppercase text-gray-400 block">Mail_to</span>
                            <span className="font-bold text-xl">jalalb984@gmail.com</span>
                        </div>
                    </a>

                    <div className="flex gap-4">
                        <a href="https://linkedin.com/in/jalalahm" target="_blank" className="text-sm font-mono uppercase tracking-widest border-b border-gray-400 hover:border-black dark:hover:border-white pb-1 transition-colors flex items-center gap-2 group">
                            LinkedIn <HiArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform"/>
                        </a>
                        <a href="https://github.com/JalalA984" target="_blank" className="text-sm font-mono uppercase tracking-widest border-b border-gray-400 hover:border-black dark:hover:border-white pb-1 transition-colors flex items-center gap-2 group">
                            GitHub <HiArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform"/>
                        </a>
                    </div>
                </div>
            </div>

            {/* SYSTEM STATUS FOOTER (Left Col) */}
            <div className="hidden lg:block pt-12 border-t border-dashed border-gray-300 dark:border-gray-800">
                <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">
                        System Status: Operational
                    </span>
                </div>
            </div>
        </motion.div>

        {/* RIGHT COLUMN: TERMINAL FORM */}
        <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-gray-900 p-8 sm:p-12 relative"
        >
            {/* DECORATIVE CORNERS */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-black dark:border-white"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-black dark:border-white"></div>

            <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-8">
                
                {/* NAME INPUT */}
                <div className="group">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-2 block group-focus-within:text-black dark:group-focus-within:text-white transition-colors">
                        ( 01 ) Identity Name
                    </label>
                    <input 
                        type="text" 
                        name="user_name"
                        required
                        maxLength={100}
                        className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-2 text-xl font-bold focus:outline-none focus:border-black dark:focus:border-white transition-all placeholder:text-gray-300 dark:placeholder:text-gray-700"
                        placeholder="John Doe"
                    />
                </div>

                {/* EMAIL INPUT */}
                <div className="group">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-2 block group-focus-within:text-black dark:group-focus-within:text-white transition-colors">
                        ( 02 ) Return Address
                    </label>
                    <input 
                        type="email" 
                        name="user_email"
                        required
                        maxLength={100}
                        className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-2 text-xl font-bold focus:outline-none focus:border-black dark:focus:border-white transition-all placeholder:text-gray-300 dark:placeholder:text-gray-700"
                        placeholder="john@example.com"
                    />
                </div>

                {/* MESSAGE INPUT */}
                <div className="group">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-2 block group-focus-within:text-black dark:group-focus-within:text-white transition-colors">
                        ( 03 ) Transmission Data
                    </label>
                    <textarea 
                        name="message"
                        required
                        maxLength={500}
                        rows={4}
                        className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-2 text-lg font-medium focus:outline-none focus:border-black dark:focus:border-white transition-all resize-none placeholder:text-gray-300 dark:placeholder:text-gray-700"
                        placeholder="Type your message..."
                    />
                </div>

                {/* SUBMIT BUTTON */}
                <button 
                    type="submit" 
                    disabled={status === "sending" || status === "success"}
                    className="mt-4 group relative w-full py-4 bg-gray-900 dark:bg-white text-white dark:text-black font-mono text-xs uppercase tracking-widest flex items-center justify-center overflow-hidden hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        {status === "idle" && <>[ Transmit_Message ] <FaPaperPlane /></>}
                        {status === "sending" && <>[ Transmitting... ]</>}
                        {status === "success" && <span className="text-green-400 dark:text-green-600 font-bold">[ Message_Sent_Successfully ]</span>}
                        {status === "error" && <span className="text-red-400 dark:text-red-600 font-bold">[ Error_Try_Again ]</span>}
                    </span>
                </button>

            </form>
        </motion.div>

      </div>
    </main>
  );
}