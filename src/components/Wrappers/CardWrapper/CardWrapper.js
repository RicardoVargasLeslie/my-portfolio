import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 10px;
    display: inline-block;
    align-items: baseline;
    vertical-align: baseline;
    align-self: baseline;
`;

const CardWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}


export default CardWrapper;
