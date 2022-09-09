import type React from 'react';
import { classes } from './stylable-button.st.css'

export interface StylableButtonProps {
    children?: React.ReactNode;
}

export const StylableButton: React.FC<StylableButtonProps> = ({ children }) => (
    <button className={classes.root}>{children}</button>
);