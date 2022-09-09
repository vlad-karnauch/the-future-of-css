import { createBoard } from '@wixc3/react-board';
import { CSSModulesButton } from '../../../components/css-modules-button/css-modules-button';

export default createBoard({
    name: 'CSS Modules',
    Board: () => <CSSModulesButton>CSS Modules Button</CSSModulesButton>
});
