import { createBoard } from '@wixc3/react-board';
import styled from 'styled-components';

const Button = styled.button`
    background-color: #FAFBFC;
    border: 2px solid rgba(27, 31, 35, 0.15);
    border-radius: 8px;
    color: #24292E;
    font-size: 1rem;
    padding: 18px;
    transition border-color 0.7s;
    &:hover {
        border-color: #405cf5;
        color: #405cf5;
    } 
`;

export default createBoard({
    name: 'Styled Components',
    Board: () => <Button>Styled Components Button</Button>
});
