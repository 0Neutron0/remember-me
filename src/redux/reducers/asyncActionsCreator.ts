import { ICard } from './../../models/ICard';
import { GameSlice } from './slices/GameSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const openCardTimer = createAsyncThunk(
    "Game/openCardTimer",
    async(card: ICard, {dispatch}) => {
        return await setTimeout(() => {
            dispatch(GameSlice.actions.checkCard(card));
        }, 1000);
    }
);