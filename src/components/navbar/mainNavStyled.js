import styled from "styled-components";

export const NavStyled = styled.nav`
  background-color: #009688;
  color: #fff;
  display: flex;
  justify-content: center;
  max-height: 100%;
  align-items: center;
  flex-direction: column;

  h2 {
    font-size: 2rem;
    font-weight: 900;
    line-height: 0.8rem;

    @media only screen and (max-width: 768px) {
      font-size: 1.5rem;
      font-weight: 500;
    }
  }

  p {
    font-size: 1.5rem;
    font-weight: 900;
    @media only screen and (max-width: 768px) {
      font-size: 1.2rem;
      font-weight: 500;
    }
  }
`;
