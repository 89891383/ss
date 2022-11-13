import {
    CLICK_START
} from "../actions/start";

export function start(state = false, action) {
    if (action.type === CLICK_START) {
        return true;
    }

    return state;
}