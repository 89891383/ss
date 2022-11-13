import React from 'react';
import classNames from 'classnames/bind';

import Quality from './Quality/Quality';
import Delay from '../../Delay/Delay';
import Sync from '../../Sync/Sync';
import Edit from '../../Edit/Edit';
import Tooltip from '../../Tooltip/Tooltip';

import {
    PlayArrow,
    Pause,
    Fullscreen,
    FullscreenExit,
    VolumeUp,
    VolumeOff
} from '@material-ui/icons';

import Styles from './Controls.module.scss';

const parseTime = (seconds) => {
    seconds = Math.floor(seconds);

    let m = Math.floor(seconds / 60);
    let s = seconds % 60;

    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
};

const Controls = (props) => ( <
    div className = {
        classNames(Styles.controls, {
            [Styles.visible]: props.visible
        })
    } >
    <
    div className = {
        classNames(Styles.time_slider_container, {
            [Styles.disabled]: !props.allowControl
        })
    } >
    <
    input className = {
        Styles.time_slider
    }
    type = "range"
    min = {
        0
    }
    max = {
        props.duration
    }
    step = {
        0.1
    }
    value = {
        props.current_time
    }
    onChange = {
        props.onTimeChange
    }
    style = {
        {
            backgroundImage: `linear-gradient(to right, #4285f4 0%, #4285f4 ${props.current_time * 100 / props.duration}%, rgba(255, 255, 255, 0.35) ${(props.current_time * 100 / props.duration) + 0.0001}%, rgba(255, 255, 255, 0.35) 100%)`,
        }
    }
    /> <
    /div>

    <
    div className = {
        Styles.buttons
    } > {
        props.allowControl && ( <
            button className = {
                Styles.play
            }
            onClick = {
                props.onPlayPauseClick
            } > {
                props.playing ? < Pause / > : < PlayArrow / >
            } <
            /button>
        )
    }

    <
    div className = {
        Styles.volume
    } >
    <
    button className = {
        Styles.mute
    }
    onClick = {
        props.onMuteChange
    } > {
        props.muted || props.volume === 0 ? < VolumeOff / > : < VolumeUp / >
    } <
    /button>

    <
    div className = {
        Styles.volume_slider_container
    } >
    <
    input className = {
        Styles.volume_slider
    }
    type = "range"
    min = {
        0
    }
    max = {
        1
    }
    step = {
        0.01
    }
    value = {
        props.volume
    }
    onChange = {
        props.onVolumeChange
    }
    style = {
        {
            backgroundImage: `linear-gradient(to right, #4285f4 0%, #4285f4 ${props.volume * 100}%, rgba(255, 255, 255, 0.35) ${(props.volume * 100) + 0.0001}%, rgba(255, 255, 255, 0.35) 100%)`,
        }
    }
    /> <
    /div> <
    /div>

    <
    div className = {
        Styles.time
    } >
    <
    p className = {
        Styles.time_p
    } > {
        `${parseTime(props.current_time)}/${parseTime(props.duration)}`
    } <
    /p> <
    /div>

    <
    div style = {
        {
            flex: 1
        }
    }
    />

    <
    Quality / >

    <
    Delay className = {
        Styles.delay
    }
    />

    <
    Sync className = {
        Styles.sync
    }
    />

    <
    Edit className = {
        Styles.edit
    }
    />

    <
    Tooltip tooltip = {
        `${props.fullscreen ? 'Wyłącz' : 'Włącz'} tryb pełnego ekranu`
    } >
    <
    button className = {
        Styles.fullscreen
    }
    onClick = {
        props.onFullscreenChange
    } > {
        props.fullscreen ? < FullscreenExit / > : < Fullscreen / >
    } <
    /button> <
    /Tooltip> <
    /div> <
    /div>
);

export default Controls