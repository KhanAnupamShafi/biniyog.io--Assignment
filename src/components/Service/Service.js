import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { servicesCard } from "../../data";

import { Container } from "../Hero/Hero";
import PopUp from "../PopUp/PopUp";
import { mobile } from "./../../responsive";

const Service = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});
  const [progress, setProgress] = useState({});
  const [percent, setPercent] = useState(0);
  const [percentTwo, setPercentTwo] = useState(0);
  const [donation, setDonation] = useState(0);
  console.log(donation);

  const openModal = (e) => {
    setShowModal((toggle) => !toggle);
    setData(e);
  };

  useEffect(() => {
    setProgress({
      progressOne: percent.toFixed(2),
      progressTwo: percentTwo.toFixed(2),
      peopleOne: Math.floor((percent * 300) / 100),
      peopleTwo: Math.floor((percentTwo * 150) / 100),
    });
  }, [percent, percentTwo]);
  const randomRangeHandler = (id) => {
    let max = 15;
    let i = 1;

    i = i + (Math.random() * (max - i) + 1);
    let num = percent + i;
    let num2 = percentTwo + i;

    setDonation(Math.floor(i * 300));

    if (id === "1") {
      if (num >= 100) {
        setPercent(100);
      }

      if (num < 100) {
        setPercent(percent + i);
      }
    } else if (id === "2") {
      if (num2 >= 100) {
        setPercentTwo(100);
      }

      if (num2 < 100) {
        setPercentTwo(percentTwo + i);
      }
    }
  };

  return (
    <ServiceSection>
      <Container>
        <Title>Ongoing Charity Campaigns</Title>
        <CardContainer>
          {servicesCard.map((item) => (
            <Card key={item.id}>
              <PopUp
                showModal={showModal}
                setShowModal={setShowModal}
                donation={donation}
                item={data}
              />
              <CardImage src={item.image} />
              <CardContent>
                <CardText>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                      viewBox="0 0 16 16"
                    >
                      <path
                        stroke="#7E8488"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 14.667A6.667 6.667 0 108 1.333a6.667 6.667 0 000 13.334z"
                      ></path>
                      <path
                        stroke="#7E8488"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 10.667l-1.61-1.61c-.25-.25-.39-.589-.39-.942V4"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <span>6 days left</span>
                  </div>
                </CardText>
                <CardTitle>{item.title}</CardTitle>
                <CardLogo>
                  <img src={item.logo} alt="charity service" />
                </CardLogo>

                <Progress>
                  <ProgressTotal>
                    {item.id === "1"
                      ? `Iftar for ${progress.peopleOne} `
                      : `Sehri for  ${progress.peopleTwo} `}
                    people
                  </ProgressTotal>
                  <ProgressPercentage>
                    {item.id === "1"
                      ? progress.progressOne
                      : progress.progressTwo}
                    %
                  </ProgressPercentage>
                </Progress>

                <ProgressBar>
                  <CurrentProgress
                    percent={percent}
                    percentTwo={percentTwo}
                    id={item.id}
                  ></CurrentProgress>
                </ProgressBar>
                <CardFooter>
                  <Status>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="29"
                        height="25"
                        fill="none"
                        className="icon"
                        viewBox="0 0 29 25"
                      >
                        <path
                          fill="#7E8488"
                          d="M21.344.016a7.664 7.664 0 00-6.844 4.22A7.664 7.664 0 007.656.017C3.434.016 0 3.45 0 7.672c0 3.6 3.327 6.797 6 9.366l8.11 7.794a.576.576 0 00.781 0l8.11-7.794C25.672 14.468 29 11.271 29 7.672 29 3.45 25.566.016 21.344.016zM2.442 3.954L3.77 2.626a1.839 1.839 0 011.635-.508l.366.067 3.639 1.15a.54.54 0 00.035.01c.4.1.4.228.4.352 0 .03-.005.085-.04.116-.043.037-.157.066-.345.038l-1.385-.228a.578.578 0 00-.644.745l.003.011a.577.577 0 00.143.234l3.338 3.338a.21.21 0 11-.297.296h-.001L8.264 5.908a.578.578 0 10-.815.82l2.352 2.335.904.904a.21.21 0 11-.296.296l-.557-.556-2.865-2.866a.578.578 0 00-.818.817l2.866 2.866a.21.21 0 01-.296.296L6.895 8.978 5.581 7.664a.578.578 0 00-.817.817l1.314 1.313v.001a.209.209 0 01-.148.357.208.208 0 01-.148-.061L2.716 7.025a.563.563 0 00-.034-.031c-.008-.007-.844-.745-.88-1.652-.019-.484.19-.938.64-1.388zm19.91 12.055l-1.329 1.328c-.43.43-.865.641-1.326.641h-.055c-.912-.033-1.652-.875-1.658-.881a.543.543 0 00-.031-.034l-3.066-3.066a.209.209 0 010-.296.21.21 0 01.296 0l1.314 1.314a.576.576 0 00.817 0 .578.578 0 000-.817L16 12.884l-1.843-1.844a.21.21 0 01.296-.296l2.866 2.865a.576.576 0 00.817 0 .578.578 0 000-.817L15.27 9.927l-.556-.557a.21.21 0 01.296-.296l.902.902 2.28 2.295a.576.576 0 00.817.003.578.578 0 00.003-.817l-2.28-2.295-.002-.002a.208.208 0 010-.296.209.209 0 01.296 0l3.338 3.338a.577.577 0 00.236.143l.011.003a.578.578 0 00.744-.645l-.228-1.385c-.029-.188 0-.3.038-.344.03-.036.085-.04.116-.04.124 0 .252 0 .351.4a.526.526 0 00.01.035l1.15 3.638.068.367a1.84 1.84 0 01-.508 1.635zm1.678-1.604a2.954 2.954 0 00-.033-.24l-.067-.362a.579.579 0 00-.023-.103l-1.158-3.662c-.279-1.096-1.039-1.26-1.468-1.26a1.3 1.3 0 00-.992.443c-.158.184-.326.486-.33.942l-2.115-2.116c-.258-.258-.6-.4-.966-.4a1.356 1.356 0 00-1.103.561 1.367 1.367 0 00-1.878.05 1.367 1.367 0 00-.303 1.47 1.367 1.367 0 00-.254 2.13l.89.889a1.373 1.373 0 00-.56 1.102c0 .365.142.707.4.965l3.053 3.053c.135.152.967 1.037 2.13 1.23a289.38 289.38 0 01-4.754 4.523c-.99-.919-3.712-3.462-6.435-6.184-.397-.398-.818-.802-1.264-1.23-2.515-2.418-5.645-5.427-5.645-8.534 0-.229.012-.454.035-.677.303.472.634.782.722.86l3.053 3.053c.258.258.6.4.965.4a1.356 1.356 0 001.102-.56l.89.89c.266.266.615.4.965.4a1.361 1.361 0 001.164-.653 1.364 1.364 0 001.47-.303c.258-.258.4-.601.4-.966 0-.34-.123-.662-.35-.913a1.367 1.367 0 00.161-2.068L9.615 5.017c.457-.003.76-.171.943-.329A1.3 1.3 0 0011 3.697c0-.43-.164-1.189-1.26-1.468l-3.096-.98a6.503 6.503 0 017.296 4.76.578.578 0 001.118 0 6.503 6.503 0 016.285-4.838c3.584 0 6.5 2.916 6.5 6.5 0 2.376-1.829 4.694-3.814 6.734z"
                        ></path>
                      </svg>
                      <span>100 People Contributed</span>
                    </div>
                    <div></div>
                  </Status>
                  <CardBtn
                    onClick={() => {
                      randomRangeHandler(item.id);
                      openModal(item);
                    }}
                  >
                    Support
                  </CardBtn>
                </CardFooter>
              </CardContent>
            </Card>
          ))}
        </CardContainer>
      </Container>
    </ServiceSection>
  );
};

const ServiceSection = styled.div`
  background-color: rgba(180, 237, 210, 0.1);
`;
const Title = styled.h2`
  padding-top: 106px;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  display: inline-block;

  position: relative;
  &:after {
    position: absolute;
    content: "";
    height: 4px;
    bottom: -17px;
    margin: 0 auto;
    left: 0;
    right: 0;
    width: 100%;
    background: rgb(0, 171, 231);
    background: radial-gradient(
      circle at 85%,
      rgba(0, 171, 231, 1) 0%,
      rgba(253, 202, 64, 1) 41%,
      rgba(0, 171, 231, 1) 100%
    );
  }

  ${mobile({ fontSize: "20px" })}
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  ${mobile({ gap: 0, paddingBottom: "90px" })}
  padding-bottom: 204px;
`;
const Card = styled.div`
  /* height: 500px; */
  width: 350px;
  margin-top: 55px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.15);
  ${mobile({ width: "290px", borderRadius: "8px" })}
`;

const CardImage = styled.img`
  height: 167px;
  width: 100%;
  object-fit: cover;
  ${mobile({ objectFit: "none", borderRadius: "8px 8px 0 0" })}
`;

const CardContent = styled.div`
  padding: 0px 14px;
  padding-top: 6px;
  padding-bottom: 27px;
`;
const CardText = styled.div`
  display: inline-block;
  div {
    vertical-align: middle;
    display: inline-block;
    font-size: 12px;
    line-height: 12px;
    color: rgba(126, 132, 136, 1);
    font-weight: 400;
    letter-spacing: 2.5%;
    span {
      margin-left: 6px;
    }
  }
`;

const CardTitle = styled.h2`
  font-size: 24px;
  line-height: 24px;
  font-weight: 500;
  margin-top: 14px;
  color: rgba(0, 21, 36, 1);
  ${mobile({ fontSize: "18px" })}
`;
const CardLogo = styled.div`
  width: 190px;
  height: 52px;
  margin-top: 32px;
  img {
    width: 100%;
    object-fit: cover;
    ${mobile({ objectFit: "contain" })}
  }
  ${mobile({ width: "150px" })}
`;
const Progress = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 12px;
  line-height: 48px;
  color: rgba(126, 132, 136, 1);
  margin-top: 24px;
`;
const ProgressTotal = styled.p``;
const ProgressPercentage = styled.p``;
const ProgressBar = styled.div`
  height: 13px;
  border-radius: 4px;
  transition: width 10s ease-in-out;
  background: rgba(229, 241, 245, 1);
  width: 100%;
`;
const CurrentProgress = styled.div`
  height: 13px;
  width: ${(p) => {
    if (p.id === "1") {
      return p.percent <= 100 ? `${p.percent}%` : `100%`;
    } else if (p.id === "2") {
      return p.percentTwo <= 100 ? `${p.percentTwo}%` : `100%`;
    }
  }};
  border-radius: 4px;
  transition: width 2s ease-in-out;
  background-color: rgba(0, 171, 231, 1);
  overflow: hidden;
`;
const CardFooter = styled.div`
  margin-top: 24px;
  vertical-align: middle;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .icon {
    vertical-align: middle;
  }
  span {
    margin-left: 8px;
    font-weight: 500;
    font-size: 12px;
    color: rgba(126, 132, 136, 1);
    /* line-height: 48px; */
    ${mobile({ fontSize: "9px" })}
  }
`;
const Status = styled.div``;
const CardBtn = styled.button`
  width: 110px;
  height: 46px;
  border: none;
  cursor: pointer;
  border-radius: 4.8px;
  background-color: rgba(253, 202, 64, 1);
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  &:hover {
    background-color: rgba(255, 188, 5, 1);
  }
  ${mobile({ width: "100px", fontSize: "15px" })}
`;

export default Service;
