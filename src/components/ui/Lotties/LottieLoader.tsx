import { useLottie } from "lottie-react";
import styled from "styled-components";

import loader from "../../../assets/lotties/loader.json";

const Container = styled.div`
  position: fixed;
  top: 0;
  height: 100dvh;
  width: 100vw;
  background-color: var(--background-color);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LottieLoader = () => {
  const options = {
    animationData: loader,
    loop: true,
  };

  const { View } = useLottie(options);

  return <Container>{View}</Container>;
};

export default LottieLoader;
