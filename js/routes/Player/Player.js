import React, {
    useRef
} from 'react';
import {
    Edit,
    Chat,
    Stream,
    VideoPlayer
} from '../../components';
import {
    useSelector
} from 'react-redux';

import Styles from './Player.module.scss';

const Player = () => {
        const edit = useSelector(state => state.edit);
        const chat = useSelector(state => state.chat);
        const live = useSelector(state => state.live);

        const playerElement = useRef(null);

        return ( <
            div className = {
                Styles.container
            }
            style = {
                {
                    flexDirection: chat.position === 'right' ? 'row' : 'row-reverse'
                }
            } >
            <
            div ref = {
                playerElement
            }
            className = {
                Styles.player
            } > {
                edit && < Edit visible = {
                    true
                }
                />} {
                    !live.fullscreen && < VideoPlayer / >
                } <
                Stream playerElement = {
                    playerElement
                }
                /> <
                /div>

                <
                Chat / >
                <
                /div>
            );
        };

        export default Player