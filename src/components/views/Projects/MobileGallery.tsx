import { motion } from "framer-motion";
import styled from "styled-components";

import { IMAGE_PATHS } from "../../../constants/imagePaths";
import Spacing from "../../../constants/Spacing";

const images = [
  IMAGE_PATHS.project_1,
  IMAGE_PATHS.project_2,
  IMAGE_PATHS.project_3,
  IMAGE_PATHS.project_4,
  IMAGE_PATHS.project_5,
  IMAGE_PATHS.project_6,
  IMAGE_PATHS.project_7,
  IMAGE_PATHS.project_8,
  IMAGE_PATHS.project_9,
  IMAGE_PATHS.project_10,
  IMAGE_PATHS.project_11,
  IMAGE_PATHS.project_12,
];

const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 2vw;
  padding: 2vw;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: ${Spacing}px;
  box-shadow: 0 0 10px 10px var(--shadow-color);
`;

const ColumnAnimation = styled(motion.div)`
  width: 48%; /* Two columns, each taking 48% of the container width */
  flex-shrink: 0; /* Prevent columns from shrinking */
  height: 250px; /* Set a fixed height for the columns */
  position: relative;
  border-radius: ${Spacing}px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%; /* On smaller screens, take 100% width (1 column) */
    height: 150px; /* Adjust the height for smaller screens */
  }
`;

const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  border-radius: ${Spacing}px;
  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export default function MobileGallery() {
  return (
    <section>
      <Container>
        {images.map((src, i) => (
          <Column key={i}>
            <ImageContainer>
              <img src={src} alt={`image ${i + 1}`} />
            </ImageContainer>
          </Column>
        ))}
      </Container>
    </section>
  );
}

const Column = styled(ColumnAnimation)``;
