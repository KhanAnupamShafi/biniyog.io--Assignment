import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 688px) {
      ${props}
    }
  `;
};
export const tablet = (props) => {
  return css`
    @media only screen and (min-width: 689px) and (max-width: 992px) {
      ${props}
    }
  `;
};
export const laptop = (props) => {
  return css`
    @media only screen and (min-width: 993px) and (max-width: 1312px) {
      ${props}
    }
  `;
};
