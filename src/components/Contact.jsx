import { createElement, useRef } from "react";
import { content } from "../Content";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const { Contact } = content;
  const form = useRef();

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7819fv1",
        "template_a8zki9c",
        form.current,
        "lJrLKf0VNBB3PGnRw"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Clear all input field values
          form.current.reset();
          // Success toast message
          toast.success("Email send Successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <section className="bg-slate-800 text-white pl-[140px]" id="contact">
      <Toaster />
      <div className="md:container px-5 py-14 bg-dark_primary">
        <h2
          className="text-3xl leading-9 font-medium font-Inria Serif !text-white"
          data-aos="fade-down"
        >
          {Contact.title}
        </h2>
        <h4 className="text-xl font-Inria Serif" data-aos="fade-down">
          {Contact.subtitle}
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5"
          >
            {/* Input Name as same as email js templates values */}
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="border border-slate-600 p-3 rounded text-slate-950"
            />
            <input
              type="email"
              name="user_email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Email Id"
              required
              className="border border-slate-600 p-3 rounded text-slate-950"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border border-slate-600 p-3 rounded h-44 text-slate-950"
              required
            ></textarea>
            <button className="rounded self-start p-2 bg-white text-black font-semibold hover:">
              Submit
            </button>
          </form>
          <div className="flex-1 flex flex-col gap-5">
            {Contact.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-2"
              >
                 {/* <h4 className="text-white">{createElement(content.icon)}</h4> \ */}
              
      <div className="">
          {content.icon}
        </div>
                <button><a className="font-Poppins" href={content.link} target="_blank" rel="noopener noreferrer">
                  {content.text}
                </a>	&#x2197;</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
