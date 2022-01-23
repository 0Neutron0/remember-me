import { ICard } from "./ICard";

export interface IGame {
    cards: ICard[];
    countSteps: number;
    gameStatus: boolean;
    previous: ICard | null;
    notClick: boolean;
};