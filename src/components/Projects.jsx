import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { content } from "../Content";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const Projects = () => {
  const { Projects } = content;
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <section className="p-4 md:p-[100px]" id="projects">
      <div className="container px-2 md:px-5 pt-4 mx-auto flex flex-col justify-between">
        <div>
          <h2
            className="text-2xl md:text-3xl leading-8 md:leading-9 font-medium font-InriaSerif"
            data-aos="fade-down"
          >
            {Projects.title}
          </h2>
          <h4 className="text-lg md:text-xl font-InriaSerif" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex flex-col items-center gap-5">
          <Swiper
            pagination={{
              pagination: true,
            }}
            cssMode={true}
            navigation={true}
            mousewheel={true}
            keyboard={true}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper rounded-3xl pb-8 md:pb-16 max-w-[350px] md:max-w-[500px] drop-shadow-primary self-start md:self-center"
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
          >
            {Projects.project_content.map((content) => (
              <div key={content.id}>
                <SwiperSlide>
                 
                  <a
                    target="blank"
                    href="https://mini-project-vikash.netlify.app/"
                    className=""
                  >
                   <img src={content.image2} alt="..." />
                    <div className="flex flex-col gap-1 mt-2">
                      <h5 className="text-sm md:text-base font-bold font-Poppins">
                        {content.title2}
                      </h5>
                      <button className="text-xs md:text-sm font-bold text-gray self-end bg-lime-400 rounded-full ">
                        <a
                          target="blank"
                          href="https://mini-project-vikash.netlify.app/"
                          className="p-[20px] md:p-[30px]"
                        >     
                          OPEN
                        </a>
                      </button>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  
                  <a
                    target="blank"
                    href="https://rjtutorial.com/"
                    className=""
                  >
                  <img src={content.image1} alt="..." />
                    <div className="flex flex-col gap-1 mt-2">
                      <h5 className="text-sm md:text-base font-bold font-Poppins">
                        {content.title1}
                      </h5>
                      <button className="text-xs md:text-sm font-bold text-gray self-end bg-lime-400 rounded-full ">
                        <a
                          target="blank"
                          href="https://rjtutorial.com/"
                          className="p-[20px] md:p-[30px]"
                        >
                          OPEN
                        </a>
                      </button>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  
                  <a
                    target="blank"
                    href="https://exploreaihub.com/"
                    className=""
                  >
                  <img src={content.image3} alt="..." />
                    <div className="flex flex-col gap-1 mt-2">
                      <h5 className="text-sm md:text-base font-bold font-Poppins">
                        {content.title3}
                      </h5>
                      <button className="text-xs md:text-sm font-bold text-gray self-end bg-lime-400 rounded-full ">
                        <a
                          target="blank"
                          href="https://exploreaihub.com/"
                          className="p-[20px] md:p-[30px]"
                        >
                          OPEN
                        </a>
                      </button>
                    </div>
                  </a>
                </SwiperSlide>
                
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;


// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
// import { content } from "../Content";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "swiper/css/scrollbar";

// const Projects = () => {
//   const { Projects } = content;
//   const progressCircle = useRef(null);
//   const progressContent = useRef(null);

//   const onAutoplayTimeLeft = (s, time, progress) => {
//     progressCircle.current.style.setProperty("--progress", 1 - progress);
//     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
//   };

//   return (
//     <section className="p-[100px]" id="projects">
//       <div className="md:container px-5 pt-4 flex flex-col justify-between">
//         <div>
//           <h2
//             className="text-3xl leading-9 font-medium font-Inria Serif"
//             data-aos="fade-down"
//           >
//             {Projects.title}
//           </h2>
//           <h4 className="tect-xl font-Inria Serif" data-aos="fade-down">
//             {Projects.subtitle}
//           </h4>
//           <br />
//         </div>
//         <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
//           {/* <img
//             src={Projects.image}
//             alt="..."
//             data-aos="fade-right"
//             className="max-w-[45vw] min-w-[22rem]"
//           /> */}
//           <Swiper
//             pagination={{
//               pagination: true,
//             }}
//             cssMode={true}
//             navigation={true}
//             mousewheel={true}
//             keyboard={true}
//             data-aos="fade-left"
//             spaceBetween={20}
//             modules={[Navigation, Pagination, Mousewheel, Keyboard]}
//             className="mySwiper rounded-3xl pb-16 max-w-[500px] drop-shadow-primary self-start"
//             centeredSlides={true}
//             autoplay={{
//               delay: 2500,
//               disableOnInteraction: true,
//             }}
//             onAutoplayTimeLeft={onAutoplayTimeLeft}
//           >
//             {Projects.project_content.map((content) => (
//               <div>
//                 {/* className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit" */}

//                 <SwiperSlide>
//                 <img src={content.image2} alt="..." />
//                   <a
//                     target="blank"
//                     href="https://mini-project-vikash.netlify.app/"
//                     className=""
//                   >
//                     <div className="flex flex-col gap-1 mt-2">
//                       <h5 className="font-bold font-Poppins">
//                         {content.title2}
//                       </h5>
//                       <button className="font-bold text-gray self-end bg-lime-400 rounded-full ">
//                         <a
//                           target="blank"
//                           href="https://mini-project-vikash.netlify.app/"
//                           className="p-[30px]"
//                         >     
//                           OPEN
//                         </a>
//                       </button>
//                     </div>
//                   </a>
//                 </SwiperSlide>
//                 <SwiperSlide>
                 
//                 <img src={content.image1} alt="..." />
//                   <a
//                     target="blank"
//                     href="https://rjtutorial.com/"
//                     className=""
//                   >
//                     <div className="flex flex-col gap-1 mt-2">
//                       <h5 className="font-bold font-Poppins">
//                         {content.title1}
//                       </h5>
//                       <button className="font-bold text-gray self-end bg-lime-400 rounded-full ">
//                         <a
//                           target="blank"
//                           href="https://rjtutorial.com/"
//                           className="p-[30px]"
//                         >
//                           OPEN
//                         </a>
//                       </button>
//                     </div>
//                   </a>
//                 </SwiperSlide>
//               </div>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
