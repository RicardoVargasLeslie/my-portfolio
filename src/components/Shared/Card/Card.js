import React from "react";
import { FlipCardContainer, FlipCard, FlipCardFront, FlipCardBack } from "../../../Styled/CardComponents"

const Card = (props) => {
  return (

    <div>
      <div>
        <FlipCardContainer>
          <FlipCard>
            <FlipCardFront>
              <img src={props.img} />
            </FlipCardFront>
            <FlipCardBack>{props.trigger}</FlipCardBack>
          </FlipCard>
        </FlipCardContainer>
      </div>
    </div>
  );
};

export default Card;
