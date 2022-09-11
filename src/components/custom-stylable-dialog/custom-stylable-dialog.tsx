import type React from 'react';
import { StylableDialog } from '../stylable-dialog/stylable-dialog';
import { classes } from './custom-stylable-dialog.st.css';

export const CustomStylableDialog: React.FC = () => {
    return (
        <StylableDialog
            className={classes.customDialog}
            img="https://stylable.io/img/branding/logo/SVG/96-logo-OnlySymbol.svg"
            title="STYLABLE"
            body="/* is CSS for Components */"
            button={<a href="https://stylable.io/docs/getting-started/intro">Get Started</a>}
        />
    );
};
