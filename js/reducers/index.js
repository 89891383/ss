import {
    combineReducers
} from 'redux';

import {
    edit
} from './edit';
import {
    delay
} from './delay';
import {
    video
} from './video';
import {
    chat
} from './chat';
import {
    socket
} from './socket';
import {
    sync
} from './sync';
import {
    start
} from './start';
import {
    live
} from './live';

export default combineReducers({
    edit,
    delay,
    video,
    chat,
    socket,
    sync,
    start,
    live
})