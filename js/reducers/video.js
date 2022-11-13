import {
    SET_CURRENT_TIME,
    SET_PLAYING,
    SET_VIDEO_SOURCES,
    SET_QUALITY
} from '../actions/video';

export function video(state = {
    playing: false,
    current_time: 0,
    sources: {},
    quality: ''
}, action) {
    switch (action.type) {
        case SET_CURRENT_TIME:
            return {
                ...state,
                current_time: action.current_time
            };
        case SET_PLAYING:
            return {
                ...state,
                playing: action.playing
            };
        case SET_VIDEO_SOURCES:
            return {
                ...state,
                sources: action.sources
            };
        case SET_QUALITY:
            return {
                ...state,
                quality: action.quality
            };
        default:
            return state;
    }
}