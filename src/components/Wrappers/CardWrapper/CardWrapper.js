import React from "react";
import "./CardWrapper.css";

const CardWrapper = ({ children }) => {
  return <div className="cardWrapper">{children}</div>;
};



const CardWrapper = styled.div`
    padding: 10px;
    display: inline-block;
    align-items: baseline;
    vertical-align: baseline;
    align-self: baseline;
`;

export default CardWrapper;
