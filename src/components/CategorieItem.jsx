import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  /* flex: 1; */
  margin-right: 0.8rem;
  margin-bottom: 0.8rem;
  height: 50rem;
  width: 37rem;
  position: relative;
  ${mobile({ height: "25vh" })}

`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ objectPosition: "100% 20%" })}

`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: #fff;
  margin-bottom: 3rem;
  text-transform: uppercase;
  text-shadow: 0.5rem 0.3rem 0.4rem rgba(0, 0, 0, 0.7);
`;
const Button = styled.button`
  border: none;
  padding: 1rem 2rem;
  cursor: pointer;
  color: #3f3c3c;
  background-color: #d3d3d3;
  font-weight: 600;

  &:hover {
    background-color: #b8b7b7;
  }
`;

const CategorieItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.Image} />
      <Info>
        <Title>{item.title}</Title>
        <Button>Shop Now</Button>
      </Info>
    </Container>
  );
};

export default CategorieItem;
