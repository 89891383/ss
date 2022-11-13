export const INCREMENT_DELAY = 'INCREMENT_DELAY';
export const DECREMENT_DELAY = 'DECREMENT_DELAY';
export const SET_DELAY = 'SET_DELAY';

export function incrementDelay() {
    return {
        type: INCREMENT_DELAY
    };
}

export function decrementDelay() {
    return {
        type: DECREMENT_DELAY
    };
}

export function setDelay(delay) {
    return {
        type: SET_DELAY,
        delay
    }
}