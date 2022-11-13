export const SET_LIVE = 'SET_LIVE';

export function setLive(fullscreen, url) {
    return {
        type: SET_LIVE,
        fullscreen,
        url
    };
}