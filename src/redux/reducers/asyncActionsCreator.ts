import { ICard } from './../../models/ICard';
import { GameSlice } from './slices/GameSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const startTimer = createAsyncThunk(
    "Game/startTimer",
    async(time: number, {dispatch}) => {
        const counting = await setInterval(() => {
            if(--time >= 0){
                dispatch(GameSlice.actions.changeTimer(time));
            }else{
                dispatch(GameSlice.actions.endTimer());
                clearInterval(counting);
            }
        }, 1000);
    }
);

export const openCardTimer = createAsyncThunk(
    "Game/openCardTimer",
    async(card: ICard, {dispatch}) => {
        return await setTimeout(() => {
            dispatch(GameSlice.actions.checkCard(card));
        }, 1000);
    }
);