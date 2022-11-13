import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';
import {
    withCookies
} from 'react-cookie';
import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import $ from 'jquery';
import {
    setCurrentTime,
    setPlaying,
    setQuality
} from '../../actions/video';
import {
    decrementDelay,
    incrementDelay
} from "../../actions/delay";
import {
    toggleEditMode
} from "../../actions/edit";

import Video from './Video/Video';
import Controls from './Controls/Controls';
import Overlay from './Overlay/Overlay';

import Styles from './VideoPlayer.module.scss';
import '../Tooltip.scss';

class VideoPlayer extends Component {

    state = {
        hadInteraction: false,
        current_time: 0,
        duration: 0,
        focused: false,
        volume: 1,
        muted: false,
        fullscreen: false,
        clicked_play_button: false,
        last_sent: 0,
        controlsVisible: false
    };

    constructor(props) {
        super(props);

        this.video = React.createRef();
        this.src = React.createRef();
    }

    componentDidMount() {
        const {
            cookies
        } = this.props;

        let volume = parseFloat(cookies.get('video.volume') || 0.5);
        if (this.video.current) {
            this.video.current.volume = volume;
        }

        let muted = cookies.get('video.muted') === 'true';
        if (this.video.current) {
            this.video.current.muted = muted;
        }

        this.setState({
            volume: muted ? 0 : volume,
            muted: muted,
            focused: document.visibilityState === 'visible',
            fullscreen: !!document.fullscreenElement,
        });

        $(window).on('focus', this.onFocus);
        $(window).on('blur', this.onBlur);
        $(window).on('fullscreenchange', this.onFullScreenChange);
    }

    componentDidUpdate(prevProps) {
        const {
            hadInteraction
        } = this.state;
        const {
            playing: oldPlaying,
            currentTime: oldCurrentTime,
            edit: oldEdit
        } = prevProps;
        const {
            playing,
            delay,
            edit,
            sync
        } = this.props;
        if (edit) {
            return;
        }

        let {
            currentTime
        } = this.props;

        if (oldEdit !== edit || (hadInteraction && oldCurrentTime !== currentTime)) {
            if (oldEdit !== edit || (!playing || Math.abs(this.video.current.currentTime - currentTime) > 3 && !sync)) {
                currentTime = currentTime - (playing ? (delay / 1000) : 0);
                this.video.current.currentTime = currentTime;
                this.setState({
                    current_time: currentTime
                });
            }
        }

        if (oldEdit !== edit || (hadInteraction && oldPlaying !== playing)) {
            if (playing) {
                this.video.current.play();
            } else {
                this.video.current.pause();
            }
        }
    }

    componentWillUnmount() {
        $(window).off('focus', this.onFocus);
        $(window).off('blur', this.onBlur);
    }

    onFocus = () => {
        this.setState({
            focused: true
        });
    };

    onBlur = () => {
        this.setState({
            focused: false
        });
    };

    onTimeUpdate = (e) => {
        const {
            currentTime,
            socket,
            sync
        } = this.props;

        const token = localStorage.getItem('xD');

        let local_current_time = e.target.currentTime;

        if (!token && sync && Math.abs(local_current_time - currentTime) > 3) {
            e.target.currentTime = currentTime;
            return
        }

        this.setState({
            current_time: local_current_time
        });

        if (!token || !this.state.clicked_play_button || Date.now() - this.state.last_sent < 1000) {
            return;
        }

        this.setState({
            last_sent: Date.now()
        });

        socket.emit('current_time', local_current_time);
    };

    onDurationChange = (e) => {
        this.setState({
            duration: e.target.duration
        });
    };

    onVolumeChange = (e) => {
        const {
            cookies
        } = this.props;

        const {
            volume,
            muted
        } = e.target;

        cookies.set('video.volume', volume);
        cookies.set('video.muted', muted);
    };

    onPause = () => {
        const token = localStorage.getItem('xD');

        if (!token) {
            return;
        }

        this.setState({
            clicked_play_button: false
        });
    };

    onTimeChangeClick = (e) => {
        const token = localStorage.getItem('xD');
        if (!token) {
            return;
        }

        const {
            setCurrentTime,
            socket
        } = this.props;

        let current_time = parseFloat(e.target.value);

        this.video.current.currentTime = current_time;

        setCurrentTime(current_time);

        this.setState({
            current_time: current_time,
            last_sent: Date.now()
        });

        socket.emit('current_time', current_time);
    };

    onPlayPauseClick = () => {
        const {
            playing,
            socket,
            setPlaying
        } = this.props;

        let play = !playing;

        if (play) {
            this.video.current.play();
        } else {
            this.video.current.pause();
        }

        setPlaying(play);

        const token = localStorage.getItem('xD');
        if (!token) {
            return;
        }

        if (play) {
            this.setState({
                clicked_play_button: true
            });
        }

        let local_current_time = this.video.current.currentTime;
        socket.emit(play ? 'play' : 'pause', local_current_time);
    };

    onFullScreenChange = () => {
        this.setState({
            fullscreen: !!document.fullscreenElement,
        })
    };

    handleMute = () => {
        const {
            cookies
        } = this.props;

        let muted = !this.state.muted;
        let volume = parseFloat(cookies.get('video.volume') || 1);
        if (!muted && volume === 0) {
            volume = 1;
        }

        this.setState({
            muted: muted,
            volume: muted ? 0 : volume
        });

        this.video.current.muted = muted;
        this.video.current.volume = volume;
    };

    handleVolume = (e) => {
        let volume = parseFloat(e.target.value);
        let muted = volume === 0;

        this.setState({
            muted: muted,
            volume: volume
        });

        this.video.current.muted = muted;
        this.video.current.volume = volume;
    };

    handleDecrement = () => {
        const {
            decrementDelay
        } = this.props;

        decrementDelay();
    };

    handleIncrement = () => {
        const {
            incrementDelay
        } = this.props;

        incrementDelay();
    };

    handleEdit = () => {
        const {
            toggleEditMode
        } = this.props;

        toggleEditMode();
    };

    handleFullScreen = () => {
        if (this.state.fullscreen) {
            document.exitFullscreen();
        } else {
            document.documentElement.requestFullscreen();
        }
    };

    handleInteraction = () => {
        const {
            playing,
            currentTime
        } = this.props;

        this.setState({
            hadInteraction: true,
            currentTime: currentTime
        });

        this.video.current.currentTime = currentTime;
        if (playing) {
            this.video.current.play();
        }
    }

    static parseTime(seconds) {
        seconds = Math.floor(seconds);

        let m = Math.floor(seconds / 60);
        let s = seconds % 60;

        return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
    }

    render() {
        const {
            hadInteraction
        } = this.state;
        const {
            edit,
            quality,
            sources
        } = this.props;

        if (edit) {
            return ( <
                div className = {
                    Styles.edit_container
                } >
                <
                FontAwesomeIcon className = {
                    Styles.icon
                }
                icon = {
                    ['fas', 'video']
                }
                /> <
                span className = {
                    Styles.span
                } > Video player < /span> <
                /div>
            );
        }

        const token = localStorage.getItem('xD');

        let src;
        if (quality && sources && sources[quality] && sources[quality].length !== 0) {
            src = sources[quality][Math.floor(Math.random() * sources[quality].length)];
        }

        return ( <
            div className = {
                Styles.container
            }
            onMouseEnter = {
                () => this.setState({
                    controlsVisible: true
                })
            }
            onMouseLeave = {
                () => this.setState({
                    controlsVisible: false
                })
            } >
            <
            Video src = {
                src
            }
            videoRef = {
                this.video
            }
            className = {
                Styles.video
            }
            style = {
                {
                    opacity: !hadInteraction ? 0.5 : 1
                }
            }
            onPause = {
                this.onPause
            }
            onCanPlay = {
                this.onCanPlay
            }
            onTimeUpdate = {
                this.onTimeUpdate
            }
            onDurationChange = {
                this.onDurationChange
            }
            onVolumeChange = {
                this.onVolumeChange
            }
            muted = {
                false
            }
            playsInline = {
                true
            }
            />

            <
            Controls visible = {
                this.state.controlsVisible
            }
            allowControl = {!!token
            }
            playing = {
                this.props.playing
            }
            duration = {
                this.state.duration
            }
            muted = {
                this.state.muted
            }
            volume = {
                this.state.volume
            }
            current_time = {
                this.state.current_time
            }
            fullscreen = {
                this.state.fullscreen
            }
            onTimeChange = {
                this.onTimeChangeClick
            }
            onPlayPauseClick = {
                this.onPlayPauseClick
            }
            onMuteChange = {
                this.handleMute
            }
            onVolumeChange = {
                this.handleVolume
            }
            onFullscreenChange = {
                this.handleFullScreen
            }
            />

            {
                !hadInteraction && < Overlay onClick = {
                    this.handleInteraction
                }
                />} <
                /div>
            )
        }

    }

    const mapStateToProps = (state) => {
        return {
            edit: state.edit,
            delay: state.delay,
            playing: state.video.playing,
            currentTime: state.video.current_time,
            quality: state.video.quality,
            sources: state.video.sources,
            socket: state.socket,
            sync: state.sync
        };
    };

    const mapDispatchToProps = (dispatch) => {
        return {
            setCurrentTime: (current_time) => {
                dispatch(setCurrentTime(current_time))
            },
            setPlaying: (playing) => {
                dispatch(setPlaying(playing));
            },
            setQuality: (quality) => {
                dispatch(setQuality(quality));
            },
            decrementDelay: () => {
                dispatch(decrementDelay())
            },
            incrementDelay: () => {
                dispatch(incrementDelay())
            },
            toggleEditMode: () => {
                dispatch(toggleEditMode());
            }
        };
    };

    export default connect(mapStateToProps, mapDispatchToProps)(withCookies(VideoPlayer));