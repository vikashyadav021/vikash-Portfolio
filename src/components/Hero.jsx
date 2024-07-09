import { content } from "../Content";

const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden mt-[-15px]">
      <div className="relative gap-44 flex md:flex-row flex-col-reverse md:items-end justify-center items-center pt-14 p-4 md:p-28 sm:w-full">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className=" bg-red-300 absolute h-full md:w-4/12 w-full sm:w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
        {/* Right side name VIKASH YADAV */}
          {/* <h1 className="rotate-90 absolute top-[37%] right-[-15%] text-5xl font-bold">
            {hero.firstName}{" "}
            <span className="text-[#252627]">{hero.LastName}</span>
          </h1> */}
          
        </div>

        {/* first col */}

        <div className="pb-1 px-2 sm:px-6 pt-5 mb-[40px]" data-aos="fade-down">
          <h1 className="text-2xl md:text-4xl font-bold">
            {hero.firstName} {hero.LastName}
          </h1>

          <h2 className="mt-2 font-semibold text-xl underline decoration-green-500 text-center">
            {hero.title}
          </h2>          

          <div className="flex flex-col gap-5 md:gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center md:w-80 w-full gap-2 md:gap-5 font-semibold
            ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h3 className="font-mono text-3xl md:text-5xl leading-none">
                  {content.count}
                </h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
          <div data-aos="fade-right"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            className="flex justify-center md:justify-end p-4">
          <a href="#contact">
          <button type="button" class="font-poppins text-white bg-green-700 hover:bg-green-800 focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">{hero.btnText}</button>
          </a>
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[25rem] h-72">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover  rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

// // import { useEffect } from "react";
// import { content } from "../Content";
// const Hero = () => {
//   const { hero } = content;

//   return (
//     <section id="home" className="overflow-hidden mt-[-15px]">
//       <div className=" relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center pt-14 p-28 sm:w-full">
//         <div
//           data-aos="slide-left"
//           data-aos-delay="1200"
//           className="sm:bg-lime-400 lg:bg-red-700 absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
//         >
//           <h1 className="rotate-90 absolute top-[37%] right-[-15%]  text-5xl font-bold text-[#EAF2FA]">
//             {hero.firstName}{" "}
//             <span className="text-[#252627]">{hero.LastName}</span>
//           </h1>
//         </div>

//         {/* first col */}
//         <div className="pb-16 px-6 pt-5 mb-[40px]" data-aos="fade-down">
//           <h2 className="text-4xl leading-none font-bold">{hero.title}</h2>

//           <div
//             data-aos="fade-right"
//             data-aos-offset="100"
//             data-aos-easing="ease-in-sine"
//             className="flex justify-end p-4"
//           >
//             <a href="#contact">
//               <button className="hover:bg-red-500 font-poppins rounded-tr-[0.375rem] rounded-br-[1.5rem] border-2 p-[0.5rem 2.25rem] font-medium p-[.8rem] mt-4">
//                 {hero.btnText}
//               </button>
//             </a>
//           </div>
//           <div className="flex flex-col gap-10 mt-10">
//             {hero.hero_content.map((content, i) => (
//               <div
//                 key={i}
//                 data-aos="fade-down"
//                 data-aos-delay={i * 300}
//                 className={`flex items-center w-80 gap-5 font-semibold
//             ${i === 1 && " flex-row-reverse text-right"}  `}
//               >
//                 <h3 className="font-mono text-5xl leading-none">
//                   {content.count}
//                 </h3>
//                 <p>{content.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* sec col */}
//         <div className="md:h-[25rem] h-96">
//           <img
//             src={hero.image}
//             data-aos="slide-up"
//             alt="..."
//             className="h-full object-cover"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
