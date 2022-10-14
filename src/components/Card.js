import React, { useState } from "react";
import Item from "./Item";

const Card = (props) => {
  const data = props.obj;
  const [index, setIndex] = useState(1);

  return (
    <>
      <div className="card">
        <div className="left-col">
          {data.map((companyName) => {
            return (
              <div
                className={companyName.order == index ? "selected" : "company"}
                onClick={() => setIndex(companyName.order)}
              >
                {companyName.company}
              </div>
            );
          })}
        </div>
        <div className="right-col">
          <Item obj={data[index - 1]} />
        </div>
      </div>
    </>
  );
};

export default Card;
