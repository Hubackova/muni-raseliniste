import React, {Fragment} from 'react'
import styled from "styled-components";

import Images from "./images";
import SmallImages from "./SmallImages";
import HeaderTop from "./headerTop";
import {withLocalization} from "./localization.context";
import logo from "../pages/images/logo2.png";
import mainLogo from "../pages/images/mainLogo.png";

const Header = ({language, isIndex}) => {
    return (
    <Fragment>
        <HeaderTop />
        <SubContainer>
            <LeftSide>
                <LeftSideWrapper><MainLogo src={mainLogo} alt='mainLogo'/></LeftSideWrapper>
                <LeftSideWrapper>
                    <LogoText>{language.language.mainPage.mainHeader}<br/></LogoText>
                    <LogoTextSmall>{language.language.mainPage.muni}</LogoTextSmall>
                </LeftSideWrapper>
                <LeftSideWrapper><Logo src={logo} alt='logo'/></LeftSideWrapper>
            </LeftSide>
            {isIndex && <RightSide style={{}}><Images /></RightSide>}
            {!isIndex && <RightSide style={{}}><SmallImages /></RightSide>}
        </SubContainer>
    </Fragment>
    )
}

export default withLocalization(Header);

const SubContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: ${props => props.theme.green};
    @media (max-width: ${props => props.theme.extraLargeDevice}) {
      flex-direction: column;
    }
`;

const LeftSide = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.green};
    @media (max-width: 600px) {
      flex-wrap: wrap;
    }
`;

const LeftSideWrapper = styled.div`
    justify-content: center;
    text-align: center;
`;

const RightSide = styled.div`
    background-color: ${props => props.theme.green};
    flex: 1;
    text-align: center;
    @media (min-width: ${props => props.theme.extraLargeDevice}) {
      padding-left: 50px;
    }
`;

const LogoText = styled.h1`
    text-transform: uppercase;
    color: ${props => props.theme.white};
    background-color: inherit;
    margin: 30px 0 0 0;
`;

const LogoTextSmall = styled.h2`
    color: ${props => props.theme.white};
    background-color: inherit;
    margin: 0;
`;

const Logo = styled.img`
    max-width: 7em;
    margin-left: 20px;
    @media (max-width: 670px) {
      display: none;
    }
`;

const MainLogo = styled.img`
    max-width: 8em;
`;