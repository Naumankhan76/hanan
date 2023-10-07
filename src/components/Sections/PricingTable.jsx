import React from "react";
import Pricebox from "../Items/Pricebox";

const experiencesData = [
 
  {
    id: 5,
    year: "2023",
    degree: "Google UX Design",
    content:
      "Grow with Google - IRM Program",
  },

  {
    id: 3,
    year: "2018",
    degree: "Master of Information Technology",
    content:
      "PMAS-Arid Agriculture University Rawalpindi",
  },
  {
    id: 4,
    year: "2015",
    degree: "Computer Applications Training",
    content:
      "Nucom Institute Of Technology",
  },
  {
    id: 1,
    year: "2015",
    degree: "Bachelor's of Computer Science",
    content:
      "University of Sargodha",
  },
  {
    id: 2,
    year: "2013",
    degree: "Intermediate of Computer Science",
    content:
      "F.G Liaquat Ali Degree College Rawalpindi",
  },
];

function PricingTable() {
  return (
    <div className="timeline">
      {experiencesData.map((experience) => (
        <Pricebox pricebox={experience} key={experience.id} />
      ))}
      <span className="timeline-line"></span>
    </div>
  );
}

export default PricingTable;
