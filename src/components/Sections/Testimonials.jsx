import React from "react";
import Slider from "react-slick";
import Testimonial from "../Items/Testimonial";

const testimonialsData = [
  {
    id: 1,
    content:
      "“Inside Semab's head is a seemingly inexhaustible font of ideas which he uses to reliably surprise and delight me with every creative design challenge I present to him. Semab is endlessly inventive. And his concepts aren't just for show. They consistently make a point or sell an idea.”",
    authorImage: "images/customer-1.png",
    authorName: "Travis Radina",
    authorStatus: "Axostics",
  },
  {
    id: 2,
    content:
      "“Hanan Semab is a talented, energetic and gifted graphic designer; his work is fresh, bold, innovative and exciting.Hanan communicates extremely well with his clients, and is cost-efficient and time-sensitive. I recommend Mr. Hanan unreservedly for any type of graphic design project, large or small.”",
    authorImage: "images/customer-2.png",
    authorName: "Regan Traub",
    authorStatus: "GlieseCoin",
  },
  {
    id: 3,
    content:
      "“Hanan has worked on three different projects for me and I will continue to use him for all my future creative needs. He's prompt and responsive to feedback. His artwork and designs are always impressive and exactly what we want. It's always a pleasurable and fun process. Very happy!”",
    authorImage: "images/customer-3.png",
    authorName: "Syed Besharat Ali Shah ",
    authorStatus: "CGA Finance",
  },
  {
    id: 4,
    content:
      "“Hanan was a pleasure to work with from start to finish with my logo design project. He created exactly what I had in mind and finished ahead of schedule. I would recommend Hanan to anyone.”",
    authorImage: "images/customer-4.png",
    authorName: "Dr.Aftab Iqbal",
    authorStatus: "Arid Agriculture University",
  },
];

function Testimonials() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className="testimonials-wrapper">
      <Slider {...settings} className="padding-slider">
        {testimonialsData.map((testimonial) => (
          <Testimonial testimonial={testimonial} key={testimonial.id} />
        ))}
      </Slider>
    </div>
  );
}

export default Testimonials;
