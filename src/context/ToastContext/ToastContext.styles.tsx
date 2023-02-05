import { MEDIA } from "@constants/layout";
import styled from "styled-components";

export const ToastsWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 8px;
  top: 0px;
  right: 0px;
  margin: 16px;

  @media ${MEDIA.MOBILE} {
    min-width: 100vw;
    max-width: 100vw;
  }

  @media ${MEDIA.TABLET} {
    max-width: 500px;
    min-width: 400px;
  }
`;
