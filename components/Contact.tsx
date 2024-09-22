import React from "react";
import SectionHeading from "./SectionHeading";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-m-28 sm:mb-28 w-full max-w-md mb-28"
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a
          className="underline text-blue-600"
          href="mailto:jalalb984@gmail.com"
        >
          jalalb984@gmail.com
        </a>{" "}

        <br/>(Form coming soon...)
      </p>
      {/* 
      <form className='mt-10 flex flex-col'>
        <input
          type='email'
          placeholder='Your Email'
          className='h-14 px-4 rounded-lg borderBlack transition-all'
          required
          maxLength={500}
        />
        <textarea
          placeholder='Your Message'
          className='h-52 my-3 rounded-lg borderBlack p-4 transition-all '
          required
          maxLength={500}
        />
        <button
          type='submit'
          className='group flex items-center justify-center gap-2 h-12 w-32 bg-gray-900 text-white rounded-full outline-none transition-all hover:bg-gray-700'
        >
          Submit <FaPaperPlane className='text-xs opacity-70 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1' />
        </button>
      </form>
      */}
    </section>
  );
}
