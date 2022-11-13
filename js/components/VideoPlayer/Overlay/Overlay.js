import React from 'react';

//Components
import {
    PlayArrow
} from '@material-ui/icons';

//Styles
import Styles from './Overlay.module.scss';

const Overlay = ({
    onClick
}) => ( <
    button className = {
        Styles.overlay
    }
    onClick = {
        onClick
    } >
    <
    div className = {
        Styles.container
    } >
    <
    PlayArrow className = {
        Styles.icon
    }
    /> <
    span className = {
        Styles.span
    } >
    Kliknij, aby odtworzyć wideo <
    /span> <
    /div> <
    /button>
);

export default Overlay