import React from "react";

function Pricebox({ pricebox: { year, degree, content, content1 } }) {
  return (
    <div className="entry">
      <div className="title">
        <span>{year}</span>
      </div>
      <div className="body">
        <h4 className="mt-0">{degree}</h4>
        <p>{content}</p>
        <p>{content1}</p>
      </div>
    </div>
  );
}

export default Pricebox;
