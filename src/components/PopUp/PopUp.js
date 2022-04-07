import React, { useRef, useEffect, useCallback } from "react";

import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { useSpring, animated } from "react-spring";
import { mobile } from "./../../responsive";

const PopUp = ({ showModal, setShowModal, item, donation }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <div>
                <ModalImg src={item.image} alt="camera" />
                <ModalLogo src={item.logo} height={100} alt="camera" />
              </div>
              <ModalContent>
                <h1>Thank You!</h1>
                <p>For Donating...</p>
                <button>BDT {donation}</button>
              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((toggle) => !toggle)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

const Background = styled.div`
  z-index: 100;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  max-width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;

  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  ${mobile({
    gridTemplateColumns: "1fr",
    color: "#fff",
  })}
`;

const ModalImg = styled.img`
  width: 100%;
  height: 60%;
  border-radius: 11px 0 0 10px;
  background: #fff;
  ${mobile({ height: "205px", borderRadius: "10px" })}
`;
const ModalLogo = styled.img`
  width: 80%;
  height: 90px;
  margin-top: 30px;
  border-radius: 10px 0 0 10px;
  background: #fff;
  ${mobile({ height: "60px" })}
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    height: 80px;
    width: 180px;
    font-size: 26px;
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
    ${mobile({ height: "60px" })}
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  ${mobile({
    backgroundColor: "rgba(236, 46, 205, 0.5)",
    borderRadius: "50px",
  })}
`;

export default PopUp;
