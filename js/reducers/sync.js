import {
    SET_SYNC,
    TOGGLE_SYNC
} from "../actions/sync";

export function sync(state = true, action) {
    switch (action.type) {
        case TOGGLE_SYNC:
            return !state;
        case SET_SYNC:
            return action.sync;
        default:
            return state;
    }
}