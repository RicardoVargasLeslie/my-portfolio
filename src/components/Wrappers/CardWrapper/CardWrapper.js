import React from "react";
import styled from "styled-components";
const CardWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.div`
    padding: 10px;
    display: inline-block;
    align-items: baseline;
    vertical-align: baseline;
    align-self: baseline;
`;

export default CardWrapper;
