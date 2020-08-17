import React from "react";
import "./Card.css";

const Card = (props) => {
  return (

    <div>
      <div>
        <div class="flip-card-container">
          <div class="flip-card">
            <div class="flip-card-front">
              <img src={props.img} />
            </div>
            <div class="flip-card-back">{props.trigger}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
