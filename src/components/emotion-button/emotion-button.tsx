/** @jsx jsx */
import { jsx, css } from '@emotion/react'

export interface EmotionButtonProps {
    children?: React.ReactNode;
}

export const EmotionButton: React.FC<EmotionButtonProps> = ({ children }) => (
    <button
        css={{
            backgroundColor: '#FAFBFC',
            border: '2px solid rgba(27, 31, 35, 0.15)',
            borderRadius: 8,
            color: '#24292E',
            fontSize: '1rem',
            padding: 18,
            transitionProperty: 'border-color, color',
            transitionDuration: '0.7s',
            cursor: 'pointer',
            '&:hover': {
                borderColor: '#405cf5',
                color: '#405cf5'
            }

        }}
    >
        {children}
    </button>
);
