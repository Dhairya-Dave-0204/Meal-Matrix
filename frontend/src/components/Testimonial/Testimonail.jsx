import React from "react";
import {
  Card,
  CardBody,
  Typography,
  CardHeader,
} from "@material-tailwind/react";
import PropTypes from 'prop-types';

TestimonialCard.propTypes = {
  img: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  clientInfo: PropTypes.string.isRequired,
};

function TestimonialCard({ img, client, title, clientInfo }) {
  return (
    <Card shadow={false} className="bg-gray-100/50 rounded-2xl p-6">
      <CardHeader color="transparent" floated={false} shadow={false}>
        <Typography
          color="blue-gray"
          className="lg:mb-20 mb-4 text-2xl font-bold"
        >
          &quot;{title}&quot;
        </Typography>
      </CardHeader>
      <CardBody className="px-4 py-0 flex flex-wrap-reverse gap-x-6 justify-between items-center">
        <div>
          <Typography variant="h6" color="blue-gray">
            {client}
          </Typography>
          <Typography
            variant="paragraph"
            className="font-normal !text-gray-500"
          >
            {clientInfo}
          </Typography>
        </div>
        <img src={img} className="special-img max-w-[8rem] grayscale" alt={client} />
      </CardBody>
    </Card>
  );
}

const testimonials = [
  {
    title:
      "The team went above and beyond to ensure my issue was resolved quickly and efficiently. Truly outstanding!",
    client: "Jessica Devis",
    clientInfo: "Full Stack Developer @Netflix",
    img: './netflix.svg',
  },
  {
    title:
      "It have broadened my horizons and helped me advance my career. The community is incredibly supportive.",
    client: "Marcell Glock",
    clientInfo: "Graphic Designer, @Amazon Prime",
    img: './prime.svg',
  },
];

function Testimonail() {
  return (
    <section className="px-8 py-8 lg:py-20">
      <div className="container mx-auto">
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
          {testimonials.map((props, key) => (
            <TestimonialCard key={key} {...props} />
          ))}
        </div>

        <Card
          shadow={false}
          className="mt-8 bg-gray-100/50 text-center rounded-2xl p-6"
        >
          <CardHeader color="transparent" floated={false} shadow={false}>
            <Typography
              color="blue-gray"
              className="mb-4 !text-2xl lg:!text-3xl max-w-4xl !leading-snug mx-auto font-bold"
            >
              &quot;Its intuitive design and powerful features make it
              indispensable. I can&apos;t imagine going back to life before
              it!&quot;
            </Typography>
          </CardHeader>
          <CardBody className="items-center mx-auto py-2">
            <img
              src="./tesla.svg"
              className="max-w-[8rem] mx-auto special-img"
              alt="spotify"
            />
            <Typography variant="h6" color="blue-gray">
              Emma Roberts
            </Typography>
            <Typography
              variant="paragraph"
              className="font-normal !text-gray-500"
            >
              Chief Executive @Tesla
            </Typography>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Testimonail;
