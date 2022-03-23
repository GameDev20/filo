import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  color:#DD6554;
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  color:#DD6554;
  font-size: 17px;
  font-weight:bold;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  color:#DD6554;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  color:#DD6554;
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  color:#DD6554;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  color:#DD6554;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 17px;
  font-weight:bold;
  cursor: pointer;
  margin-left: 25px;
  color:#DD6554;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 18 }} />
          </SearchContainer>
        </Left>
        <Center>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Logo>Fi|o</Logo>
          </Link>
        </Center>
        <Right>
        <Link to="/register" style={{ textDecoration: 'none' }}>
          <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to="/login" style={{ textDecoration: 'none' }}>
          <MenuItem>SIGN IN</MenuItem>
          </Link>
          <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
