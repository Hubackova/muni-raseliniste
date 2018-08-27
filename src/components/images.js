import React, {Component} from "react";
import { Transition } from 'react-transition-group';
import styled from "styled-components";
import { Fade  } from 'react-slideshow-image';

import hp01 from "../pages/images/homepage/hp01.jpg";
import hp02 from "../pages/images/homepage/hp02.jpg";
import hp03 from "../pages/images/homepage/hp03.jpg";
import hp04 from "../pages/images/homepage/hp04.jpg";
import hp05 from "../pages/images/homepage/hp05.jpg";
import hp06 from "../pages/images/homepage/hp06.jpg";
import hp07 from "../pages/images/homepage/hp07.jpg";
import hp08 from "../pages/images/homepage/hp08.jpg";
import hp09 from "../pages/images/homepage/hp09.jpg";
import hp10 from "../pages/images/homepage/hp10.jpg";

const imgs = [hp01, hp02, hp03, hp04, hp05, hp06, hp07, hp08, hp09, hp10] //do props

const Images = () => {
    return (
        <ImgWrapper className='indexImg'>
            <Fade
                images={imgs}
                duration={5000}
                transitionDuration={1000}
            />
        </ImgWrapper>
    )
}

export default Images;

const ImgWrapper = styled.div`
   height: 250px;
   background-color: ${props => props.theme.green};
   text-align: center;
   @media (max-width: ${props => props.theme.mediumDevice}) {
    height: 150px;
   }
 `
