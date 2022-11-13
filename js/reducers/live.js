import {
    SET_LIVE
} from '../actions/live';

export function live(state = {
    fullscreen: false,
    url: ''
}, action) {
    switch (action.type) {
        case SET_LIVE:
            return {
                ...state,
                fullscreen: action.fullscreen,
                url: action.url
            };
        default:
            return state;
    }
}