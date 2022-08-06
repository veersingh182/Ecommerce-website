import styled from "styled-components";
import { Send } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 60vh;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 7rem;
  margin-bottom: 2rem;
`;
const Desc = styled.div`
  font-size: 2.4rem;
  margin-bottom: 2rem;
  font-weight: 300;
  ${mobile({ textAlign: "center" })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  border: 1px solid #d2d2d2;
  ${mobile({ width: "80%" })}

`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 2rem;
`;

const Button = styled.button`
  display: flex;
  border: none;
  color: #fff;
  background-color: #008080;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your Email" />
        <Button>
          <Send style={{ fontSize: "2rem" }} />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
