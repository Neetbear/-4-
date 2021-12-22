import React from "react";
import Styled from "styled-components";

const Circle = Styled.div`
    width: 5rem;
    height: 5rem;
    background: ${props => props.color || 'purple'};
    border-radius: 50%;
    text-align: center;
    display:table-cell;
    vertical-align:middle;
`;

export default Circle;