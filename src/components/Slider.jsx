import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { sliderItems } from "../data";
import { useState } from "react";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  /* background-color :  #FF7F50; */
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: #fff7f7;
  border-radius: 50%;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "Left" && "1rem"};
  right: ${(props) => props.direction === "Right" && "1rem"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 5rem;
`;
const Title = styled.h1`
  font-size: 7rem;
`;
const Desc = styled.p`
  margin: 5rem 0;
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 1rem;
  font-size: 2rem;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  let n = sliderItems.length - 1;
  console.log(n);
  const handleclick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : n);
    } else {
      setSlideIndex(slideIndex < n ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="Left" onClick={() => handleclick("left")}>
        <ArrowLeftOutlined style={{ fontSize: "2rem" }} />
      </Arrow>

      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.image} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.tittle}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>

      <Arrow direction="Right" onClick={() => handleclick("right")}>
        <ArrowRightOutlined style={{ fontSize: "2rem" }} />
      </Arrow>
    </Container>
  );
};

export default Slider;
