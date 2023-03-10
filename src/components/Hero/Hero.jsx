import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
const Title = styled.h1`
  font-size: 74px;
`;
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Line = styled.img`
  height: 5px;
`;
const SubTitle = styled.h2`
  color: green;
`;
const Desc = styled.p`
  font-size: 24px;
  color: lightgrey;
`;
const Button = styled.button`
  background-color: red;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
`;
const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

export default function Hero() {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Work as web!</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <SubTitle>Work as web!</SubTitle>
          </WhatWeDo>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iste
            numquam minima dolore reiciendis sed.
          </Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
          <Img src="./img/Earth.jpg" />
        </Right>
      </Container>
    </Section>
  );
}
