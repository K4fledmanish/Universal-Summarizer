/**
 * A React component that displays the hero section of the website.
 * The hero section includes a navigation bar with a logo and a button to view the project on GitHub.
 * It also includes a title and a description of the project.
 * @returns A React component that displays the hero section of the website.
 */
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
          View on GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize using <br className='max-md:hidden' />
        <span className='blue-gradient '>Artificial Intelligence</span>
      </h1>
      <h2 className='desc'>
       An open-source AI-powered blog and article summarizer for easy reading.
      </h2>
    </header>
  );
};
export default Hero;