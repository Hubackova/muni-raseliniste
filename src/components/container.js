import React from 'react'
import styled from "styled-components";

const Container = ({children}) => {
    return (
    <ContainerWrapper>
        {children}
    </ContainerWrapper>
    )
}

const ContainerWrapper = styled.div`
    width: 85ch;
    margin: 0 auto;
    @media (max-width: ${props => props.theme.mediumDevice}) {
        width: 100%;
    }
`;

export default Container;
