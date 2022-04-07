import React from "react";
import styled from "styled-components";

// import Hero from "../../Images/Hero.png"
import HeroImage from "../../Images/HeroImage.jpeg";
import { mobile, tablet, laptop } from "./../../responsive";

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <HeroText>
          "Those who in charity spend of their goods by night and by day, in
          secret and in public, have their reward with their Lord: on them shall
          be no fear, nor shall they grieve"
          <br />
          <span>(2:274)</span>
        </HeroText>
      </Container>
    </HeroSection>
  );
};

const HeroSection = styled.div`
  height: 577px;
  position: relative;
  background-image: url(${HeroImage});
  background-position: center;
  /* background-attachment: fixed; */
  background-repeat: no-repeat;
  background-size: cover;

  margin: auto;
  display: flex;
  align-items: center;
`;
export const Container = styled.div`
  position: relative;
  width: 1140px;
  margin: auto;
  ${laptop({ width: "940px" })}
  ${tablet({ width: "530px" })}
  ${mobile({ width: "290px" })}
`;

const HeroText = styled.div`
  max-width: 830px;
  line-height: 74px;
  font-weight: 300;
  font-style: light;
  text-align: left;
  font-size: 36px;
  span {
    color: #7e8488;
    font-size: 24px;
    ${mobile({ fontSize: "12px" })}
    ${tablet({ fontSize: "16px" })}
    ${laptop({ fontSize: "19px" })}
  }
  ${mobile({
    padding: "10px",
    fontSize: "14px",
    lineHeight: "54px",
  })}
  ${tablet({ fontSize: "20px", maxWidth: "430px" })}
  ${laptop({ fontSize: "24px", maxWidth: "630px" })}
`;

export default Hero;
