import React from "react";
import styled from "styled-components";
import { Fade  } from 'react-slideshow-image';

import hp01 from "../../images/homepage/small/hp01small.jpg";
import hp02 from "../../images/homepage/small/hp02small.jpg";
import hp03 from "../../images/homepage/small/hp03small.jpg";
import hp04 from "../../images/homepage/small/hp04small.jpg";
import hp05 from "../../images/homepage/small/hp05small.jpg";
import hp06 from "../../images/homepage/small/hp06small.jpg";
import hp07 from "../../images/homepage/small/hp07small.jpg";


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
   background-color: ${props => props.theme.green};
   text-align: center;
   @media (max-width: ${props => props.theme.extraLargeDevice}) {
    display: none;
   }
 `