import React from 'react';

const Video = React.memo(({
    src,
    videoRef,
    className,
    style,
    onPause,
    onCanPlay,
    onTimeUpdate,
    onDurationChange,
    onVolumeChange,
    muted,
    playsInline
}) => {
    console.log(src);

    return ( <
        video key = {
            src
        }
        ref = {
            videoRef
        }
        className = {
            className
        }
        style = {
            style
        }
        controls = {
            false
        }
        onPause = {
            onPause
        }
        onCanPlay = {
            onCanPlay
        }
        onTimeUpdate = {
            onTimeUpdate
        }
        onDurationChange = {
            onDurationChange
        }
        onVolumeChange = {
            onVolumeChange
        }
        muted = {
            false
        }
        playsInline = {
            true
        }
        autoPlay = {
            false
        } >
        <
        source src = {
            src
        }
        /> <
        /video>
    )
}, ({
    src: oldSrc,
    style: oldStyle
}, {
    src,
    style
}) => oldSrc === src && oldStyle === style);

export default Video