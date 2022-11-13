import {
    TOGGLE_EDIT_MODE
} from '../actions/edit';

export function edit(state = false, action) {
    switch (action.type) {
        case TOGGLE_EDIT_MODE:
            return !state;
        default:
            return state;
    }
}