import React from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import MainNav from "../../components/navbar/MainNav";
import Footer from "../../components/footer/Footer";
import { ParaStyled, OuterWrapper } from "./homeStyled";

const Index = () => {
  return (
    <OuterWrapper>
      <MainNav />
      <Container maxWidth="lg" className="wrapper">
        <ParaStyled>
          <span className="user-greet-heading">Welcome , John Doe !</span>
          <br />
          You can confirm your account detail through the link below:{" "}
          <Link to="/password">CONFIRM YOUR ACCOUNT</Link>
          <br />
          <span className="highlight">
            {" "}
            Regards, <br /> The NIMCET 2020 Team
          </span>
        </ParaStyled>
      </Container>
      <Footer />
    </OuterWrapper>
  );
};

export default Index;
