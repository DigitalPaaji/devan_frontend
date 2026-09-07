import Image from "next/image";
import { BiAward, BiShield } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { GiCrowNest } from "react-icons/gi";
// import { Shield, Award, Eye, Handshake, Crown } from "lucide-react";

export default function PhilosophyAndMission() {
  const philosophyPoints = [
    {
      icon: BiShield,
      image: "/sustainability.png",
      title: "DEDICATION",
      description: "Committed to every detail for absolute safety and compliance.",
      color: "text-[#0D2B45]",
      bgColor: "bg-[#0D2B45]/10"
    },
    {
      icon: BiAward,
      image: "/premium.png", 
      title: "EXCELLENCE",
      description: "Delivering the highest standards always, through stability and microbiological analysis.",
      color: "text-[#0D2B45]",
      bgColor: "bg-[#0D2B45]/10"
    },
    {
      icon: BsEye,
      image: "/ele6.png", 
      title: "VIGILANCE",
      description: "Alert, observant and proactive in all manufacturing processes.",
      color: "text-[#0D2B45]",
      bgColor: "bg-[#0D2B45]/10"
    },
    {
      icon: FaHandshake,
      image: "/sustainability.png", 
      title: "ASSURANCE",
      description: "Ensuring trust through consistency, transparency, and quality.",
      color: "text-[#0D2B45]",
      bgColor: "bg-[#0D2B45]/10"
    },
    {
      icon: GiCrowNest,
      image: "/premium.png", 
      title: "NOBILITY",
      description: "Upholding dignity and excellence across every single formulation.",
      color: "text-[#0D2B45]",
      bgColor: "bg-[#0D2B45]/10"
    }
  ];

  const missionPoints = [
    {
      number: "01",
      title: "Our Vision",
      description:
"To create a professional ecosystem where sterilization professionals can continuously learn, share knowledge, participate in meaningful activities and grow together."
    },
    {
      number: "02",
      title: "Our Mission",
      description:
        "To become India's largest learning and professional networking platform for sterilization professionals, and eventually build a connected CSSD community worldwide."
    }
  ];

  return (
    <div className="text-[#0D2B45]">
      {/* Philosophy Section */}
      {/* <section className="px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-52 py-16 lg:py-24 overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#0D2B45] bg-[#0D2B45]/20 px-4 py-2 rounded-full mb-4">
          BUILT FOR CSSD PROFESSIONALS
            </span>
            
            <h2 className="text-3xl md:text-3xl lg:text-4xl font-light  text-[#0D2B45]">
             A Stronger  <span className="relative italic font-medium text-[#0D2B45]">CSSD </span>Community.
            </h2>
            
            <p className="text-[#0D2B45]/70 mt-4 max-w-2xl mx-auto">
DEVAN is a learning and professional networking platform created for sterilization professionals to learn, participate, connect and grow throughout their careers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 justify-center">
            {philosophyPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div 
                  key={index} 
                  className="relative text-center p-8 border border-[#A7ADB3]/40 hover:border-[#0D2B45] transition-all duration-500 group bg-white hover:-translate-y-2 shadow-sm rounded-2xl"
                >
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 ${point.bgColor} rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className="relative w-20 h-20 mx-auto rounded-full bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-all duration-500 overflow-hidden border-2 border-[#A7ADB3]/20 group-hover:border-[#0D2B45]/30">
                      <Image
                        src={point.image}
                        alt={point.title}
                        width={50}
                        height={50}
                        className="object-contain w-10 h-10 group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-medium mb-3 text-[#0D2B45] group-hover:text-[#0D2B45] transition-colors duration-300">
                    {point.title}
                  </h3>
                  
                  <p className="text-[#0D2B45]/70 leading-relaxed text-sm px-4">
                    {point.description}
                  </p>
                  
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#0D2B45] group-hover:w-16 transition-all duration-500" />
                  
                  <div className="absolute -bottom-4 -right-4 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none">
                    <Icon className="w-32 h-32 text-[#0D2B45]" />
                  </div>

                  <div className="absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-transparent group-hover:border-[#0D2B45] transition-all duration-500 rounded-tl-2xl" />
                  <div className="absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-transparent group-hover:border-[#0D2B45] transition-all duration-500 rounded-br-2xl" />
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Mission & Vision Section */}
      <section className="bg-white">

        
        <div className="px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-52 py-16 lg:py-24">
          {/* Title area */}
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm font-mono text-[#A7ADB3]">—</span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0D2B45] pb-2">Core Philosophy</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-medium mb-4 text-[#0D2B45]">
            OUR PURPOSE
            </h2>
            <p className="text-lg capitalize text-[#0D2B45]/70 italic font-light border-l-4 border-[#0D2B45] pl-6">
        Advancing CSSD Through Knowledge & Community.
            </p>
          </div>
          
          {/* Mission grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-28">
            {missionPoints.map((point, index) => (
              <div 
                key={index}
                className="group relative p-6"
              >
                {/* Number indicator */}
                <div className="text-6xl font-bold mb-4 text-[#A7ADB3]/40 group-hover:text-[#0D2B45]/40 transition-colors">
                  {point.number}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-[#0D2B45] mb-3 group-hover:text-[#0D2B45] transition-colors">
                  {point.title}
                </h3>
                <p className="text-[#0D2B45]/70 leading-relaxed text-sm">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}