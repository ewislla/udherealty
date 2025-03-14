import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Luxury Apartment",
    price: "$250,000",
    location: "Lekki, Lagos",
    image: "/assets/project1.png",
    description: "A modern apartment with sea views and 24/7 security.",
  },
  {
    id: 2,
    title: "Smart Villa",
    price: "$400,000",
    location: "Victoria Island, Lagos",
    image: "/assets/project2.png",
    description: "A fully automated villa with smart home features.",
  },
  {
    id: 3,
    title: "Family Duplex",
    price: "$180,000",
    location: "Ikoyi, Lagos",
    image: "/assets/project3.png",
    description: "A spacious duplex perfect for families with kids.",
  },
  {
    id: 4,
    title: "bungalow",
    price: "$100,000",
    location: "Victoria Island, Lagos",
    image: "/assets/project4.png",
    description: "A fully automated villa with smart home features.",
  },
];

const OngoingProjects = () => {
  const phoneNumber = "+2349130136839"; // Replace with your real WhatsApp number

  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1E3240] mb-10">
          Ongoing Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => {
            // Custom WhatsApp Message Template
            const message = encodeURIComponent(
              `Hello, I saw the *${project.title}* at *${project.location}* on your website, and I'm interested.\n\n` +
              `My name is _______.\n` +
              `Can you share more details?\n\nThank you!`
            );

            return (
              <motion.div
                key={project.id}
                className="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="text-2xl font-bold text-[#1E3240] mt-4">
                  {project.title}
                </h3>
                <p className="text-lg text-gray-700 mt-2">{project.description}</p>
                <p className="text-lg font-semibold text-blue-600 mt-3">
                  {project.price}
                </p>
                <p className="text-sm text-gray-500">📍 {project.location}</p>

                {/* WhatsApp Button */}
                <a
                  href={`https://wa.me/${phoneNumber}?text=${message}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
                >
                  <MessageCircle size={24} />
              
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OngoingProjects;
