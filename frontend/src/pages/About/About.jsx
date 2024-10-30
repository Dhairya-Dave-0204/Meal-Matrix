import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <>
      <div className="p-8 md:p-16 px-4 md:px-24 lg:px-48 py-4 gap-6 mx-4 md:mx-8 my-6 md:my-20">
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-primary font-semibold">About Us</h2>
            <h1 className="text-4xl font-bold font-expletus leading-tight">
              A Legacy of Compassionate Care!
            </h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Vestibulum elit eu
              vulputate tristique enim molestie neque. Ultricies arcu sed tempor
              integer. Nulla aliquet tellus vel dictum tempus.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="bg-white shadow-lg rounded-lg p-6 md:w-1/2">
                <h3 className="text-xl font-semibold">Our Vision</h3>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet consectetur. Vestibulum elit eu
                  vulputate tristique enim.
                </p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 md:w-1/2">
                <h3 className="text-xl font-semibold">Our Mission</h3>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet consectetur. Vestibulum elit eu
                  vulputate tristique enim.
                </p>
              </div>
            </div>

            <button
              onClick={() => navigate("/signin")}
              className="mt-4 px-6 py-2 bg-primary font-medium text-xl text-white rounded-lg hover:bg-secondary hover:text-primary"
            >
              Join Now
            </button>
          </div>
          <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
            <img
              src="https://img.freepik.com/free-photo/medium-shot-professional-chefs-working-together_23-2151232173.jpg?t=st=1730284506~exp=1730288106~hmac=be589fa78c192320d6d00dc73d613c86ab15743e751df49b945823ed29741a7f&w=1380"
              alt="Reception area"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mt-20 leading-relaxed">
          <h2 className=" text-3xl mb-10 font-expletus text-primary font-medium">
            Our Motive and our Aim
          </h2>
          <p className=" text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
            quaerat, commodi pariatur perferendis quis ut reprehenderit ipsam
            perspiciatis eum porro earum, ratione aspernatur eius possimus,
            repellendus dignissimos voluptatem ducimus voluptatibus adipisci
            natus cumque! Magnam corrupti nihil sapiente quod expedita fugit
            possimus, quaerat sint impedit minus,
            <br />
            <br />
            soluta voluptatem dolore ipsa quasi perspiciatis iusto! Ullam
            eveniet magni quam, vel laudantium placeat laboriosam? Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Dolores, repudiandae.
            Quidem fuga laboriosam repellat iste hic libero iusto laborum quae
            error nemo debitis rem et dolores non animi adipisci voluptates
            voluptatum, eos illo labore necessitatibus molestias quod! Saepe
            nisi vero alias maiores obcaecati dolorem quaerat odio voluptate
            cupiditate distinctio.
            <br />
            <br />
            Minus, in tenetur. Numquam libero placeat accusamus esse eligendi
            optio dignissimos ea excepturi quas exercitationem, quidem sint
            corporis, mollitia reprehenderit officiis obcaecati incidunt error.
            Dolores dolor fugit voluptatibus in cumque numquam magnam id iure?
            Voluptate quis, dignissimos in harum fugiat mollitia odio, dolorum
            officiis esse expedita autem sint earum nemo numquam!
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
