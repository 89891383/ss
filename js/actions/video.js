export const SET_CURRENT_TIME = 'SET_CURRENT_TIME';
export const SET_PLAYING = 'SET_PLAYING';
export const SET_VIDEO_SOURCES = 'SET_VIDEO_SOURCES';
export const SET_QUALITY = 'SET_QUALITY';

export function setCurrentTime(current_time) {
    return {
        type: SET_CURRENT_TIME,
        current_time
    };
}

export function setPlaying(playing) {
    return {
        type: SET_PLAYING,
        playing
    }
}

export function setVideoSources(sources) {
    return {
        type: SET_VIDEO_SOURCES,
        sources
    }
}

export function setQuality(quality) {
    return {
        type: SET_QUALITY,
        quality
    }
}