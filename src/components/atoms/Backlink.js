import React from 'react';
import styled from 'styled-components'

const Backlink = ({handleOnclick, ...props}) => {
    return (
        <BackLink onClick={(e) => handleOnclick(e)} {...props}><span>←</span>Back</BackLink>
    );
};

export default Backlink;

const BackLink = styled.div`
  cursor: pointer;
  margin-left: 7px;
  &:hover {
    margin-left: 0;
    span {
      margin-right: 7px;
      font-weight: bold;
    }
  }
  span {
    margin-right: 3px;
  }
`