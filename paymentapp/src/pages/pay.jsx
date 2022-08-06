import styled from "styled-components";
import StripeCheckout from "react-stripe-checkout";
import { useState } from "react"; 

const KEY =
  "pk_test_51LLVhsSIDQwJSp7amh6pfmVZbX9mGSrAsvDggOl30AGF2urSCI3YrdjqyBYblCa8bKdElSVj28Bn8ZzqU0k3sOi500vpfEk6KX";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  border: none;
  padding: 1rem 3rem;
  font-size: 1.9rem;
  color: white;
  background-color: black;
  letter-spacing: 1px;
  cursor: pointer;
`;
const Pay = () => {
  const [product, setproduct] = useState({

    name: "Lama shop",
    price : 10

  })

  const onToken = token =>{
    const body = {
      token,
      product
    }
    const headers = {
      "Content-Type": "application/json"
    }

    return fetch('http://localhost:8080/api/stripe/payment',{
      method : "POST",
      headers : headers,
      body : JSON.stringify(body)
    }).then(response => {
      console.log("Response ", response);
      // const {status} = response;
      // console.log("STATUS ",status);
    }).catch(err => console.log(err))

  }

  return (
    <Container>
      <StripeCheckout
        token={onToken}
        stripeKey={KEY}
        name="LAMA Shop"
        image="https://res.cloudinary.com/dfpj56zfr/image/upload/v1657954731/unnamed_h5xrie.png"
        billingAddress
        shippingAddress
        description="your total is $20"
        amount={product.price*100}
      >
        <Button>Pay</Button>
      </StripeCheckout>
    </Container>
  );
};

export default Pay;
