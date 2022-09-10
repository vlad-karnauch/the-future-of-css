import { createBoard } from '@wixc3/react-board';
import { StyledComponentsButton } from '../../../components/styled-components-button/styled-components-button';

export default createBoard({
    name: 'Styled Components',
    Board: () => <StyledComponentsButton>Styled Components Button</StyledComponentsButton>,
});
