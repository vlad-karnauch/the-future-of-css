import type React from 'react';
import styles from './css-modules-button.module.css';

export interface CSSModulesButtonProps {
    children?: React.ReactNode;
}
export const CSSModulesButton: React.FC<CSSModulesButtonProps> = ({ children }) => (
    <button className={styles.button}>{children}</button>
);
