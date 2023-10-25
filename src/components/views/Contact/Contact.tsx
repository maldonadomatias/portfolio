import { styled } from "styled-components";
import SectionContainer from "../../ui/SectionContainer";
import TitleUI from "../../ui/TitleUI";
import { Form } from "./Form";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--foreground-color);
`;

const Contact = () => {
  return (
    <SectionContainer id="contact">
      <TitleUI title="contact" />
      <Container>
        <Form />
      </Container>
    </SectionContainer>
  );
};

export default Contact;
