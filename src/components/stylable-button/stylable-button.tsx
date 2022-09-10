import type React from 'react';
import { st, classes } from './stylable-button.st.css';

export interface StylableButtonProps {
    className?: string
    children?: React.ReactNode;
}

export const StylableButton: React.FC<StylableButtonProps> = ({ className= '', children }) => (
    <button className={st(classes.root, className)}>{children}</button>
);
