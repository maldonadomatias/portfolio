import { styled } from "styled-components";
import SectionContainer from "../../ui/SectionContainer";
import TitleUI from "../../ui/TitleUI";
import Button from "../../ui/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--foreground-color);
`;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 450px;
  height: fit-content;
  padding: 5% 3%;
  border: 2px solid var(--shadow-color);
  border-radius: 10px;
  gap: 1rem;

  h3 {
    font-weight: 200;
  }
`;

const Input = styled.input`
  background-color: var(--shadow-color);
  color: var(--foreground-color);
  font-family: "Manrope", sans-serif !important;
  font-weight: 500;
  padding: 10px;
  border: none;
  width: 100%;
  font-size: 1rem;
`;

const Contact = () => {
  return (
    <SectionContainer id="contact">
      <TitleUI title="contact" />
      <Container>
        <FormContainer>
          <h3>contact me</h3>
          <Input type="text" name="name" placeholder="name" />
          <Input type="text" name="email" placeholder="email" />
          <Input type="textarea" name="message" placeholder="message" />
          <Button onClick={() => {}}>send</Button>
        </FormContainer>
      </Container>
    </SectionContainer>
  );
};

export default Contact;
