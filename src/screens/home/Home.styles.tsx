import styled from "styled-components";

export const FirstDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: ${(props) => props.theme.colors.primary};
  width: 100%;
  height: 100vh;
  color: ${(props) => props.theme.colors.white};
`;

export const SecondDiv = styled.div`
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

export const ThirdDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: ${(props) => props.theme.colors.secondary};
  width: 100%;
  height: 200px;
  margin-top: -140px;
  color: ${(props) => props.theme.colors.white};
  clip-path: polygon(0 70%, 100% 0, 100% 100%, 0 100%);
`;

export const ForthDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: ${(props) => props.theme.colors.secondary};
  width: 100%;
  height: 100vh;
  color: ${(props) => props.theme.colors.white};
`;

export const FifthDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: ${(props) => props.theme.colors.secondary};
  width: 100%;
  height: 200px;
  color: ${(props) => props.theme.colors.white};
  clip-path: polygon(0 0, 100% 0, 100% 30%, 0 100%);
`;

export const SixthDiv = styled.div`
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

export const SeventhDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: ${(props) => props.theme.colors.primaryDark};
  width: 100%;
  height: 200px;
  margin-top: -140px;
  color: ${(props) => props.theme.colors.white};
  clip-path: polygon(0 70%, 100% 0, 100% 100%, 0 100%);
`;

export const EighthDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: ${(props) => props.theme.colors.primaryDark};
  width: 100%;
  height: 100vh;
  color: ${(props) => props.theme.colors.white};
`;
