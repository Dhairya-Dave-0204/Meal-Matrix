import React from "react";
import Swal from "sweetalert2";
import { assets } from "../../assets/frontend_assets/assets";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a043e90a-2d7e-48ae-9ba2-29cfad5dded0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Respnse recieved, will reach out to you soon",
        icon: "success",
      });
    }
  };

  return (
    <>
      <div
        className="contact-banner bg-cover bg-center h-[50vh] flex flex-col mb-20 justify-center items-center text-white"
        style={{ backgroundImage: `url(${assets.contact})` }}
      >
        <h1 className="mb-4 text-4xl font-bold md:text-7xl font-expletus">
          Contact Us
        </h1>
        <h2 className="p-2 mb-4 text-3xl font-semibold md:text-5xl">
          Get answers to your queries ASAP!
        </h2>
      </div>

      <div className="grid w-full grid-cols-1 gap-10 mx-auto mt-5 contact-card md:grid-cols-3 max-w-7xl mb-28">
        <div className="flex flex-col items-center justify-center p-4 transition-all duration-500 bg-white drop-shadow rounded-xl hover:scale-105">
          <img src={assets.telephone} alt="" className="w-20 h-20 mb-5 " />
          <h2 className="mb-2 text-2xl font-medium">Hotline</h2>
          <p className="text-base">+91 1234567890</p>
        </div>

        <div className="flex flex-col items-center justify-center p-4 transition-all duration-500 bg-white drop-shadow rounded-xl hover:scale-105">
          <img src={assets.map} alt="" className="w-20 h-20 mb-5 " />
          <h2 className="mb-2 text-2xl font-medium">Our Location</h2>
          <p className="px-6 text-base">
            55 Main Street, The Grand Avenue 2nd Block, New York City
          </p>
        </div>

        <div className="flex flex-col items-center justify-center p-4 transition-all duration-500 bg-white drop-shadow rounded-xl hover:scale-105">
          <img src={assets.email} alt="" className="w-20 h-20 mb-5 " />
          <h2 className="mb-2 text-2xl font-medium">Official Mail</h2>
          <p className="text-base">meal_matrix@gmail.com</p>
        </div>
      </div>

      <div className="flex items-center justify-center mb-20 contact-form">
        <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
          <h2 className="mb-1 text-sm font-semibold text-center text-gray-500">
            KEEP IN TOUCH
          </h2>
          <h1 className="mb-6 text-4xl font-semibold text-center text-gray-800 font-expletus">
            Send us a Message
          </h1>
          <form className="space-y-4" onSubmit={onSubmit}>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full p-3 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:border-gray-300"
              />
            </div>
            <div className="flex space-x-4">
              <input
                type="email"
                name="email"
                placeholder="Email*"
                className="w-1/2 p-3 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:border-gray-300"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                required
                className="w-1/2 p-3 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:border-gray-300"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message *"
                name="message"
                className="w-full h-32 p-3 bg-gray-100 border border-gray-200 rounded-md resize-none focus:outline-none focus:border-gray-300"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="flex items-center justify-center py-3 space-x-2 text-lg font-semibold text-white transition-all duration-500 rounded-md px-7 bg-primary hover:text-primary hover:bg-secondary"
            >
              <span>
                <i className="ri-send-plane-line"></i>
              </span>
              <span>Get In Touch</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
