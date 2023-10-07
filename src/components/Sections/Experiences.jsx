import React from "react";
import Experience from "../Items/Experience";

const experiencesData = [
  {
    id: 5,
    year: "AUG 2022 - Present",
    degree: "Freelancing",
    content: "Graphic Desiging | Video Editing | Marketing | SMM",
    content1: "Research and analyze industry trends, audience behavior, and competition",
    content2: "Negotiating Terms and Pricing with Clients",
    content3: "Delivering High-Quality Work within Agreed Deadlines",
    content4: "Cultivating Positive Client Relationships and Securing Repeat Business",
    content5: "Continuously Upgrading Skills and Staying Updated with Industry Trends",
  },
  {
    id: 1,
    year: "DEC 2019 - Present",
    degree: "Copier.Pk",
    content: "Content Creation | Social Media Managment | Web Graphic Designing ",
    content1: "Designing Engaging Visual Content",
    content2: "Social Media Management and Scheduling",
    content3: "Developing Social Media Marketing Campaigns",
    content4: "Creating and Managing Paid Social Media Advertising",
    content5: "Youtube Content Creation & Managment",
  },
  {
    id: 2,
    year: "JUN 2019-NOV 2019",
    degree: "LAL Technologies",
    content:"Graphic Designer / SMM",
    content1: "Layout Design",
    content2: "Typography Mastery",
    content3: "Campaign Management",
    content4: "Trend Awareness",
    content5: "Audience Engagement",
  },
  {
    id: 3,
    year: "APR 2019-SEP 2018",
    degree: "Impossible Game Studio",
    content:
      "Graphic/UI Designer",
    content1: "Designing App Icons",
    content2: "Creating Sprite Atlases for Efficient Rendering",
    content3: "Illustration",
    content4: "Design Research and Competitive Analysis",
    content5: "Visual Asset Creation for Mobile Apps and Games",
  },
  {
    id: 4,
    year: "JAN 2017-JUL 2016",
    degree: "Federal Abdali School & College Rawalpindi",
    content:
      "Subject Specialist",
      content1: "Presenting lessons",
      content2: "Assess and record student's progress",
      content3: "Creating and distributing educational content",
      content4: "Instructional Planning",
      content5: "Providing individualized support",

  },
];

function Experiences() {
  return (
    <div className="timeline">
      {experiencesData.map((experience) => (
        <Experience experience={experience} key={experience.id} />
      ))}
      <span className="timeline-line"></span>
    </div>
  );
}

export default Experiences;
