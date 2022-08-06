import styled from "styled-components";
import {
  Facebook,
  Instagram,
  Twitter,
  Pinterest,
  Room,
  Phone,
  MailOutlined,
} from "@material-ui/icons";
import { mobile } from "../responsive";


const Conatiner = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}

`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin: 0 2rem;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 2rem 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
`;

const Center = styled.div`
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  margin-left: 4rem;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 3rem;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  width: 80%;
`;
const Listitem = styled.li`
  width: 50%;
  margin-bottom: 1rem;
`;
const Right = styled.div`
  flex: 0.6;
  padding: 2rem;
  ${mobile({ backgroundColor: "#eee" })}

`;
const ContectItem = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 60%;
`;

const Footer = () => {
  return (
    <Conatiner>
      <Left>
        <Logo>LAMA.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          alias ullam rerum maxime itaque. Fugiat cumque quos adipisci, possimus
          illo necessitatibus amet sint architecto dolor animi nobis dolorem
          officia quibusdam.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook style={{ fontSize: "2rem" }} />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram style={{ fontSize: "2rem" }} />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter style={{ fontSize: "2rem" }} />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest style={{ fontSize: "2rem" }} />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>
        <List>
          <Listitem>Home</Listitem>
          <Listitem>Cart</Listitem>
          <Listitem>Men Fashion</Listitem>
          <Listitem>Women Fashion</Listitem>
          <Listitem>Accessories</Listitem>
          <Listitem>My Account</Listitem>
          <Listitem>Order Tracking</Listitem>
          <Listitem>Wishlist</Listitem>
          <Listitem>terms</Listitem>
        </List>
      </Center>

      <Right>
        <Title>Contact</Title>
        <ContectItem>
          <Room style={{ fontSize: "2rem", marginRight: "1rem" }} />
          622 Dixie path , South Tobinchester 98336
        </ContectItem>
        <ContectItem>
          <Phone style={{ fontSize: "2rem", marginRight: "1rem" }} />
          +91 12345 67890
        </ContectItem>
        <ContectItem>
          <MailOutlined style={{ fontSize: "2rem", marginRight: "1rem" }} />
          contact@gmail.com
        </ContectItem>
        <Payment src="https://res.cloudinary.com/dfpj56zfr/image/upload/v1656304974/ecommerce%20/paymentPNG_ol4fw2.png" />
      </Right>
    </Conatiner>
  );
};

export default Footer;
