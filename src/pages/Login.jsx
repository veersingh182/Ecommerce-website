import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(222, 222, 222, 0.7),
      rgba(222, 222, 222, 0.7)
    ),
    url("https://res.cloudinary.com/dfpj56zfr/image/upload/v1656331835/ecommerce%20/pexels-juan-mendez-1536619_nfc8zx.jpg")
      center;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 2rem;
  background-color: #fff;
  ${mobile({ width: "80%" })}

`;

const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 1rem 0;
  padding: 1rem;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 1.5rem 2rem;
  background-color: #008080;
  color: #fff;
  margin: 2rem 0;
`;

const Link = styled.a`
  margin: 1rem 0;
  font-size: 1.2rem;
  text-decoration: underline;
  cursor: pointer;
`;
const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />

          <Button>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
