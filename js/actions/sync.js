export const TOGGLE_SYNC = 'TOGGLE_SYNC';
export const SET_SYNC = 'SET_SYNC';

export function toggleSync() {
    return {
        type: TOGGLE_SYNC
    }
}

export function setSync(sync) {
    return {
        type: SET_SYNC,
        sync: sync
    }
}