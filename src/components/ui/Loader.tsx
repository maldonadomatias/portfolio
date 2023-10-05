import styled, { keyframes } from "styled-components";

const jumpJump1 = keyframes`
  0%, 70% {
    box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
    transform: scale(0);
  }
  100% {
    box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
    transform: scale(1);
  }
`;

const jumpJump2 = keyframes`
  0%, 40% {
    box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
    transform: scale(0);
  }
  100% {
    box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
    transform: scale(1);
  }
`;

const jumpJump3 = keyframes`
  0%, 10% {
    box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
    transform: scale(0);
  }
  100% {
    box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
    transform: scale(1);
  }
`;

const Frame = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 100vh;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
  background: var(--background-color);
  color: var(--foreground-color);
`;

const Center = styled.div`
  position: absolute;
  width: 220px;
  height: 220px;
  top: 90px;
  left: 90px;
`;

const Dot = styled.div<{ size: string; top: string; left: string }>`
  position: absolute;
  width: ${(props) => props.size || "30px"};
  height: ${(props) => props.size || "30px"};
  top: ${(props) => props.top || "0"};
  left: ${(props) => props.left || "0"};
  background: var(--foreground-color);
  border-radius: 50%;
  animation-fill-mode: both;
`;

const Dot1 = styled(Dot)`
  z-index: 3;
  opacity: 0.40;
  animation: ${jumpJump1} 2s cubic-bezier(0.21, 0.98, 0.6, 0.99) infinite
    alternate;
`;

const Dot2 = styled(Dot)`
  z-index: 2;
  opacity: 0.35;
  animation: ${jumpJump2} 2s cubic-bezier(0.21, 0.98, 0.6, 0.99) infinite
    alternate;
`;

const Dot3 = styled(Dot)`
  z-index: 1;
  opacity: 0.3;
  animation: ${jumpJump3} 2s cubic-bezier(0.21, 0.98, 0.6, 0.99) infinite
    alternate;
`;

const Loader = () => {
  return (
    <Frame>
      <Center>
        <Dot1 size="30px" top="95px" left="95px" />
        <Dot2 size="60px" top="80px" left="80px" />
        <Dot3 size="90px" top="65px" left="65px" />
      </Center>
    </Frame>
  );
};

export default Loader;
