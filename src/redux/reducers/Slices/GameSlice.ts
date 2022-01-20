import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICard } from '../../../models/ICard';

interface Game {
    cards: ICard[];
    countSteps: number;
    gameStatus: boolean;
};

const initialState: Game = {
    cards: [],
    countSteps: 0,
    gameStatus: false
};

export const GameSlice = createSlice({
    name: 'Game',
    initialState,
    reducers: {
        inutialGame(state, action: PayloadAction<string>){
            
            type Mixser = (cards: ICard[]) => ICard[];

            const mixer: Mixser = (cards) => cards.sort(() => Math.random() - 0.5);

            const light: ICard[] = mixer([
                {id: 301, type: 'code', status: true},
                {id: 302, type: 'code', status: true},
                {id: 303, type: 'barcodes', status: true},
                {id: 304, type: 'barcodes', status: true},
                {id: 305, type: 'branch', status: true},
                {id: 306, type: 'branch', status: true},
                {id: 307, type: 'hooks', status: true},
                {id: 308, type: 'hooks', status: true},
                {id: 309, type: 'development', status: true},
                {id: 310, type: 'development', status: true},
                {id: 311, type: 'fork', status: true},
                {id: 312, type: 'fork', status: true},
            ]);

            const difficult: ICard[] = mixer([
                {id: 401, type: 'code', status: true},
                {id: 402, type: 'code', status: true},
                {id: 403, type: 'barcodes', status: true},
                {id: 404, type: 'barcodes', status: true},
                {id: 405, type: 'branch', status: true},
                {id: 406, type: 'branch', status: true},
                {id: 407, type: 'hooks', status: true},
                {id: 408, type: 'hooks', status: true},
                {id: 409, type: 'development', status: true},
                {id: 410, type: 'development', status: true},
                {id: 411, type: 'fork', status: true},
                {id: 412, type: 'fork', status: true},
                {id: 413, type: 'script', status: true},
                {id: 414, type: 'script', status: true},
                {id: 415, type: 'qr', status: true},
                {id: 416, type: 'qr', status: true},
                {id: 417, type: 'inventory', status: true},
                {id: 418, type: 'inventory', status: true},
                {id: 419, type: 'digital', status: true},
                {id: 420, type: 'digital', status: true},
            ]);

            const heavy: ICard[] = mixer([
                {id: 501, type: 'code', status: true},
                {id: 502, type: 'code', status: true},
                {id: 503, type: 'barcodes', status: true},
                {id: 504, type: 'barcodes', status: true},
                {id: 505, type: 'branch', status: true},
                {id: 506, type: 'branch', status: true},
                {id: 507, type: 'hooks', status: true},
                {id: 508, type: 'hooks', status: true},
                {id: 509, type: 'development', status: true},
                {id: 510, type: 'development', status: true},
                {id: 511, type: 'fork', status: true},
                {id: 512, type: 'fork', status: true},
                {id: 513, type: 'script', status: true},
                {id: 514, type: 'script', status: true},
                {id: 515, type: 'qr', status: true},
                {id: 516, type: 'qr', status: true},
                {id: 517, type: 'inventory', status: true},
                {id: 518, type: 'inventory', status: true},
                {id: 519, type: 'digital', status: true},
                {id: 520, type: 'digital', status: true},
                {id: 521, type: 'building', status: true},
                {id: 522, type: 'building', status: true},
                {id: 523, type: 'city', status: true},
                {id: 524, type: 'city', status: true},
                {id: 525, type: 'box', status: true},
                {id: 526, type: 'box', status: true},
                {id: 527, type: 'rocket', status: true},
                {id: 528, type: 'rocket', status: true},
                {id: 529, type: 'email', status: true},
                {id: 530, type: 'email', status: true},
            ]);

            switch(action.payload){
                case 'light':
                    state.cards = light;
                    break;
                case 'heavy':
                    console.log('222');
                    state.cards = heavy;
                    break;
                case 'difficult':
                    state.cards = difficult;
                    break;
                default:
                    state.cards = light;
            }
        }
    }
});

export default GameSlice.reducer;