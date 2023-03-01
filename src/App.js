import styled from "styled-components";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Who from "./components/Who/Who";
import Works from "./components/Works/Works";

const Container = styled.div`
  height: 100vh;
  background-color: rebeccapurple;
`;

export default function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  );
}
