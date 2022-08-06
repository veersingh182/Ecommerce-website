import styled from "styled-components";
import Navbar from "../components/navbar";
import Announcements from "../components/announcements";
import Footer from "../components/Footer";
import { Remove, Add } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 2rem;
  ${mobile({ padding: "1rem" })}
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
`;
const TopButton = styled.button`
  padding: 1rem;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;

const TopText = styled.span`
  margin: 0 1rem;
  text-decoration: underline;
`;

const Bottom = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  ${mobile({ flexDirection : 'column'})}

`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection : 'column'})}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 20rem;
  height: 25rem;
  object-fit: cover;
  margin: 2rem;
`;
const Detils = styled.div`
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  border: ${(props) => props.color === "white" && "1px solid black"};
  box-shadow: 0 0 1.3rem rgba(0, 0, 0, 0.2);
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const ProductAmount = styled.div`
  font-size: 2.4rem;
  margin: 0.5rem;
  ${mobile({ margin : '.5rem 1.5rem'})}

`;

const ProductPrice = styled.div`
  font-size: 3rem;
  font-weight: 200;
  ${mobile({ marginBottom: '2rem'})}

`;

const Hr = styled.hr`
  background-color: #d4d4d4;
  border: none;
  height: 1px;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid #d3d3d3;
  border-radius: 1rem;
  padding: 2rem;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 3rem 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "2.4rem"};
`;
const SummeryItemText = styled.span``;
const SummeryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 2rem;
  background-color: black;
  color: white;
  font-weight: 500;
  font-size: 2rem;
  cursor: pointer;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPING</TopButton>
          <TopTexts>
            <TopText>Shoping Bag (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://res.cloudinary.com/dfpj56zfr/image/upload/v1656664211/ecommerce%20/products/15_dd63g5_copy_xvhsns.png" />
                <Detils>
                  <ProductName>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>Id:</b> 567897658
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Detils>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>

                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>

            <Hr />

            <Product>
              <ProductDetail>
                <Image src="https://res.cloudinary.com/dfpj56zfr/image/upload/v1656076765/ecommerce%20/bPNG_vnorrb.png" />
                <Detils>
                  <ProductName>
                    <b>Product:</b> Printed Shirt
                  </ProductName>
                  <ProductId>
                    <b>Id:</b> 567897658
                  </ProductId>
                  <ProductColor color="white" />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Detils>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>

                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMERY</SummaryTitle>
            <SummaryItem>
              <SummeryItemText>Subtotal</SummeryItemText>
              <SummeryItemPrice>$ 90</SummeryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummeryItemText>Estimated Shipping</SummeryItemText>
              <SummeryItemPrice>$ 5.90</SummeryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummeryItemText>Subtotal</SummeryItemText>
              <SummeryItemPrice>$ -5.90</SummeryItemPrice>
            </SummaryItem>

            <SummaryItem type="total">
              <SummeryItemText>Total</SummeryItemText>
              <SummeryItemPrice>$ 90</SummeryItemPrice>
            </SummaryItem>
            <Button>Checkout Now</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
