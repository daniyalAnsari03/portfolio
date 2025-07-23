"use client"; // Next.js 13+ ke liye client component

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiSanity } from "react-icons/si";

const skills = [
  { name: "Next.js", icon: <SiNextdotjs className="text-green-400"/>, percent: 90 },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" />, percent: 80 },
  { name: "Node.js", icon: <FaNodeJs className="text-white" />, percent: 75 },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" />, percent: 85 },
  { name: "Sanity CMS", icon: <SiSanity className="text-red-400" />, percent: 70 },
  { name: "Python", icon: <FaPython className="text-yellow-400" />, percent: 60 },
];

export default function Skills2() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-5">
      
      <div className="w-4/5 md:w-2/3 space-y-6">
        {skills.map((skill, index) => (
          <div key={index} className="w-full">
            <div className="flex justify-between items-center mb-1">
              <span className="flex items-center gap-2 text-lg">
                {skill.icon} {skill.name}
              </span><br /><br />
              <span>{skill.percent}%</span>
            </div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${skill.percent}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-2 bg-blue-500 rounded-full"
            ></motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
