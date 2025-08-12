"use client"; 
import React, { useRef, useState } from "react";
import SectionHeading from "./SectionHeading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitError(null);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
        }
      )
      .then(
        () => {
          setSubmitSuccess(true);
          if (form.current) form.current.reset();
        },
        (error) => {
          console.error("Email sending failed:", error);
          setSubmitError(error.text || 'Failed to send message');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <motion.section
      id="contact"
      className="mb-28 w-full max-w-[42rem] px-4 sm:mb-40 scroll-m-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80 text-center">
        Please contact me directly at{" "}
        <a
          className="underline text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition"
          href="mailto:jalalb984@gmail.com"
        >
          jalalb984@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="mt-10 flex flex-col dark:text-black"
      >
        <div className="relative mb-8">
          <input
            type="text"
            name="user_name"
            required
            maxLength={100}
            placeholder=" "
            className="peer w-full px-4 py-2 rounded-lg border border-black/10 bg-white bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <label className="absolute left-4 top-2 px-1 -translate-y-7 text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-placeholder-shown:-translate-y-0 peer-focus:left-4 peer-focus:top-2 peer-focus:-translate-y-7 peer-focus:text-sm peer-focus:text-blue-600 transition-all pointer-events-none">
            Your Name
          </label>
        </div>

        <div className="relative mb-8">
          <input
            type="email"
            name="user_email"
            required
            maxLength={100}
            placeholder=" "
            className="peer w-full px-4 py-2 rounded-lg border border-black/10 bg-white bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <label className="absolute left-4 top-2 px-1 -translate-y-7 text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-placeholder-shown:-translate-y-0 peer-focus:left-4 peer-focus:top-2 peer-focus:-translate-y-7 peer-focus:text-sm peer-focus:text-blue-600 transition-all pointer-events-none">
            Your Email
          </label>
        </div>

        <div className="relative mb-8">
          <textarea
            name="message"
            required
            maxLength={500}
            placeholder=" "
            rows={5}
            className="peer w-full px-4 py-2 rounded-lg border border-black/10 bg-white bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
          />
          <label className="absolute left-4 top-3 px-1 -translate-y-7 text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:-translate-y-0 peer-focus:left-4 peer-focus:top-3 peer-focus:-translate-y-7 peer-focus:text-sm peer-focus:text-blue-600 transition-all pointer-events-none">
            Your Message
          </label>
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 dark:bg-white dark:bg-opacity-10"
          whileTap={{ scale: 0.95 }}
        >
          {isSubmitting ? (
            <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
          ) : (
            <>
              Submit{" "}
              <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            </>
          )}
        </motion.button>

        {submitSuccess && (
          <motion.p 
            className="mt-4 text-green-600 dark:text-green-400 text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Message sent successfully!
          </motion.p>
        )}

        {submitError && (
          <motion.p 
            className="mt-4 text-red-600 dark:text-red-400 text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {submitError}
          </motion.p>
        )}
      </form>
    </motion.section>
  );
}
