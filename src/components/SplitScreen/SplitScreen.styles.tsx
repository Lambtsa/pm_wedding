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

export const SplitScreenContainerTop = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  height: 100vh;
  z-index: 100;
  background-color: red;
  overflow: hidden;
  margin-top: -150px;
  background-color: ${(props) => props.theme.colors.primary};
  clip-path: polygon(0% 150px, 100% 0%, 100% 100%, 0% 100%);
`;

export const SplitScreenContainerBottom = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: red;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.primary};
  clip-path: polygon(0% 0%, 100% 0%, 100% calc(100vh - 150px), 0% 100%);
`;

export const Img = styled(Image)`
  width: 100%;
  object-fit: cover;
  z-index: 10;
`;
