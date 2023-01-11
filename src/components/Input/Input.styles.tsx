import styled from "styled-components";

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: 16px;
  border: none;
  outline: none;
  margin: 0 auto;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.secondary20};
  color: ${(props) => props.theme.colors.secondary};

  &::placeholder {
    font-size: 16px;
    letter-spacing: normal;
    color: ${(props) => props.theme.colors.secondary70};
  }
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const ErrorMessage = styled.p`
  flex: 1 1 auto;
  margin: 0;
  font-size: 12px;
  line-height: 16px;
  padding-left: 8px;
  color: ${(props) => props.theme.colors.primary};
`;

export const MessageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 16px;
  gap: 4px;
`;
