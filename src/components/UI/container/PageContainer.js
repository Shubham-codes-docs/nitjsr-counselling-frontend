import React from "react";
import Container from "@mui/material/Container";

const PageContainer = (props) => {
  return (
    <>
      <Container maxWidth="xl" disableGutters={true}>
        {props.children}
      </Container>
    </>
  );
};

export default PageContainer;
