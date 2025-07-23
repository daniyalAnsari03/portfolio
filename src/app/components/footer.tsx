import Link from "next/link";

export default function Footer() {
    return (
      <section className="relative px-6 md:px-16 lg:px-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 mb-10 md:mb-20 pt-20 md:pt-10 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl uppercase tracking-tighter scale-y-150 font-bold font-sans">
            Have a project in mind?
          </h1>
  
          <div className="grid gap-3 md:gap-5 pt-10 md:pt-32 text-lg md:text-xl text-yellow-200 tracking-tighter">
            <ul className="space-y-4 text-xl scale-105 font-light">
          <li className="hover:scale-y-150"><Link href="/" className="inline-block">HOME</Link></li>
          <li className="hover:scale-y-150"><Link href="/" className="inline-block">ABOUT</Link></li>
          <li className="hover:scale-y-150"><Link href="/">PROJECT</Link></li>
          <li className="hover:scale-y-150"><Link href="/" className="inline-block">SKILLS</Link></li>
          <li className="hover:scale-y-150"><Link href="/" className="inline-block">CONTACT</Link></li>
          </ul>
          </div>
        </div>


  
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 mb-10 md:mb-20 text-[#cecbcb] text-base text-center md:text-left">
          <p className="text-lg md:text-2xl">daniyalad34@gmail.com</p>
          
          <button className="text-lg md:text-xl border border-[#f8f1a6] shadow-[0_0_10px_1px_rgba(254,249,195,0.1),inset_0_0_10px_rgba(254,249,195,0.4)] 
          hover:shadow-[0_0_30px_3px_rgba(254,249,195,0.6),inset_0_0_12px_rgba(254,249,195,0.5)] 
          shadow-yellow-100/50 px-6 md:px-8 py-2 rounded-xl text-white">
            Copy
          </button>
  
          <p className="text-sm md:text-base text-[#9b9898]">
            Are you just looking for more information about me? <br /> 
            You can discover more at the about page <br /> <br />
            <span className="text-xs">Copyright ©2023 Matteo Fabbiani - All Rights reserved • <br />
            VAT 02916640358 • Privacy policy</span>
          </p>
        </div>
      </section>
    );
  }
  