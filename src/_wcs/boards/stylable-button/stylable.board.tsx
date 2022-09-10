import { createBoard } from '@wixc3/react-board';
import { StylableButton } from '../../../components/stylable-button/stylable-button';

export default createBoard({
    name: 'Stylable',
    Board: () => <StylableButton>Stylable Button</StylableButton>
});
