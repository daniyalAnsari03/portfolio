import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "UI/UX design",
    link: "https://tamplate-nike-ecommerce.vercel.app/",
    image: "/dani1.png", // Replace with actual image path
  },
  {
    id: 2,
    title: "Todo-App",
    description: "UI/UX design",
    link: "https://todo-application-alpha-three.vercel.app/",
    image: "/dani2.png", // Replace with actual image path
  },
  {
    id: 3,
    title: "Static Interactive Resume",
    description: "UI/UX design",
    link: "https://milestones1-2-peach.vercel.app/",
    image: "/dani3.png", // Replace with actual image path
  },
  {
    id: 4,
    title: "Dynamic Resume Builder",
    description: "UI/UX design",
    link: "https://milestones3-phi.vercel.app/",
    image: "/dani4.png", // Replace with actual image path
  },
];

export default function Project() {
  return (
    <>
    <section className="bg-black text-white py-16 mt-32">
      <h2 className="text-8xl font-mono font-semibold text-center justify-center text-yellow-200 mb-16 scale-y-150">WORK</h2>

      {/* Grid layout for work section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-10 md:px-20 lg:px-60">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#5a5858] p-5 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            {/* Image Container */}
            <div className="relative w-full h-56 rounded-md overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>

            {/* Text Content */}
            <div className="mt-4 gap-4 space-y-5">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-white border border-gray-400 bg-[#908b8b] px-2 py-1 rounded-md text-xs font-medium inline-block">{project.description}</p>
              <Link
                href={project.link}
                target="_blank"
                className="mt-2 ml-2 inline-block text-white border border-gray-400 bg-[#908b8b] px-2 py-1 rounded-md text-xs font-medium"
              >
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}

