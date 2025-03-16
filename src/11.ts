import { of } from 'rxjs';

export const getRandomNumber = () => {
    return of(Math.floor(Math.random() * 10) + 1);
}