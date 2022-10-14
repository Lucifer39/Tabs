import React from "react";

const Item = (props) => {
  const { title, dates, duties, company } = props.obj;

  return (
    <div className="info">
      <div className="title">{title}</div>
      <div className="company-info">{company}</div>
      <h4>{dates}</h4>
      <ul>
        {duties.map((duty) => {
          return <li>{duty}</li>;
        })}
      </ul>
    </div>
  );
};

export default Item;
