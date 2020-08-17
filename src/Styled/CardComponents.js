import styled from "styled-components";

const flipCardContainer = styled.div`

 width: 300px;
  height: 400px;
  perspective: 1000px;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 10px;
  hover:{

     transform: rotateY(180deg);
  }
 
`;

const flipCard = styled.div`

  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  font-family: 'Roboto', sans-serif;

`;

const flipCardFront = styled.div`

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

const flipCardBack = styled.div`

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

  p{
   text-align: left;
  padding: 5px;
  align-content: center;
  font-size: 1.5 rem;
  margin: auto;
  font-family: 'Roboto', sans-serif;

  }

`;