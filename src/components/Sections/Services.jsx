import React from "react";
import Service from "../Items/Service";

const servicesData = [
  {
    id: 1,
    name: "Branding ",
    content: " ",
    icon: "icon-diamond",
  },
  {
    id: 2,
    name: "Graphic Design",
    content: " ",
    icon: "icon-vector",
  },
  {
    id: 3,
    name: "Digital Marketing",
    content: " ",
    icon: "icon-rocket",
  },
  {
    id: 4,
    name: "Youtube SEO",
    content: " ",
    icon: "icon-social-youtube",
  },
  {
    id: 5,
    name: "Content Creation",
    content: " ",
    icon: "icon-camrecorder",
  },
  {
    id: 6,
    name: "SMM",
    content: " ",
    icon: "icon-settings",
  },
];

function Services() {
  return (
    <div className="row -mt-20">
      {servicesData.map((service) => (
        <div className="col-md-4 col-sm-6 mt-20" key={service.id}>
          <Service service={service} />
        </div>
      ))}
    </div>
  );
}

export default Services;
