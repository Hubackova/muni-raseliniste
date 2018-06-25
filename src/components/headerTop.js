import React, {Fragment} from 'react'
import styled from "styled-components";

import logo from "../pages/images/logo.png";
import czFlag from "../pages/images/cz-icon.png";
import ukFlag from "../pages/images/uk-icon.png";
import Navigation from "./navigation";
import { LocalizationConsumer } from './localization.context';

const FlagCZ = () => (
  <LocalizationConsumer>
    {({ changeToCz }) => (
      <Flag
       src={czFlag}
       onClick={() => changeToCz()}
      />
    )}
  </LocalizationConsumer>
);
const FlagEN = () => (
  <LocalizationConsumer>
    {({ changeToEn }) => (
      <Flag
       src={ukFlag}
       onClick={() => changeToEn()}
      />
    )}
  </LocalizationConsumer>
);

const HeaderTop = () => {
    return (
        <Container>
            <FlagEN />
            <FlagCZ />
            <Logo src={logo}/>
            <Navigation/>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    position: relative;
    min-height: 150px;
    @media (max-width: ${props => props.theme.mediumDevice}) {
      min-height: 40px;
      padding-bottom: 10px;
    }
`;

const Flag = styled.img`
    height: 48px;
    margin: 2px;
    align-self: flex-end;
`;

const Logo = styled.img`
    height: 150px;
    position: absolute;
    bottom: -50px;
    left: 13vw;
    @media (max-width: ${props => props.theme.largeDevice}) {
      left: 0px;
      top: 0px;
      height: 110px;
    }
    @media (max-width: ${props => props.theme.mediumDevice}) {
      display: none;
    }
`;

export default HeaderTop;
