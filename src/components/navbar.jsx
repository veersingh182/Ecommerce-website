import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 6rem;
  ${mobile({ height: "5rem" })}
`;

const Wrapper = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "1rem 0" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 1.4rem;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid #d9d9d9;
  display: flex;
  align-items: center;
  margin-left: 2.5rem;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "5rem" })}
`;

const Center = styled.div`
  flex: 1;
`;
const Logo = styled.h1`
  font-weight: 800;
  text-align: center;
  ${mobile({ fontSize: "2.4rem" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: "2", justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 1.4rem;
  cursor: pointer;
  margin-left: 2.5rem;
  ${mobile({ fontSize: "1rem", marginLeft: "1rem" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="search"></Input>
            <Search style={{ fontSize: "1.6rem", color: "#a4a0a0" }} />
          </SearchContainer>
        </Left>

        <Center>
          <Logo>LAMA.</Logo>
        </Center>

        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>LOGIN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
