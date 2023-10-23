import React from "react";
import styled from "styled-components";
import { Dialog } from "@mui/material";
import { Cursor } from "react-creative-cursor";
import { isMobile } from "react-device-detect";

type ModalProps = {
  open: boolean;
  children: React.ReactNode;
  width?: string;
  onClose: () => void;
};

const StyledModal = styled(Dialog)<{ width?: string }>`
  .MuiDialog-paper {
    background-color: transparent;
    box-shadow: none;
    width: 100%;
    max-width: ${(props) => (props.width ? props.width : "fit-content")};
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }

  .MuiDialog-container {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const CustomModal: React.FC<ModalProps> = ({
  open,
  children,
  onClose,
  width,
}) => {
  return (
    <StyledModal open={open} onClose={onClose} width={width}>
      {!isMobile && <Cursor isGelly={true} animationDuration={0.1} />}
      <div data-cursor-size="15px">{children}</div>
    </StyledModal>
  );
};

export default CustomModal;
