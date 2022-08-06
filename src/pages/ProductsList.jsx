import styled from "styled-components";
import Navbar from "../components/navbar";
import Announcements from "../components/announcements";
import Products from "../components/products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Conatiner = styled.div``;

const Title = styled.h1`
  margin: 2rem;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 2rem;
  ${mobile({ margin: "0 2rem", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 2rem;
  font-weight: 600;
  margin-right: 2rem;
  ${mobile({ marginBottom: "1rem", marginRight: "0" })}
`;

const Select = styled.select`
  padding: 0.6rem 1rem;
  margin-right: 2rem;
  border-radius: 0;
  border: 1px solid #d3d3d3;
  ${mobile({ margin: "1rem 0" })}
`;
const Option = styled.option``;

const ProductsList = () => {
  return (
    <Conatiner>
      <Navbar />
      <Announcements />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>

        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Conatiner>
  );
};

export default ProductsList;
