import React from "react";
import Container from '@mui/material/Container';
import { NavStyled } from "./mainNavStyled";
import PageContainer from "../UI/container/PageContainer";

const MainNav = () => {
  return (
    <>
      <PageContainer>
        <NavStyled>
          <img src="" alt="logo of nmhct" />
          {/* <Container maxWidth="lg">
          </Container> */}
          <h2>NIMCET - 2022</h2>
          <p>NIT MCA COMMON ENTRANCE TEST</p>
        </NavStyled>
      </PageContainer>
    </>
  );
};

export default MainNav;
