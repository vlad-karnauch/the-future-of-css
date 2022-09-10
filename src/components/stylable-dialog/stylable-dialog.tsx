import type Recat from 'react';
import { st, classes } from './stylable-dialog.st.css';
import { StylableButton } from '../stylable-button/stylable-button';

export interface StylableDialogProps {
    className?: string;
    img: string;
    title: string;
    body: string;
    button: React.ReactNode;
}

export const StylableDialog: React.FC<StylableDialogProps> = ({ className = '', img, title, body, button }) => {
    return (
        <div className={st(classes.root, {}, className)}>
            <img className={classes.img} src={img} />
            <h1 className={classes.title}>{title}</h1>
            <p className={classes.body}>{body}</p>
            <StylableButton className={classes.button}>{button}</StylableButton>
        </div>
    );
};
