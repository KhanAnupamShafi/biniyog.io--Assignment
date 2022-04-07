import React from "react";
import styled from "styled-components";
import { mobile } from "./../../responsive";

const Investment = () => {
  return (
    <SectionContainer>
      <ImageContainer
        src="https://i.ibb.co/HTsXCNH/img-promo-investment.png"
        alt="flower image"
      />
      <MaxContainer>
        <TitleText>
          <h2>
            Help Ethical Business <span>Grow</span>
          </h2>
          <p>biniyog.io helps you with Shariah-compliant investments. </p>
        </TitleText>
        <InvestButton>See Investment Opportunities</InvestButton>
        <Partners>
          <PartnerText>
            <p>
              SHARIAH <br /> ADVISOR
            </p>
          </PartnerText>
          <PartnerLogo
            src="https://i.ibb.co/kJqT2Xt/image-9.png"
            alt="partner logo"
          />
        </Partners>
      </MaxContainer>
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  width: 100%;
  height: 553px;
  position: relative;
`;
const ImageContainer = styled.img`
  position: absolute;
  width: 100%;
  height: 553px;
  /* object-fit: none; */
`;
const MaxContainer = styled.div`
  max-width: 1140px;

  margin: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 100px;
  padding: 0 50px;
`;

const TitleText = styled.div`
  vertical-align: center;
  h2 {
    font-weight: 300;
    font-size: 36px;
    line-height: 48px;
    span {
      font-weight: 900;
    }
    ${mobile({ fontSize: "24px" })}
  }
  p {
    margin-top: 9px;
    font-weight: 500;
    font-size: 18px;
    line-height: 48px;
    ${mobile({ fontSize: "12px", lineHeight: "30px" })}
  }
`;
const InvestButton = styled.button`
  margin-top: 16px;
  /* padding: 8px 16px 8px 16px; */
  width: 320px;
  height: 45px;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 4.8px;
  color: white;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  background-color: rgba(253, 202, 64, 1);
  &:hover {
    background-color: rgba(252, 187, 10, 1);
  }
  ${mobile({ width: "240px", fontSize: "14px" })}
`;
const Partners = styled.div`
  display: flex;
  margin-top: 50px;
  align-items: center;
  vertical-align: center;
`;
const PartnerText = styled.div`
  border-right: 2px solid rgba(0, 21, 36, 0.1);
  height: 34px;

  p {
    color: rgba(126, 132, 136, 1);
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 1px;
    padding-right: 13px;
  }
`;
const PartnerLogo = styled.img`
  width: 66px;
  height: 66px;
  margin-left: 3px;
`;
export default Investment;
