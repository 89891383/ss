import {
    INCREMENT_DELAY,
    DECREMENT_DELAY,
    SET_DELAY
} from '../actions/delay';
import Delay from '../components/delay';

export function delay(state = 3000, action) {
    switch (action.type) {
        case INCREMENT_DELAY:
            return state + Delay.DELAY_STEP;
        case DECREMENT_DELAY:
            return Math.max(0, state - Delay.DELAY_STEP);
        case SET_DELAY:
            return action.delay;
        default:
            return state;
    }
}