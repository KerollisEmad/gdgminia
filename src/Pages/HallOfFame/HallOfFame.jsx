import { useState, useEffect } from "react";
import kerollisImage from "../../assets/images/HallOfFame/Kerollis.jpg";
import abdallahamrImage from "../../assets/images/HallOfFame/AbdallahAmr.jpg";
import abdallahMosatafImage from "../../assets/images/HallOfFame/AbdallahMostafa.jpg";
import AlaaImage from "../../assets/images/HallOfFame/Alaa.jpg";
import AhmedRabeaImage from "../../assets/images/HallOfFame/AhmedRabea.jpg";
import MostafaAimanImage from "../../assets/images/HallOfFame/MostafaAiman.jpg";
import MinaEidImage from "../../assets/images/HallOfFame/MinaEid.jpg";
import TahaImage from "../../assets/images/HallOfFame/Taha.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Meta from "../../Components/Meta/Mata";

const HallOfFame = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [cardTransforms, setCardTransforms] = useState({});
  const [loading, setLoading] = useState(false);

  const heroImages = [
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1300",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1300",
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Abdallah Mostafa",
      role: "Product Manager",
      image: abdallahMosatafImage,
      linkedin: " https://www.linkedin.com/in/c3bdol/",
      github: "#",
      tasks: [
        "Define the projects scope",
        "Assign tasks to designers and developers",
      ],
      row: 1,
      icon: <i className="fab fa-github"></i>,
    },
    {
      id: 2,
      name: " A’laa Mohammed",
      role: "UI/UX Designer",
      image: AlaaImage,
      linkedin: "https://www.linkedin.com/in/alaa-mohamed-315154317/",
      github: "#",
      tasks: [
        "Designed a clean, modern UI/UX",
        "User Created wireframes and high-fidelity screens",
        "Ensured smooth and intuitive user flow",
      ],
      row: 2,
      icon: <i className="fa-brands fa-behance"></i>,
    },
    {
      id: 3,
      name: "Abdallah Amr",
      role: "Frontend Dev",
      image: abdallahamrImage,
      linkedin: "www.linkedin.com/in/abdallah-amr-9b6662316",
      github: "https://github.com/Abdallah-Amr19",
      tasks: [
        "Built a ready-to-use Navbar and Footer for the entire website",
        "Developed the  Registration page",
        "Created the complete Hall of Fame (HOF) page",
      ],
      row: 3,
      icon: <i className="fab fa-github"></i>,
    },
    {
      id: 4,
      name: "Kyrillos Emad",
      role: "Front-end Dev",
      image: kerollisImage,
      linkedin: "https://www.linkedin.com/in/kerollis-emad-2ba57a38a/",
      github: "https://github.com/KerollisEmad",
      tasks: [
        "Structured and designed the entire project layout with React.js.",
        "Coordinated and merged all team contributions into the project repository.",
        "Developed Home and Committees pages from concept to implementation.",
        "Admin Dashboard: managed design, backend integration, logic, and responsive functionality.",
      ],
      row: 3,
      icon: <i className="fab fa-github"></i>,
    },
    {
      id: 5,
      name: "Mina Eid",
      role: "Frontend Dev",
      image: MinaEidImage,
      linkedin: "http://linkedin.com/in/mina-eid-naeim-52a414326",
      github: "https://github.com/minaeid55",
      tasks: [
        "Built the full About page with all API integrations and full responsiveness.",
        "Developed the responsive Team Board section.",
        "Created the Events page with 3 events × 3 versions, fully responsive.",
      ],
      row: 3,
      icon: <i className="fab fa-github"></i>,
    },
    {
      id: 6,
      name: "Mostafa Aiman",
      role: "Back-end Dev",
      image: MostafaAimanImage,
      linkedin: "https://www.linkedin.com/in/mostafa-aiman/",
      github: "#",
      tasks: [
        "Design and build RESTful APIs using Node.js and Express.",
        "Implement and manage MongoDB data models for the application.",
        "Integrate the backend APIs with the frontend and handle authentication and access control",
      ],
      row: 4,
      icon: <i className="fab fa-github"></i>,
    },
    {
      id: 7,
      name: "Ahmed Rabea",
      role: "Flutter Dev",
      image: AhmedRabeaImage,
      linkedin: "https://www.linkedin.com/in/ahmedrabea886/",
      github: "https://github.com/AhmedRabea4458",
      tasks: [
        "Integrated Google Sheets API and Firebase, managing most of the app’s data flow.",
        "Designed and built the QR Scan UI with full logic and image handling",
        "Contributed to Figma design and enhanced the overall app interface.",
      ],
      row: 4,
      icon: <i className="fab fa-github"></i>,
    },
    {
      id: 8,
      name: "Taha Sabry",
      role: "Flutter Dev",
      image: TahaImage,
      linkedin: "https://www.linkedin.com/in/tahtawy1",
      github: "https://github.com/Tahtawy1",
      tasks: [
        "Designed the full app flow and UI structure using Figma.",
        "Built and refined multiple application pages based on Figma designs.",
        "Handled integration with the Google Sheets API and managed all request/response flows.",
      ],
      row: 4,
      icon: <i className="fab fa-github"></i>,
    },
  ];

  useEffect(() => {
    if (heroImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [heroImages.length]);

  const handleCardMouseMove = (e, cardId) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setCardTransforms((prev) => ({
      ...prev,
      [cardId]: `rotateY(${x * 0.08}deg) rotateX(${-y * 0.08}deg) scale(1.05)`,
    }));
  };

  const handleCardMouseLeave = (cardId) => {
    setCardTransforms((prev) => ({
      ...prev,
      [cardId]: "rotateY(0deg) rotateX(0deg) scale(1)",
    }));
  };

  const groupedMembers = teamMembers.reduce((acc, member) => {
    if (!acc[member.row]) acc[member.row] = [];
    acc[member.row].push(member);
    return acc;
  }, {});

  //^ Loading Skeleton
  if (loading) {
    return (
      <div className="bg-[#0a0a0f] min-h-screen p-10 flex flex-col gap-16">
        {/* Skeleton Hero */}
        <div className="w-full h-[260px] bg-white/5 rounded-xl animate-pulse shadow-[0_0_25px_rgba(0,255,255,0.05)]" />

        {/* Skeleton Cards Rows */}
        <div className="flex flex-col gap-14">
          {[1, 2].map((row) => (
            <div key={row} className="flex justify-center gap-10 flex-wrap">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-[300px] h-[300px] rounded-2xl bg-white/5 animate-pulse 
                shadow-[0_0_15px_rgba(0,255,255,0.15),inset_0_0_10px_rgba(0,255,255,0.08)] backdrop-blur-md"
                >
                  <div className="w-[120px] h-[120px] bg-white/10 rounded-full mt-8 mx-auto" />
                  <div className="h-4 w-40 bg-white/10 rounded mt-6 mx-auto"></div>
                  <div className="h-3 w-28 bg-white/10 rounded mt-3 mx-auto"></div>
                  <div className="h-20 w-5 bg-white/10 rounded mt-6 mx-auto"></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <Meta
        title="GDG Minya | Hall Of Fame"
        description="Celebrating Excellence and Achievement at GDG Minya. Meet our distinguished Hall of Fame members."
        keywords="GDG Minya, Hall Of Fame, Excellence, Achievement, Members"
      />
      <div className="bg-[#0a0a0f] font-['Poppins',sans-serif] m-0 p-0 pb-18">
        {/* Hero Section */}
        <div className="w-full h-[500px] relative flex justify-center items-center mb-[50px] overflow-hidden">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full bg-cover bg-center blur-[1px] brightness-[0.7] scale-110 z-1 transition-opacity duration-[1.5s] ease-in-out ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}

          <div className="absolute inset-0 bg-black/40 z-2" />

          <div className="relative text-center z-3 px-5">
            <h1 className="font-['Playfair_Display',serif] text-[4.5rem] md:text-[4rem] font-black mb-5 tracking-[2px] leading-[1.1] text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.5)]">
              Hall Of{" "}
              <span className="relative inline-block">
                <span className="absolute inset-0 font-['Playfair_Display',serif] text-[5.4rem] md:text-[3.2rem] font-black tracking-[2px] text-[#3498db] blur-sm opacity-40 z-0 leading-[1.1]">
                  Fame
                </span>
                <span
                  className="relative z-10 font-['Playfair_Display',serif] text-[5.8rem] md:text-[5rem] font-black tracking-[2px] text-[#3498db] leading-[1.1]
  drop-shadow-[0_0_12px_rgba(52,152,219,0.85)]
"
                >
                  Fame
                </span>

                <span className="absolute bottom-[5px] left-0 w-full h-[3px] bg-linear-to-r from-transparent via-[#3498db] to-transparent rounded-xs z-10" />
              </span>
            </h1>
            <p className="font-['Montserrat',sans-serif] text-[1.4rem] md:text-[1.1rem] text-[#e0e0e0] font-normal tracking-[1px] mt-[15px] [text-shadow:0_2px_5px_rgba(0,0,0,0.5)]">
              Celebrating Excellence and Achievement
            </p>
          </div>
        </div>

        {/* Team Container */}
        <div className="flex flex-col items-center gap-[55px]">
          {Object.keys(groupedMembers)
            .sort()
            .map((row) => (
              <div
                key={row}
                className="flex justify-center items-center gap-[50px] flex-wrap relative"
              >
                {groupedMembers[row].map((member) => (
                  <div
                    key={member.id}
                    className="group w-[300px] h-80 py-4 bg-[rgba(20,20,35,0.85)] p-5 rounded-[20px] [box-shadow:0_0_10px_rgba(0,255,300,0.2),inset_0_0_10px_rgba(0,255,255,0.15)] backdrop-blur-[10px] transform-style:preserve-3d transition-[transform,box-shadow] duration-300 ease-in [transition-property:transform,box-shadow] transition-duration:0.2s,0.3s relative cursor-pointer overflow-hidden hover:[box-shadow:0_0_20px_rgba(0,255,255,0.6),0_0_35px_rgba(0,150,255,0.3)] after:content-[''] after:absolute after:bottom-[-25px] after:left-0 after:w-full after:h-[25px] after:bg-linear-to-b after:from-white/15 after:to-transparent after:blur-xs after:scale-y-[-1] after:opacity-20 after:pointer-events-none"
                    style={{
                      transform:
                        cardTransforms[member.id] ||
                        "rotateY(0deg) rotateX(0deg) scale(1)",
                    }}
                    onMouseMove={(e) => handleCardMouseMove(e, member.id)}
                    onMouseLeave={() => handleCardMouseLeave(member.id)}
                  >
                    <div className="w-40 h-40 rounded-full mb-[15px] [box-shadow:0_0_10px_rgba(0,255,255,0.3)] relative overflow-hidden flex justify-center items-center mx-auto">
                      <div
                        className="absolute top-0 left-0 w-full h-full bg-cover bg-center object-contain brightness-110 z-1"
                        style={{ backgroundImage: `url(${member.image})` }}
                      />
                    </div>

                    <div className="text-[1.6rem] font-semibold text-white text-center mb-[5px]">
                      {member.name}
                    </div>
                    <div className="text-[#00eaff] text-base text-center mb-2.5">
                      {member.role}
                    </div>

                    <div
                      className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100
             bg-black/30 backdrop-blur-sm rounded-lg p-2
             transform translate-x-6 group-hover:translate-x-0
             transition-all duration-500 ease-in-out hover:z-10"
                    >
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-[#0077b5] text-3xl"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-white text-3xl"
                      >
                        {member.icon}
                      </a>
                    </div>

                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-white/60 text-xl opacity-30 group-hover:opacity-0 transition-opacity duration-300">
                      <i className="fas fa-arrow-up"></i>
                    </div>

                    <div className="absolute bottom-[-120px] group-hover:bottom-0 rounded-[20px] left-0 w-full bg-[rgba(0,119,255,0.14)] backdrop-blur-sm py-[15px] pl-[15px] border-t border-white/20 transition-[bottom,opacity] duration-[0.9s] ease-in-out z-5 opacity-0 transition-duration:0.9s,0.4s transition-timing-function:ease-in-out,ease group-hover:opacity-100">
                      <h3 className="m-0 text-[0.9rem] text-[#8cd1ff]">
                        Tasks:
                      </h3>
                      <ul className="my-[5px] ml-0 pl-[15px] text-white text-[0.85rem]">
                        {member.tasks.map((task, idx) => (
                          <li key={idx} className="mb-[5px]">
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default HallOfFame;
