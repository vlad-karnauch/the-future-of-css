/** @jsx jsx */
import { jsx, css } from '@emotion/react'

export interface EmotionButtonProps {
    children?: React.ReactNode;
}

export const EmotionButton: React.FC<EmotionButtonProps> = ({ children }) => (
    <button
        css={{
            backgroundColor: 'hotpink',
            // '&:hover': {
            //     color: 'lightgreen',
            // },
        }}
    >
        {children}
    </button>
);
