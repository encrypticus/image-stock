import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ListItemStyled = styled(motion.div)`
  position: relative;
`;

export const ImageStyled = styled.img`
  width: 100%;
  height: auto;
`;

export const VideoStyled = styled.video`
  width: 100%;
  height: auto;
`;

export const ResolutionStyled = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
  z-index: 2;
`;
