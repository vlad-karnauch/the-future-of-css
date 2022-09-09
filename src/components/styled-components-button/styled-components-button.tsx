import React from 'react';
import styled from 'styled-components';

export interface StyledComponentsButtonProps {
    children?: React.ReactNode;
}

const Button = styled.button`
    background-color: #FAFBFC;
    border: 2px solid rgba(27, 31, 35, 0.15);
    border-radius: 8px;
    color: #24292E;
    font-size: 1rem;
    padding: 18px;
    transition-propert: color, border-color;
    transition-duration: 0.7s;
    cursor: pointer;
    &:hover {
        border-color: #405cf5;
        color: #405cf5;
    } 
`;


export const StyledComponentsButton: React.FC<StyledComponentsButtonProps> = ({ children }) => (
    <Button>{children}</Button>
);