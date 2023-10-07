import React from "react";
import TrackVisibility from "react-on-screen";
import Skill from "../Items/Skill";

const skillData = {
  skillContent:
    "With years of experience in the creative industry, I have honed my skills and developed a unique aesthetic that sets me apart from the competition. On this website, you'll find a diverse range of projects that demonstrate my ability to tackle any challenge with creativity, innovation, & precision.",
  progressData: [
    {
      id: 1,
      name: "Social Media Marketing",
      percentage: 85,
    },
    {
      id: 2,
      name: "Videography & Editing",
      percentage: 90,
    },
    {
      id: 3,
      name: "Graphic Designing",
      percentage: 95,
    },
    {
      id: 4,
      name: "2D & 3D Animation",
      percentage: 87,
    },
    {
      id: 4,
      name: "Audio Tweeking",
      percentage: 76,
    },
    {
      id: 4,
      name: "Seo",
      percentage: 95,
    },
  ],
};

function Skills() {
  return (
    <>
      <p className="justified-text mb-0">{skillData.skillContent}</p>
      <div className="mt-5">
        <div className="row -mt-50">
          {skillData.progressData.map((progress) => (
            <div className="col-md-6 mt-50" key={progress.id}>
              <TrackVisibility once>
                <Skill progress={progress} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
