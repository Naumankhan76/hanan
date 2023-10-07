import React from "react";
import TrackVisibility from "react-on-screen";
import Funfact from "../Items/Funfact";

const funfactData = [
  {
    id: 1,
    title: "Projects completed",
    count: 221,
    icon: "icon-like",
  },
  {
    id: 2,
    title: "Youtube Views",
    count: 708324,
    icon: "icon-eye",
  },
  {
    id: 3,
    title: "Happy customers",
    count: 31,
    icon: "icon-emotsmile",
  },
  {
    id: 4,
    title: "Videos Published",
    count: 181,
    icon: "icon-cloud-upload",
  },
];

function Funfacts() {
  return (
    <section className="shadow-dark color-white background parallax padding-50">
      <div className="row relative z-1 -mt-50">
        {funfactData.map((funfact) => (
          <div className="col-md-3 col-sm-6 mt-50" key={funfact.id}>
            <TrackVisibility once>
              <Funfact funfact={funfact} />
            </TrackVisibility>
          </div>
        ))}
      </div>
      <div className="overlay"></div>
    </section>
  );
}

export default Funfacts;
