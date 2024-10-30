import React, { useState } from "react";

function FAQ() {
  const accordingData = [
    {
      title: "What is the purpose of Meal Matrix?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi beatae et, optio ullam impedit debitis qui, error rerum, nesciunt ut dolore consectetur eaque iure tenetur perferendis? Voluptas labore a modi."
    },
    {
      title: "What features Meal Matrix offer?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga animi optio voluptatibus, cumque perferendis pariatur! Laborum quae aut voluptatem! Natus quibusdam sint ipsum aspernatur harum in doloremque esse quis aut impedit, corporis id iure est accusamus obcaecati expedita reprehenderit ut.",
    },
    {
      title: "How to order food Meal Matrix?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, doloremque aut. Est, minus porro? Voluptatum nesciunt quas officia nisi quae nobis doloribus, cupiditate dicta possimus.",
    },

    {
      title: "What is criteria to register restaurant on Meal Matrix",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, provident iure pariatur officiis, repellendus ut nemo earum, repudiandae dolore autem optio aspernatur delectus rerum fugiat hic cupiditate sed? Cum unde vitae voluptate dolorem. Similique, iure.",
    },

    {
      title: "How food is delivered by Meal Matrix?",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ad nesciunt praesentium ipsam officiis voluptatibus mollitia voluptatem, ipsum nobis aspernatur fugiat facilis cupiditate quas natus culpa expedita assumenda ducimus nisi cum perspiciatis optio at dolorum eius! Nulla fuga eveniet mollitia ratione magni esse ex ipsa quas possimus blanditiis! Exercitationem, nulla.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  // set acitve state
  const handleActiveState = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <main className="w-full h-screen flex items-center justify-center flex-col gap-4">
        {accordingData?.map((item, index) => (
          <div
            className="w-full sm:w-[50%] border border-secondary rounded p-4"
            key={index}
          >
            <div
              className={`${
                activeIndex === index ? "" : "text-primary"
              } flex items-center justify-between cursor-pointer font-semibold`}
              onClick={() => handleActiveState(index)}
            >
              <h3 className="text-[1.6rem] ">{item.title}</h3>
              <i className={`ri-arrow-down-s-line text-[1.5rem] transition-all duration-300 ${
                  activeIndex === index && "rotate-[180deg]"
                }`}></i>
            </div>
            <div
              className={`overflow-hidden grid transition-all duration-300${
                activeIndex === index
                  ? " grid-rows-[1fr] py-4"
                  : " grid-rows-[0fr] py-0"
              }`}
            >
              <p className="text-base overflow-hidden">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}

export default FAQ;
