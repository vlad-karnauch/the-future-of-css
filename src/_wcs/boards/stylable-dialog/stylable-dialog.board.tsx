import { createBoard } from '@wixc3/react-board';
import { CustomStylableDialog } from '../../../components/custom-stylable-dialog/custom-stylable-dialog';

export default createBoard({
    name: 'Stylable Dialog',
    Board: () => <CustomStylableDialog />,
});
