import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";



const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  color:#DD6554;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer; 
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  margin-top:180px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  color:#DD6554;
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Fi|o</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
          <a href="https://www.facebook.com/" target={"_blank"}><Facebook /></a>
          </SocialIcon>
          <SocialIcon color="E4405F">
             <a href="https://www.instagram.com/filo/" target={"_blank"}> <Instagram /></a>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
      <h5>Copyright Filo 2022 | Developed by Momentos Media</h5>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"20px" , color:"#DD6554"}}/> Doha,Qatar
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"20px" , color:"#DD6554" }}/> +974 3395 3995
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"20px" , color:"#DD6554"}} /> contact@filowear.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
