import styled from "styled-components";

export const FlipCardContainer = styled.div`

 width: 300px;
  height: 400px;
  perspective: 1000px;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 10px;

 
`;

export const FlipCard = styled.div`

  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  font-family: 'Roboto', sans-serif;
 

`;

export const FlipCardFront = styled.div`

  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  


  img{

  width: 100%;
  height: 100%;
  margin: auto;
  border-radius: 0.5rem;

  }

`;

export const FlipCardBack = styled.div`

  background-color: #ffc107;
  transform: rotateY(180deg);
  border-radius: 0.5rem;
  font-family: 'Roboto', sans-serif;
  font-size: 1.5 rem;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
   transform: rotateY(180deg);
 
`;