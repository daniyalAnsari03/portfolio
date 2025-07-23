'use client'
import { FaNodeJs, FaPython } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiSanity } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
    { name: "JavaScript", icon: <FaNodeJs className="text-green-400" />, level: 50, color: "bg-green-400" },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" />, level: 65, color: "bg-blue-500" },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" />, level: 90, color: "bg-gray-300" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" />, level: 80, color: "bg-cyan-500" },
    { name: "Sanity CMS", icon: <SiSanity className="text-red-400" />, level: 60, color: "bg-red-400" },
    { name: "Python", icon: <FaPython className="text-yellow-400" />, level: 30, color: "bg-yellow-400" },
];

export default function Skills() {
  return (
    <section className="bg-black text-white py-36">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-6xl font-bold text-center mb-10 text-yellow-200 scale-y-150">SKILLS</h2><br /><br />
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 border border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <p className="text-lg font-semibold">{skill.name}</p>
              <br />

              <div className="w-full bg-gray-700 h-2 mt-2 rounded-full overflow-hidden">
                <motion.div 
                  className={`h-full ${skill.color}`} 
                  initial={{ width: 0 }} 
                  animate={{ width: `${skill.level}%` }} 
                  transition={{ duration: 1.5 }}
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}