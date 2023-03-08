import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 20px;
  background-color: lightcoral;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  background-color: lightcoral;
  border: none;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: red;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;
`;

export default function Contact() {
  const ref = useRef();
  const [succsess, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5q5834p",
        "template_d7btl4o",
        ref.current,
        "RzJYtCKQ872GwWDt7"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Me</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea placeholder="Message" name="message" rows={10} />
            <Button type="submit">Send</Button>
            {succsess && `Message send`}
          </Form>
        </Left>
        <Right></Right>
      </Container>
    </Section>
  );
}
