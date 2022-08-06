import styled from "styled-components";
import { PopularProducts } from "../data";
import Product from "./product";

const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-wrap : wrap;
  justify-content : space-between;
`;

const Products = () => {
  return (
    <Container>
      {PopularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
