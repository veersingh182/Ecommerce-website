import styled from "styled-components";
import {
  ShoppingCartOutlined,
  SearchOutlined,
  FavoriteBorderOutlined,
} from "@material-ui/icons";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  align-items: center;
  justify-content: center;
  transition : all 0.5s ease;
  cursor: pointer;

`;

const Container = styled.div`
  flex: 1;
  margin: 0.5rem;
  min-width: 28rem;
  height: 35rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity : 1;
  }
`;
const Circle = styled.div`
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
`;
const Image = styled.img`
  height: 85%;
  object-fit: cover;
  z-index: 2;
`;

const Icon = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.7rem;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined style={{ fontSize: "2rem" }} />
        </Icon>
        <Icon>
          <SearchOutlined style={{ fontSize: "2rem" }} />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined style={{ fontSize: "2rem" }} />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
