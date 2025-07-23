'use client'
import { motion } from 'framer-motion';

function MyPage() {
  return (
    <div>
      ## About Me

      Hello! I'm Daniyal, a passionate Frontend Developer skilled in JavaScript, TypeScript, Tailwind CSS, Next.js, React.js, Sanity, and Figma. I'm focused on building fast, responsive, and user-friendly web applications that deliver exceptional user experiences. I'm currently studying at GIAIC, where I'm exploring cutting-edge fields like GenAI and Agentic AI. I enjoy staying updated with the latest technologies and trends, and I'm always on the lookout for new opportunities and challenges. With experience in multiple Hackathons, I've built ecommerce marketplaces, resume builders, and user-friendly websites. I'm eager to learn, collaborate, and bring creative solutions to the table.

      <div className="text-5xl font-bold text-center mt-10">
        <motion.span
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          DESIGNER
        </motion.span>
        <motion.span
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          BUILDING
        </motion.span>
        <motion.span
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          BEAUTIFUL
        </motion.span>
        <motion.span
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          &
        </motion.span>
        <motion.span
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          FUNCTIONAL
        </motion.span>
        <motion.span
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          WEBSITES
        </motion.span>
      </div>
    </div>
  );
}

export default MyPage;