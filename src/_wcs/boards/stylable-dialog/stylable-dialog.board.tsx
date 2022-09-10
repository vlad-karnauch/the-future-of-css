import { createBoard } from '@wixc3/react-board';
import { StylableDialog } from '../../../components/stylable-dialog/stylable-dialog';

export default createBoard({
    name: 'Stylable Dialog',
    Board: () => (
        <StylableDialog
            img="https://stylable.io/img/branding/logo/SVG/96-logo-OnlySymbol.svg"
            title="STYLABLE"
            body="/* is CSS for Components */"
            button={<a href="https://stylable.io/docs/getting-started/intro">Get Started</a>}
        />
    ),
});
