import styled from "styled-components";
import { CategorieData } from "../data";
import CategorieItem from "./CategorieItem";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Categories = () => {
  return (
    <Container>
      {CategorieData.map((item) => (
        <CategorieItem item={item} key = {item.id}/>
      ))}
    </Container>
  );
};

export default Categories;
