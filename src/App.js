import styled from "styled-components";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Who from "./components/Who/Who";
import Works from "./components/Works/Works";

const Container = styled.div`
  height: 100vh;
  background-color: rebeccapurple;
  scroll-snap-type: y mandatory;
  scroll-bihavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg-port-3d.jpg");
  &::-webkit-scrollbar {
    display: none;
  }
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
