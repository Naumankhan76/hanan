import React from "react";
function Experience({ experience: { year, degree, content, content1,content2, content3,content4,content5 } }) {
  return (
    
    <div className="entry">
      <div className="title">
        <span>{year}</span>
      </div>
      <div className="body">
        <h4 className="mt-0">{degree}</h4>
        <h7 style={{ fontStyle: 'italic' }}>{content}</h7>
        
      <ul className="custom-list">
        <li>{content1}</li>
        <li>{content2}</li>
        <li>{content3}</li>
        <li>{content4}</li>
      </ul>
      </div>
    </div>
  );
}

export default Experience;
