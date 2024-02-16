import { content } from "../Content";

const Hireme = () => {
  const { Hireme } = content;

  return (
    <section id="hireme" className="p-[100px]">
      <div className="md:container px-5 pt-14">
        <h2 className="text-3xl leading-9 font-medium font-Inria Serif" data-aos="fade-down">
          {Hireme.title}
        </h2>
        <h4 className="text-xl font-Inria Serif" data-aos="fade-down">
          {Hireme.subtitle}
        </h4>
        <br />
        <div className="flex items-center md:flex-row flex-col-reverse ">
          <img
            src={Hireme.image1}
            alt="..."
            data-aos="fade-right"
            className="max-w-sm md:block hidden"
          />
          <img
            src={Hireme.image2}
            data-aos="fade-up"
            alt="..."
            className="max-w-sm md:hidden"
          />
          <div
            data-aos="fade-left"
            className="border-2 border-dark_primary max-w-sm
           p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
          >
            <p className="leading-7">{Hireme.para}</p>
            <br />
            <button className="bg-black rounded-md p-2 text-white">
              <a href="#contact">{Hireme.btnText}</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
