import Image from "next/image";
import styled from "styled-components";

export const SlantedDivTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: ${(props) => props.theme.colors.primary};
  width: 100%;
  height: 200px;
  margin-top: -140px;
  color: ${(props) => props.theme.colors.white};
  clip-path: polygon(0 70%, 100% 0, 100% 100%, 0 100%);
`;

export const SlantedDivBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: ${(props) => props.theme.colors.primary};
  width: 100%;
  height: 200px;
  color: ${(props) => props.theme.colors.white};
  clip-path: polygon(0 0, 100% 0, 100% 30%, 0 100%);
`;

export const SplitScreenContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  justify-content: center;
  align-items: center;
  height: 100vh;
  z-index: 100;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const Img = styled(Image)`
  width: 100%;
  height: 150%;
  object-fit: cover;
  /* overflow-x: hidden; */
  margin-top: -180px;
  z-index: 10;
  /* margin-bottom: 260px; */
  clip-path: polygon(0 70%, 100% 0, 100% 100%, 0 100%);
`;
