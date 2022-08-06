import styled from "styled-components";
import Announcements from "../components/announcements";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import Newsletter from "../components/Newsletter";
import { Remove, Add } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  padding: 5rem;
  ${mobile({padding:'1rem', flexDirection : 'column'})}
`;
const ImageContainer = styled.div`
  flex: 1;
  ${mobile({ marginBottom : '3rem'})}
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  object-position: 100% 10%;
  ${mobile({ height : '40vh',  objectPosition: "100% 10%"})}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 5rem;
  ${mobile({ padding : '0 1rem'})}
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 2rem 0;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 4rem;
`;
const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin: 3rem 0;
  ${mobile({ width : '100%'})}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 2rem;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 0.5rem;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 1rem;
  padding: 5px;
  border-radius: 5%;
  border: 1px solid lightgrey;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width : '100%'})}

`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 3rem;
  height: 3rem;
  border-radius: 1rem;
  border: 1px solid #008080;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;

const Button = styled.button`
  border: 2px solid #008080;
  padding: 1.5rem;
  background-color: #fff;
  cursor: pointer;
  font-weight: 500;
  &:hover{
    background-color : #f8f4f4
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <ImageContainer>
          <Image src="https://res.cloudinary.com/dfpj56zfr/image/upload/v1656323853/ecommerce%20/product%20Items/Denim_Jumpsuit_nz5hw6.jpg" />
        </ImageContainer>

        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
            excepturi est tempora rem consectetur, hic ex quibusdam quis fugiat
            nisi illo laborum asperiores vero optio aliquid. Quia tenetur eos
            pariatur. nisi illo laborum asperiores vero optio aliquid. Quia
            tenetur eos pariatur.
          </Desc>
          <Price>$ 20</Price>

          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="Black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>

            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Remove style={{ fontSize: "2rem" }} />
              <Amount>1</Amount>
              <Add style={{ fontSize: "2rem" }} />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
