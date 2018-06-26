import React, {Fragment} from 'react'
import styled from "styled-components";

import mainLogo from "../pages/images/mainLogo.png";
import Images from "../components/images";
import HeaderTop from "../components/headerTop";
import {withLocalization} from "./localization.context";

const Header = ({language}) => {
    return (
    <Fragment>
        <HeaderTop />
        <SubContainer>
            <LogoText>
                <ImgWrapper><img style={{maxHeight: '180px', marginRight: '0.6em'}} src={mainLogo} alt='mainLogo'/></ImgWrapper>
                {language.language.mainPage.mainHeader}
            </LogoText>
            <div style={{minWidth: 320, flex: 3}}><Images /></div>
        </SubContainer>
    </Fragment>
    )
}

export default withLocalization(Header);

// const Logo = styled.img`
//     height: 150px;
//     position: absolute;
//     bottom: -50px;
//     left: 13vw;
//     @media (max-width: 1024px) {
//       left: 0px;
//       top: 0px;
//       height: 130px;
//     }
// `;

const SubContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: black;
`;

const ImgWrapper = styled.div`
    background-color: black;
`;

const LogoText = styled.h1`
    flex: 2;
    display: flex;
    text-transform: uppercase;
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.black};
    justify-content: center;
    align-items: center;
    padding: 0.5em;
    margin: 0;
    min-width: 320px;
    @media (max-width: ${props => props.theme.mediumDevice}) {
      font-size:1.3em;
      flex-wrap: wrap;
    }
`;


