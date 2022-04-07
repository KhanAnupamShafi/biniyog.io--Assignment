import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <FooterElement>
        <SvgElement>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="auto"
            height="88"
            fill="none"
            viewBox="0 0 1440 88"
          >
            <path
              fill="#00ABE7"
              d="M-142 .001L761.5 73.5 1674 .001v330.001H-142v-330z"
              opacity="0.1"
            ></path>
          </svg>
        </SvgElement>
      </FooterElement>
    </>
  );
};

const FooterElement = styled.div`
  position: relative;
  height: 542px;
  width: 100%;
`;
const SvgElement = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export default Footer;
