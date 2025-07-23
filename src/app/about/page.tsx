import Image from "next/image";


export default function About() {
    return(
        <>
        <div className="relative flex flex-col justify-center items-center px-6">

          <h1 className="scale-y-150 text-6xl text-yellow-200 mb-24 font-bold">ABOUT</h1>

            <div className="flex justify-center items-center">
            <Image src="/w3.jpeg" alt="picture" width={400} height={400} 
            className="rounded-2xl"/>
            </div>

            <div className="flex justify-center text-center mt-8">
                <h1 className="text-4xl sm:text-6xl font-bold scale-y-150">HEY, <span className="text-yellow-200">DANI</span> HERE</h1>
            </div>

            <p className="text-lg sm:text-xl mt-16 mx-auto relative text-[#cecbcb] max-w-xl sm:max-w-2xl block text-center">I'm a web developer from Karachi, creating modern and user-friendly <br className="hidden sm:block"/> websites with a passion for great design and functionality.</p>




            <div className="flex items-center justify-center h-screen mt-32 bg-black text-white relative">
      {/* Main Text */}
      <h1 className="text-left text-6xl sm:text-7xl scale-y-150 font-bold uppercase text- relative z-10">
        "There is no good <br />
        Design without <br />
        <span className="text-[#5b5757]">Strategy Thinking"</span>
      </h1>

      {/* Top-left Image */}
      <div className="absolute top-5 left-16 w- h- rounded-lg ">
        <Image src="/w1.jpeg" alt="Teamwork" width={250} height={250} className="rounded-2xl"/>
      </div>

      {/* Bottom-right Image */}
      <div className="absolute bottom-5 right-16  rounded-lg">
        <Image src="/w2.jpeg" alt="Designer" width={250} height={250} className="rounded-2xl"/>
      </div>
    </div>


    <div className="flex flex-col lg:flex-row justify-between items-center px-6 md:px-16 lg:px-52 mt-40 lg:gap-52 sm:gap-20">
    <div className="space-y-12">
        <h1 className="text-yellow-200 text-4xl scale-y-150 font-bold pt-10">MY PROFILE</h1>
      

      {/*  */}
      <p className="text-lg font-medium">Hello! I'm Daniyal, a passionate Frontend Developer skilled in JavaScript, TypeScript, Tailwind CSS, Next.js, React.js, Sanity, and Figma. I'm focused on building fast, responsive, and user-friendly web applications that deliver exceptional user experiences. I'm currently studying at GIAIC, where I'm exploring cutting-edge fields like GenAI and Agentic AI. I enjoy staying updated with the latest technologies and trends, and I'm always on the lookout for new opportunities and challenges. With experience in multiple Hackathons, I've built ecommerce marketplaces, resume builders, and user-friendly websites. I'm eager to learn, collaborate, and bring creative solutions to the table.</p>
      </div>

      <Image src="/w4.jpeg" alt="picture" width={500} height={500} className="rounded-2xl" />
    </div>

    {/*  */}
    <div className="flex flex-col lg:flex-row justify-between items-center px-6 md:px-16 lg:px-52 mt-40 lg:gap-52 sm:gap-20">
    <div className="space-y-12">
        <h1 className="text-yellow-200 text-4xl scale-y-150 font-bold pt-10">EXPERIENCE</h1>
      

      {/*  */}
      <p className="text-lg font-medium">In 2024, I embarked on my journey in web development through GIAIC, where I gained expertise in modern technologies like Next.js, Tailwind CSS, and Sanity CMS. I have successfully built e-commerce websites, ensuring seamless user experiences by implementing responsive designs that work flawlessly across devices.</p>
      <p className="text-lg font-medium mb-10">My skills extend to API integration, allowing dynamic product data to be fetched and displayed efficiently. Additionally, I have utilized GitHub for version control and Vercel for deploying fully functional, fast, and secure live websites. My dedication to delivering optimized and user-friendly web solutions continues to drive my growth in the tech industry.</p>
      </div>

      <Image src="/w5.jpeg" alt="picture" width={500} height={500} className="rounded-2xl" />
    </div>
        </div>
        </>
    )
}