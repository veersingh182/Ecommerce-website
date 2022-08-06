import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Button = styled.button`
  border: none;
  padding: 1rem 3.7rem;
  font-size: 1.8rem;
  color: white;
  background-color: #008080;
  letter-spacing: 1px;
  margin: 2rem 0;
  font-weight: 600;
`;

const Logo = styled.img`
  width: 12rem;
`;
const Para = styled.p`
  width: 27rem;
  text-align: center;
`;
const Success = () => {
  return (
    <Container>
      <Logo src="https://res.cloudinary.com/dfpj56zfr/image/upload/v1657954731/unnamed_h5xrie.png" />
      <Button>Successful!</Button>
      <Para>Your Order is being Prepared. Thanks for choosing LAMA shop.</Para>
    </Container>
  );
};
export default Success;
