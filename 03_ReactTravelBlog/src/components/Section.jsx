import React from "react";

// id: 1,
// location
// link:
// title:
// date:
// text:

const Section = (props) => {
  return (
    <section className="Section-card">
      <div>
        <img className="Section-image" src={props.image} />
      </div>
      <div className="Section-text-area">
        <p className="Section-location">
          <img className="Section-location-icon" src="../images/location.png" />
          {props.location}
          <a href="#" className="Section-map-link">
            {props.link}
          </a>
        </p>

        <h3 className="Section-title">{props.title}</h3>
        <p className="Section-date">{props.date}</p>
        <p className="Section-description">{props.text}</p>
      </div>
    </section>
  );
};

export default Section;
