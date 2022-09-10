import { createBoard } from '@wixc3/react-board';
import { CSSModulesCancel } from '../../../components/css-modules-cancel/css-modules-cancel';

export default createBoard({
    name: 'CSS Modules Composition',
    Board: () => <CSSModulesCancel>CSS Modules Cancel</CSSModulesCancel>
});
