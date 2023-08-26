import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ListItemStyled = styled(motion.div)`
  position: relative;
`;

export const ImageStyled = styled.img`
  width: 100%;
  height: auto;
  transition: filter 0.5s;
  :hover {
    filter: blur(4px);
  }
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

export const ImageOverlayStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0;
  :hover {
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 1;
  }
  transition: background-color 0.5s, opacity 0.5s;
  pointer-events: none;
`;

export const AuthorInfoStyled = styled.div`
  width: 70px;
  height: 70px;
  background-color: black;
`;
