
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";

export default function Contact(){
    return(
        <>
        <div className="flex justify-center items-center mt-52">
                <h1 className="text-6xl font-bold scale-y-150 text-yellow-200">CONTACT</h1>
            </div>

        <section className="max-w-screen-xl mx-auto flex flex-col md:flex-row p-4 md:gap32 mt-16-">
            {/* left section */}
            
            <div className="flex-1">
                
                
                <h1 className="text-6xl font-bold scale-y-150 mt-28">GET IN TOUCH</h1>

                <div className="mt-12">
                <p className="text-base font-medium text-[#8D8D8D]">I'd love to hear about your project</p>
                </div>

                <div className="flex items-center gap-4 mt-9 text-base font-medium">
                <MdEmail className="text-2xl"/>
                <p className="text-[#a9a6a6]">daniyalad34@gmail.com</p>
                </div>

                <div className="flex items-center gap-5 mt-6 text-lg font-medium">
                <FaPhoneAlt className="text-xl"/>
                <p className="text-[#a9a6a6]">+92-3101003505</p>
                </div>
                
                <div className="flex items-center gap-5 mt-6 text-lg font-medium">
                <FaLocationDot className="text-xl"/>
                <p className="text-[#a9a6a6]">123 Sample St, 42035, Karachi</p>
                </div>
            </div>

            {/* right sction */}
            <div className="flex-1 md:w-80 mt-28 space-y-4 font-medium">
                <h1>Full Name</h1>
                <div>
                <input type="text" placeholder="Full Name" className="w-full p-4 border rounded-xl bg-black placeholder:text-[#585656] h-14 focus:shadow-[0_0_16px_1px_rgba(254,249,195,0.5)] shadow-yellow-100/50 focus:outline-none transition-shadow duration-300"/>
                </div>

                <h1>Email</h1>
                <div>
                <input type="email" placeholder="Email" className="w-full p-4 border rounded-xl bg-black placeholder:text-[#585656] h-14 focus:shadow-[0_0_16px_1px_rgba(254,249,195,0.5)] shadow-yellow-100/50 focus:outline-none transition-shadow duration-300"/>
                </div>

                <h1>Message</h1>
                <div>
                    <textarea name="message" id="message" placeholder="Type your message..."
                    className="w-full h-48 p-4 border bg-black rounded-xl placeholder:text-[#585656]
                    focus:shadow-[0_0_16px_1px_rgba(254,249,195,0.5)] shadow-yellow-100/50 focus:outline-none transition-shadow duration-300"></textarea>
                </div>

                 {/* Keep Me Signed In */}
            <div className="flex items-center justify-between text-sm text-[#a9a6a6]">
              <label className="flex items-center space-x-2">

              <input type="checkbox" className="h-5 w-5 appearance-none border-2 border-[#888585] rounded-md 
             bg-black checked:bg-white checked:border-white 
             focus:outline-none focus:ring-0
             "/>

                <span> I read and accept the</span> <Link href="/privacy" className="underline text-yellow-100 ">Privacy Policy</Link>
              </label>
            </div>

            <br />

            <div className="items-center text-center w-fit px-6 py-2 rounded-xl
            text-lg md:text-lg border border-[#f8f1a6] shadow-[0_0_10px_1px_rgba(254,249,195,0.1),inset_0_0_10px_rgba(254,249,195,0.4)] 
          hover:shadow-[0_0_30px_3px_rgba(254,249,195,0.4),inset_0_0_12px_rgba(254,249,195,0.5)] 
          shadow-yellow-100/50  text-yellow-50">
            <button>Send message</button>
            </div>
            </div>
        </section>
        </>
    )
}