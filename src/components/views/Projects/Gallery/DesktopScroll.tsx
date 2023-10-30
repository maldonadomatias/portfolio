import { useEffect, useRef, useState } from "react";
import { useTransform, useScroll, motion } from "framer-motion";
import { isSafari } from "react-device-detect";
import Lenis from "@studio-freight/lenis";
import styled from "styled-components";

import { IMAGE_PATHS } from "../../../../constants/imagePaths";
import Spacing from "../../../../constants/Spacing";

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
  height: 175vh;
  position: relative;
  display: flex;
  gap: 2vw;
  padding: 2vw;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: ${Spacing}px;
  border: 2px solid var(--shadow-color);
`;

const ColumnAnimation = styled(motion.div)`
  position: relative;
  height: 100%;
  width: 25%;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  gap: 2vw;

  &:nth-of-type(1) {
    top: -45%;
  }
  &:nth-of-type(2) {
    top: -95%;
  }
  &:nth-of-type(3) {
    top: -45%;
  }
  &:nth-of-type(4) {
    top: -75%;
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
  }
`;

export default function DesktopScroll() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <Container ref={gallery}>
      <Column images={[images[0], images[1], images[2]]} y={isSafari ? 975 : y} />
      <Column
        images={[images[3], images[4], images[5]]}
        y={isSafari ? 2050 : y2}
      />
      <Column
        images={[images[6], images[7], images[8]]}
        y={isSafari ? 975 : y3}
      />
      <Column
        images={[images[9], images[10], images[11]]}
        y={isSafari ? 1620 : y4}
      />
    </Container>
  );
}

interface Props {
  images: string[];
  y: any;
}

const Column = ({ images, y }: Props) => {
  return (
    <ColumnAnimation style={{ y }}>
      {images.map((src, i) => {
        return (
          <ImageContainer key={i}>
            <img src={src} alt="image" />
          </ImageContainer>
        );
      })}
    </ColumnAnimation>
  );
};
