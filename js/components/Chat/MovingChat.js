import React from 'react';
import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome'

import Styles from './Chat.module.scss';

const MovingChat = (props) => ( <
    div className = {
        [
            Styles.chat,
            Styles.edit,
            props.position
        ].join(' ')
    }
    style = {
        {
            position: 'fixed',
            top: props.y,
            left: props.x,
            width: props.width,
            height: '100vh'
        }
    } >
    <
    FontAwesomeIcon icon = {
        ['fas', 'comment-alt']
    }
    style = {
        {
            color: props.hidden ? '#DF3D62' : undefined
        }
    }
    /> <
    span > Twitch chat < /span>

    <
    div className = {
        Styles.controls
    } >
    <
    div className = {
        Styles.move
    } >
    <
    FontAwesomeIcon icon = {
        ['fas', 'arrows-alt']
    }
    /> <
    /div>

    <
    div className = {
        Styles.resize
    } >
    <
    FontAwesomeIcon icon = {
        ['fas', 'arrows-alt-h']
    }
    /> <
    /div>

    <
    div className = {
        Styles.hide
    } >
    <
    FontAwesomeIcon icon = {
        ['fas', props.hidden ? 'eye-slash' : 'eye']
    }
    /> <
    /div> <
    /div> <
    /div>
)

export default MovingChat