import {
    SET_CHAT_POSITION
} from '../actions/chat';

export function chat(state = {
    position: 'right'
}, action) {
    switch (action.type) {
        case SET_CHAT_POSITION:
            return {
                ...state,
                position: action.position
            }
        default:
            return state;
    }
}