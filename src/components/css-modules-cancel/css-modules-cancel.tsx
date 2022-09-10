import React from 'react';
import styles from './css-modules-cancel-button.module.css';

export interface CSSModulesCancelProps {
    children?: React.ReactNode;
}

export const CSSModulesCancel: React.FC<CSSModulesCancelProps> = ({ children }) => (
    <button className={styles.cancelButton}>{children}</button>
);
