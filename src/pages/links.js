import React, {Fragment} from "react"
import PropTypes from 'prop-types';
import styled from "styled-components";

const links = [
   {name: "Česká limnologická společnost", link: "http://www.limnospol.cz"},
]

const Links = props => {
    const linksList = links.map(i => {
        return <li key={i.name}><A href={i.link}>{i.name}</A></li>;
    })
    return (
    <Fragment>
        <h1> Odkazy </h1>
    {linksList}
    </Fragment>
    );
};

Links.propTypes = {

};

export default Links;

const A = styled.a`
        color: #333;
`;