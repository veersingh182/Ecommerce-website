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
  width: 40%;
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
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 2rem 1rem 0 0;
  padding: 1rem;
`;

const Agreement = styled.span`
  font-size: 1.2rem;
  margin: 2rem 0;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 1.5rem 2rem;
  background-color : #008080;
  color : #fff;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="Name" />
          <Input placeholder="Last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />

          <Agreement>
            By creating an account. I consent to th processing of my personal
            data in accordence with th <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
