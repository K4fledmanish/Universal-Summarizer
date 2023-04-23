import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='Universal_Summarizer' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/K4fledmanish/Universal-Summarizer", "_blank")
          }
          className='black_btn'
        >
          Source Code
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize using<br className='max-md:hidden' />
        <span className='blue-gradient '>Artificial Intelligence</span>
      </h1>
      <h2 className='desc'>
        An open-source universal summarizer for easy reading.
      </h2>
    </header>
  );
};
export default Hero;