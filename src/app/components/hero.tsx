"use client";
import { motion } from "framer-motion";

export default function Hero() {
  const lines = [
    "DESIGNER BUILDING",
    "BEAUTIFUL & FUNCTIONAL",
    "WEBSITES"
  ]

    return (
      
      <> 
      <div className="relative text-center min-h-screen flex flex-col justify-center items-center pt-40 sm:pt-52">
        {/* Yellow shade */}
        <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 w-[80%] h-[150px] bg-[#f6ee8f] opacity-30 blur-3xl rounded-full"></div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#2b3a13] to-transparent opacity-20 blur-2xl"></div>

        <div className="text-center space-y-7 px-4">
        {lines.map((line, lineIndex) => (
          <div
            key={lineIndex}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-6xl text-white font-bold leading-tight scale-y-150 overflow-hidden space-x-3"
          >
            {line.split(' ').map((word, wordIndex) => (
              <motion.span
                key={wordIndex}
                className="inline-block"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: lineIndex * 1.2 + wordIndex * 0.4 }}
              >
                {word + ' '}
              </motion.span>
            ))}
          </div>
        ))}
      </div>

        <p className="text-lg sm:text-xl mt-16 mx-auto relative  text-[#cecbcb] max-w-xl sm:max-w-2xl">
        I'm Dani, a self-taught developer from Karachi, Pakistan. <br className="hidden sm:block" /> I build my own websites using Next.js.
        </p>

        <button className="mt-6 sm:mt-8 border border-[#f8f1a6] 
shadow-[0_0_10px_1px_rgba(254,249,195,0.1),inset_0_0_10px_rgba(254,249,195,0.4)] 
hover:shadow-[0_0_30px_6px_rgba(254,249,195,0.9),inset_0_0_12px_rgba(254,249,195,0.5)] 
shadow-yellow-100/50 px-4 sm:px-6 py-2 sm:py-3 rounded-xl cursor-pointer">
          UX/UI Web Developer
        </button>
      </div>         
      </>
    );
}
