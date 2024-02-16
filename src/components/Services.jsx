import { content } from "../Content";

const Services = () => {
  const { services } = content;
  return (
    <section id="services"className="p-[100px] bg-slate-100 ">
      <div className="md:container px-5 py-14">
        <h2
          className="text-3xl leading-9 font-medium font-Inria Serif"
          data-aos="fade-down"
        >
          {services.title}
        </h2>
        <h4 className="text-xl" data-aos="fade-down">
          {services.subtitle}
        </h4>
        <br />
        <div className="flex gap-5 justify-between flex-wrap group">
          {services.service_content.map((content, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 600}
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm 
              hover:!blur-none"
            >
              {/* <img src={content.logo} alt="..." className="mx-auto" /> */}
              <div className="mx-auto">
                {content.logo}
              </div>
              <br />
              <b className="m-3">{content.title}</b>
              <p className="leading-7">{content.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
