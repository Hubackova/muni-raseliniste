import React, {Fragment} from 'react'
import styled from "styled-components";

import mainLogo from "../pages/images/mainLogo.png";
import Images from "../components/images";
import HeaderTop from "../components/headerTop";
import {withLocalization} from "./localization.context";
import logo from "../pages/images/logo2.png";

const Header = ({language}) => {
    return (
    <Fragment>
        <HeaderTop />
        <SubContainer>
            <LeftSide>
                <LeftSideWrapper><MainLogo src={mainLogo} alt='mainLogo'/></LeftSideWrapper>
                <LeftSideWrapper><LogoText>{language.language.mainPage.mainHeader}</LogoText></LeftSideWrapper>
                <LeftSideWrapper><Logo src={logo} alt='logo'/></LeftSideWrapper>
            </LeftSide>
            <RightSide style={{}}><Images /></RightSide>
        </SubContainer>
    </Fragment>
    )
}

export default withLocalization(Header);

const SubContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: black;
    @media (max-width: 1366px) {
      flex-direction: column;
    }
`;

const LeftSide = styled.div`
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: black;
`;

const LeftSideWrapper = styled.div`
    justify-content: center;
`;

const RightSide = styled.div`
    background-color: black;
    flex: 1;
`;

const LogoText = styled.h1`
    text-transform: uppercase;
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.black};
    margin: 30px 0;
    @media (max-width: ${props => props.theme.mediumDevice}) {
      font-size:1.3em;
      padding: 0;
    }
`;

const Logo = styled.img`
    max-width: 160px;
    margin-left: 20px;
    @media (max-width: 670px) {
      display: none;
    }
`;

const MainLogo = styled.img`
    max-width: 180px;
    @media (max-width: 670px) {
      margin: 0;
    }
`;