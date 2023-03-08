import React from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
`;
const Title = styled.h1`
  font-size: 74px;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
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
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default function Who() {
  return (
    <Section>
      <Container>
        <Left></Left>
        <Right>
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
          {/* <Img src="./img/Earth.jpg" /> */}
        </Right>
      </Container>
    </Section>
  );
}
