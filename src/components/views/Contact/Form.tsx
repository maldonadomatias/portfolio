import React, { useRef } from "react";
import styled from "styled-components";
import toast from "react-hot-toast";

import { useData } from "../../../context/data-context";
import useForm from "../../../hooks/useForm";

import Button from "../../ui/Button";
import Spacing from "../../../constants/Spacing";

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 450px;
  height: fit-content;
  padding: 5% 3%;
  border: 2px solid var(--shadow-color);
  background-color: var(--background-color);
  box-shadow: 0px 0px 10px 0px var(--shadow-color);
  border-radius: ${Spacing}px;
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

const Textarea = styled.textarea`
  background-color: var(--shadow-color);
  color: var(--foreground-color);
  font-family: "Manrope", sans-serif !important;
  font-weight: 500;
  padding: 10px;
  border: none;
  width: 100%;
  font-size: 1rem;
  resize: none;
`;

export const Form: React.FC = () => {
  const form = useRef(null);

  const { sendEmail } = useData();
  const { values, setFieldValue, resetForm } = useForm({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleSendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!values.user_name || !values.user_email || !values.message)
      return toast.error("Please fill out all fields");

    await toast.promise(sendEmail(form), {
      loading: "Sending...",
      success: `Message sent successfully! `,
      error: `Message failed to send`,
    });

    resetForm(); // Reset form fields after sending email
  };

  return (
    <FormContainer ref={form} onSubmit={handleSendEmail}>
      <h3>contact me</h3>
      <Input
        type="text"
        placeholder="name"
        name="user_name"
        value={values.user_name}
        onChange={(e) => setFieldValue("user_name", e.target.value)}
      />
      <Input
        type="email"
        placeholder="email@test.com"
        name="user_email"
        value={values.user_email}
        onChange={(e) => setFieldValue("user_email", e.target.value)}
      />
      <Textarea
        name="message"
        placeholder="write a message"
        value={values.message}
        onChange={(e) => setFieldValue("message", e.target.value)}
      />
      <Button type="submit">send</Button>
    </FormContainer>
  );
};
