import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import {ThemeProvider} from 'styled-components';


import Header from "./header";
import FooterContent from "./footer";
import {LocalizationProvider, withLocalization} from "../components/localization.context";

const blueTheme = {
  main: '#0868ac',
  secondary: '#43a2ca',
  terciary: '#a8ddb5',
  grey: '#969696',
  white: 'white',
  black: 'black',
  mediumDevice: '768px',
  largeDevice: '1024px'
};

export default withLocalization(({ children, language }) =>
 <ThemeProvider theme={blueTheme}>
   <LocalizationProvider>
    <Container>
      <Header />
      <Main>{children()}</Main>
      <footer><FooterContent/></footer>
    </Container>
    </LocalizationProvider>
  </ThemeProvider>)

const Container = styled.div`
    min-height: 100%;
    display: flex;
    flex-direction: column;
`;

const Main = styled.main`
    flex: 1 0;
    padding: 20px;
    margin: 0 auto;
`;

