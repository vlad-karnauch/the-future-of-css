import { createBoard } from '@wixc3/react-board';
import { EmotionButton } from '../../../components/emotion-button/emotion-button';

export default createBoard({
    name: 'Emotion',
    Board: () => <EmotionButton>Emotion Button</EmotionButton>
});
