import React from "react";
import styled from "styled-components";
import { Dialog } from "@mui/material";
import { Cursor } from "react-creative-cursor";
import { isMobile } from "react-device-detect";
import { AnimatePresence, motion } from "framer-motion";

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
    height: fit-content;
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
    <AnimatePresence>
      <StyledModal open={open} onClose={onClose} width={width}>
        {!isMobile && <Cursor isGelly={true} animationDuration={0.1} />}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.75,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              ease: "easeOut",
              duration: 0.25,
            },
          }}
          data-cursor-size="15px"
        >
          {children}
        </motion.div>
      </StyledModal>
    </AnimatePresence>
  );
};

export default CustomModal;
