import { createSlice } from '@reduxjs/toolkit';
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

const GameSlice = createSlice({
    name: 'Game',
    initialState,
    reducers: {

    }
});

export default GameSlice.reducer;