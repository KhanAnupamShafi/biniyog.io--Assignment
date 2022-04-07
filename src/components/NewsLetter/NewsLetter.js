import React from "react";
import styled from "styled-components";
import { mobile } from "./../../responsive";

const NewsLetter = () => {
  return (
    <NewsLetterContainer>
      <BoxContainer>
        <h5>Stay Updated about </h5>
        <h2>Charity Campaigns &amp; Investment Opportunities</h2>
        <EmailBox>
          <input placeholder={`Email Address`} />
          <button>Subscribe</button>
        </EmailBox>
      </BoxContainer>
      <ImageBg src="https://i.ibb.co/WzDfXpC/img-bg-subscribe-png.jpg" />
      <ImageTop src="https://i.ibb.co/jTspWwJ/Ellipse-2.png" />
      <ImageBottom src="https://i.ibb.co/5MGLLsK/Ellipse-3.png" />
      <ImageRight src="https://i.ibb.co/hRg1vX2/photo-1592964378097-281cab4a12a5-removebg-preview-1.png" />
    </NewsLetterContainer>
  );
};
const BoxContainer = styled.div`
  z-index: 1;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 1140px;
  text-align: center;

  line-height: 48px;
  h5 {
    font-size: 24px;
    padding-top: 140px;
    font-weight: 400;
    ${mobile({ fontSize: "18px" })}
  }
  h2 {
    font-size: 24px;
    font-weight: 700;
    ${mobile({ fontSize: "18px", margin: "0px 20px 0 20px " })}
  }
`;

const EmailBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 71px;

  ${mobile({ flexDirection: "column", alignItems: "center", gap: "20px" })}

  input {
    border-radius: 4px 0 0 4px;
    padding: 3px 0px 3px 16px;
    width: 468px;
    height: 46px;
    border: 1px solid #ced4da;
    outline: none;
    color: #6c757d;
    font-size: 20px;
    line-height: 30px;
    font-style: medium;
    &:focus {
      box-shadow: 0 0 5px rgba(81, 203, 238, 1);

      /* margin: 5px 1px 3px 0px; */
      border: 1px solid rgba(81, 203, 238, 1);
    }

    ${mobile({ width: "288px", fontSize: "14px" })}
  }

  button {
    cursor: pointer;
    background-color: #fdca40;
    &:hover {
      transition: all 2s ease-in;
      background-color: #ffbd06;
    }
    border: none;
    border-radius: 0 4px 4px 0;
    width: 128px;
    height: 46px;
    font-size: 20px;
    line-height: 30px;
    font-weight: 500;
    color: white;
  }
`;

const NewsLetterContainer = styled.div`
  width: 100%;
  height: 609px;
  background-color: #fbfbfb;
  position: relative;
`;
const ImageBg = styled.img`
  position: absolute;
  width: 100%;
  height: 609px;
  object-fit: cover;
  ${mobile({ display: "none" })}
`;
const ImageRight = styled.img`
  display: none;
  position: absolute;
  right: 0;
  height: 609px;
  width: 50%;
  ${mobile({ display: "block" })}
`;
const ImageTop = styled.img`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  /* height: 609px; */
  width: 50%;
  ${mobile({ display: "block" })}
`;
const ImageBottom = styled.img`
  display: none;
  position: absolute;
  bottom: 0;
  right: 0;
  /* height: 609px; */
  width: 50%;
  ${mobile({ display: "block" })}
`;

export default NewsLetter;
