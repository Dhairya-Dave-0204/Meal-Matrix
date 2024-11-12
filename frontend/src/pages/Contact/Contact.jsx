import React from "react";
import Swal from 'sweetalert2'
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
            icon: "success"
          });
    }
  };

  return (
    <>
      <div
        className="contact-banner bg-cover bg-center h-[50vh] flex flex-col mb-20 justify-center items-center text-white"
        style={{ backgroundImage: `url(${assets.contact})` }}
      >
        <h1 className="text-4xl md:text-7xl font-bold mb-4 font-expletus">
          Contact Us
        </h1>
        <h2 className="text-3xl md:text-5xl font-semibold mb-4 p-2">
          Get answers to your queries ASAP!
        </h2>
      </div>

      <div className="contact-card grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-7xl mx-auto mt-5 mb-28">
        <div className="flex items-center justify-center flex-col bg-white drop-shadow rounded-xl p-4 hover:scale-105 transition-all duration-500">
          <img src={assets.telephone} alt="" className=" w-20 h-20 mb-5" />
          <h2 className="text-2xl font-medium mb-2">Hotline</h2>
          <p className="text-base">+91 1234567890</p>
        </div>

        <div className="flex items-center justify-center flex-col bg-white drop-shadow rounded-xl p-4 hover:scale-105 transition-all duration-500">
          <img src={assets.map} alt="" className=" w-20 h-20 mb-5" />
          <h2 className="text-2xl font-medium mb-2">Our Location</h2>
          <p className="text-base px-6">
            55 Main Street, The Grand Avenue 2nd Block, New York City
          </p>
        </div>

        <div className="flex items-center justify-center flex-col bg-white drop-shadow rounded-xl p-4 hover:scale-105 transition-all duration-500">
          <img src={assets.email} alt="" className=" w-20 h-20 mb-5" />
          <h2 className="text-2xl font-medium mb-2">Official Mail</h2>
          <p className="text-base">meal_matrix@gmail.com</p>
        </div>
      </div>

      <div className="contact-form flex justify-center items-center mb-20">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-center text-sm font-semibold text-gray-500 mb-1">
            KEEP IN TOUCH
          </h2>
          <h1 className="text-center text-4xl font-semibold font-expletus text-gray-800 mb-6">
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
                className="w-full p-3 h-32 bg-gray-100 border border-gray-200 rounded-md resize-none focus:outline-none focus:border-gray-300"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-7 bg-primary text-lg text-white font-semibold rounded-md flex justify-center items-center space-x-2 hover:text-primary hover:bg-secondary transition-all duration-500"
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
