import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import { FaGithub, FaGlobe } from 'react-icons/fa';
import { MdOutlineSettings } from 'react-icons/md';

import Button from '../Shared/Ui/Button';
import SectionHeading from '../Shared/SectionHeading/SectionHeading';
import ProjectCard from './ProjectCard';
import TechIcon from '../Shared/TechIcon/TechIcon';


import project1Img1 from '../../assets/project11.png';
import project1Img2 from '../../assets/project12.png';
import project1Img3 from '../../assets/project13.png';
import project1Img4 from '../../assets/project14.png';
import project1Img5 from '../../assets/project15.png';
import project1Img6 from '../../assets/project16.png';
import project1Img7 from '../../assets/project17.png';



import project2Img1 from '../../assets/project21.png';
import project2Img2 from '../../assets/project22.png';
import project2Img3 from '../../assets/project23.png';
import project2Img4 from '../../assets/project24.png';
import project2Img5 from '../../assets/project25.png';



import project3Img1 from '../../assets/project31.png';
import project3Img2 from '../../assets/project32.png';
import project3Img3 from '../../assets/project33.png';
import project3Img4 from '../../assets/project34.png';
import project3Img5 from '../../assets/project35.png';



const projectsData = [
  {
    id: 1,
    title: "CookNext",
    description: "CookNext is a user-friendly recipe-sharing web application where users can explore, discover, and learn about a variety of delicious recipes from around the world. Designed with simplicity and speed in mind, CookNext offers an engaging culinary experience for food lovers.",
    brief: "CookNext is a user-friendly recipe-sharing web application where users can explore, discover, and learn a variety of recipes from around the world. With an intuitive interface and fast performance, it offers an engaging platform for food lovers to share, save, and try new dishes.",
    challenges: "Designing a clean and visually appealing UI for recipe browsing.Implementing an efficient search and filter system (cuisine, ingredients, cooking time).Managing user-generated content with images and text.Ensuring mobile responsiveness for a seamless experience on all devices.Handling secure authentication for recipe creators and users.",
    improvements: "Add step-by-step video tutorials for recipes.Implement AI-powered ingredient suggestions based on available pantry items.Introduce a meal planner and shopping list generator.Add rating and review systems for recipes.Provide multi-language support for global accessibility.",
    images: [project3Img1, project3Img2, project3Img3, project3Img4, project3Img5,],
    tags: ["SiJavascript", "SiReact", "SiNodedotjs", "SiExpress", "SiMongodb", "SiFirebase", "SiTailwindcss", "SiVercel", "SiJwt"],
    links: {
      live: "https://cooknest-af909.web.app/",
      githubClient: "https://github.com/MD-SIFAT-AHAMED/CookNext-Client",
      githubServer: "https://github.com/MD-SIFAT-AHAMED/CookNext-Server",
    },
  },
  {
    id: 2,
    title: "EduBridge ",
    description: "EduBridge is a full-stack educational platform where: Teachers can create and manage classes and assignments. Students can purchase classes, learn, submit assignments, and give reviews. Admins manage users, classes, and overall platform access.",
    brief:"EduBridge is a full-stack educational platform where teachers can create and manage classes with assignments, students can purchase classes, learn, submit assignments, and leave reviews, while admins oversee users, classes, and platform management.",
    challenges: "Implementing secure role-based access control for students, teachers, and admins.Integrating payment gateway for purchasing classes.Managing file uploads and submissions for assignments.Designing a responsive, accessible UI for all user roles.Handling real-time updates for class content and reviews.",
    improvements: "Add live class/video conferencing integration.Implement AI-powered course recommendations for students.Provide detailed teacher performance analytics.Add multi-language support for a global audience.Enable offline access to downloaded learning materials.",
    images: [project1Img1, project1Img2, project1Img3, project1Img4, project1Img5, project1Img6, project1Img7,],
    tags: ["SiJavascript", "SiReact", "SiNodedotjs", "SiExpress", "SiMongodb", "SiFirebase", "SiTailwindcss", "SiAwesomeReveal", ],
    links: {
      live: "https://edu-bridge-6a75b.web.app/",
      githubClient: "https://github.com/MD-SIFAT-AHAMED/EduBridge-Client-Side",
      githubServer: "https://github.com/MD-SIFAT-AHAMED/EduBridge-Server-Side",
    },
  },
  {
    id: 3,
    title: "Booking.com ",
    description: "Booking.com is a full-featured web application that allows users to easily book hotels and rooms online. Users can browse available rooms, make bookings, leave reviews, and manage their bookings (cancel/delete).",
    brief: "Booking.com is a hotel booking web application that enables users to search and filter rooms, view details with reviews, make secure bookings, and manage reservations. The platform ensures a smooth user experience with authentication, responsive design, and real-time updates.",
    challenges: "Implementing real-time room availability updates.Managing secure authentication and authorization with JWT.Designing a responsive and user-friendly UI using Tailwind CSS.Handling booking conflicts and preventing double-booking.Integrating review and rating systems effectively.",
    improvements: "Add advanced search filters (price range, amenities, ratings).Implement payment gateway integration for direct online payments.Provide multi-language and multi-currency support.Add AI-powered recommendations for personalized hotel suggestions.Improve admin dashboard with analytics and booking trends.",
    images: [project2Img1, project2Img2, project2Img3, project2Img4,project2Img5],
    tags: ["SiJavascript", "SiReact", "SiNodedotjs", "SiExpress", "SiMongodb", "SiFirebase", "SiTailwindcss", "SiVercel", "SiJwt"],
    links: {
      live: "https://explore-email-password-a-86d53.web.app/",
      githubClient: "https://github.com/MD-SIFAT-AHAMED/Booking-Com-Client",
      githubServer: "https://github.com/MD-SIFAT-AHAMED/Booking-Com-Server",
    },
  },

];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <section id="/projects" className='px-2 md:px-0 scroll-mt-30'>
      <SectionHeading>My Projects</SectionHeading>
      {/* Responsive Grid for Project Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-self">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} onDetails={() => setSelectedProject(project)} />
        ))}
      </div>
      <a href='https://github.com/MD-SIFAT-AHAMED' target='blank' className='flex justify-center mt-10'><Button variant='outline'>More Projects</Button></a>
      {/* Modal */}
      {selectedProject && (
        <dialog
          id="project_modal"
          className="modal modal-open border border-primary/20 backdrop-blur-xs"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="modal-box max-w-3xl border border-primary/20"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-2xl text-primary">{selectedProject.title}</h3>
              <button
                className="btn btn-circle btn-sm btn-outline btn-primary hover:bg-primary hover:text-base-100 hover:shadow-md hover:shadow-primary/20 transition-all"
                onClick={() => setSelectedProject(null)}
              >
                X
              </button>
            </div>

            {/* Swiper Slider for Images */}
            {selectedProject.images && selectedProject.images.length > 0 && (
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                modules={[Autoplay]}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                className="mb-4 rounded-md border border-base-300"
              >
                {selectedProject.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img src={img} alt={selectedProject.title} className="w-full h-36 md:h-76 object-cover rounded" />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
            <p className="mb-4 text-base-content/80 italic">{selectedProject.description}</p>
            {selectedProject.brief && (
              <div className="mb-4">
                <span className="font-semibold">Brief Description:</span>
                <p className="text-base-content/70 text-sm mt-1">{selectedProject.brief}</p>
              </div>
            )}
            {selectedProject.challenges && (
              <div className="mb-4">
                <span className="font-semibold">Challenges Faced:</span>
                <p className="text-base-content/70 text-sm mt-1">{selectedProject.challenges}</p>
              </div>
            )}
            {selectedProject.improvements && (
              <div className="mb-4">
                <span className="font-semibold">Potential Improvements & Future Plans:</span>
                <p className="text-base-content/70 text-sm mt-1">{selectedProject.improvements}</p>
              </div>
            )}
            <p className='mb-2 font-semibold'>Technology:</p>
            {/* Tags with Icons */}
            <div className="flex flex-wrap gap-3 mb-4">
              {selectedProject.tags?.map((iconName, index) => (
                <TechIcon key={index} iconName={iconName} />
              ))}
            </div>
            {/* Links  */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm mb-4">
              <a href={selectedProject.links?.live} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary text-base-content/80 hover:shadow-md hover:shadow-primary/20 hover:scale-110 transition-all"><FaGlobe /> Live</a>
              <a href={selectedProject.links?.githubClient} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline btn-primary text-base-content/80 hover:shadow-md hover:shadow-primary/20 hover:scale-110 transition-all"> <FaGithub />Client</a>
              <a href={selectedProject.links?.githubServer} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline btn-primary text-base-content/80 hover:shadow-md hover:shadow-primary/20 hover:scale-110 transition-all"> <MdOutlineSettings />Server</a>
            </div>
            <div className="modal-action">
              <button className="btn btn-primary btn-outline btn-sm hover:shadow-md hover:shadow-primary/20 transition-all" onClick={() => setSelectedProject(null)}>Close</button>
            </div>
          </div>
        </dialog>
      )}
    </section>
  );
};

export default Projects;