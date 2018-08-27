import React, {Component} from "react";
import { Transition } from 'react-transition-group';
import styled from "styled-components";
import { Fade  } from 'react-slideshow-image';

import hp01 from "../pages/images/homepage/small/hp01small.jpg";
import hp02 from "../pages/images/homepage/small/hp02small.jpg";
import hp03 from "../pages/images/homepage/small/hp03small.jpg";
import hp04 from "../pages/images/homepage/small/hp04small.jpg";
import hp05 from "../pages/images/homepage/small/hp05small.jpg";
import hp06 from "../pages/images/homepage/small/hp06small.jpg";
import hp07 from "../pages/images/homepage/small/hp07small.jpg";


const imgs = [hp01, hp02, hp03, hp04, hp05, hp06, hp07]

const SmallImages = () => {
    return (
        <ImgWrapper>
            <Fade
                images={imgs}
                duration={5000}
                transitionDuration={1000}
            />
        </ImgWrapper>
    )
}

export default SmallImages;

const ImgWrapper = styled.div`
   max-height: 185px;
   background-color: ${props => props.theme.green};
   text-align: center;
   @media (max-width: ${props => props.theme.mediumDevice}) {
    height: 100px;
   }
   img {
       max-height: 185px;
   }
 `