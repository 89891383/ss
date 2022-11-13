import React, {
    Component
} from 'react';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

import {
    Player,
    Timer
} from './routes';

import {
    library
} from '@fortawesome/fontawesome-svg-core'
import {
    fab
} from '@fortawesome/free-brands-svg-icons'
import {
    fas
} from '@fortawesome/free-solid-svg-icons'
import openSocket from "socket.io-client";
import {
    setCurrentTime,
    setPlaying,
    setVideoSources,
    setQuality
} from './actions/video';
import {
    setSocket
} from './actions/socket';
import {
    setLive
} from './actions/live';
import $ from "jquery";

import {
    connect
} from 'react-redux';
import {
    withCookies
} from 'react-cookie';

import './App.css';

library.add(fab, fas);

const development = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

class App extends Component {

    state = {
        client_id: null
    }

    componentDidMount() {
        const {
            setSocket
        } = this.props;

        const socket = openSocket(development ? `http://127.0.0.1:8080` : `wss://${process.env.REACT_APP_DOMAIN}`, {
            upgrade: false,
            transports: ['websocket']
        });

        socket.on('connect', () => {
            if (localStorage.xD) {
                socket.emit('authenticate', localStorage.xD);
            }
        });

        socket.on('client_id', (client_id) => {
            this.setState({
                client_id: client_id
            });
        });

        socket.on('status', (data) => {
            if (data.issued_by === this.state.client_id) {
                return;
            }

            const {
                delay
            } = this.props;

            setTimeout(() => {
                this.props.setPlaying(data.playing);
                this.props.setCurrentTime(data.current_time);

                // const videoElement = $('video.video');

                // if (videoElement.length > 0) {
                //     let promise = undefined;

                //     if (data.playing) {
                //         promise = videoElement.get(0).play();
                //     } else {
                //         promise = videoElement.get(0).pause();
                //     }

                //     if (promise) {
                //         promise.catch((err) => {
                //             if (this.state.alert_shown) {
                //                 return;
                //             }

                //             this.setState({
                //                 alert_shown: true
                //             });

                //             alert('Kliknij w odtwarzacz, aby odtworzyć wideo');

                //             console.error(err);
                //         });
                //     }

                //     let local_current_time = $('video').get(0).currentTime;

                //     if (Math.abs(local_current_time - data.current_time) > 1) {
                //         videoElement.get(0).currentTime = data.current_time - (!data.issued_by && data.playing ? (delay / 1000) : 0);
                //     }
                // }
            }, data.issued_by ? delay : 100);
        });

        socket.on('sources', (data) => {
            if (data.issued_by === this.state.client_id) {
                return;
            }

            const {
                cookies,
                setVideoSources,
                setQuality
            } = this.props;

            let video_quality = cookies.get('quality');
            if (Object.keys(data.sources).length !== 0) {
                if (!data.sources[video_quality]) {
                    Object.keys(data.sources).sort((i, j) => {
                        return parseInt(i.slice(0, i.length - 1)) - parseInt(j.slice(0, j.length - 1));
                    }).forEach((quality) => {
                        let width = parseInt(quality.slice(0, quality.length - 1));

                        if (video_quality && $(window).outerHeight() < width) {
                            return
                        }

                        video_quality = quality;
                    })
                }
            }

            setVideoSources(data.sources);
            setQuality(video_quality);
        });

        socket.on('live', (data) => {
            if (data.issued_by === this.state.client_id) {
                return;
            }

            const {
                live
            } = data;

            if (live === null) {
                this.props.setLive(false, `https://twitch.tv/${process.env.REACT_APP_CHANNEL}`);
                return;
            }

            const {
                fullscreen,
                url
            } = live;
            this.props.setLive(fullscreen, url);
        })

        setSocket(socket);
    }

    render() {
        return ( <
            Router >
            <
            Route path = "/"
            exact component = {
                Player
            }
            /> <
            Route path = "/timer"
            component = {
                Timer
            }
            /> <
            /Router>
        )
    }

};

const mapStateToProps = (state) => {
    return {
        delay: state.delay,
        video: state.video,
        socket: state.socket,
        start: state.start
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setPlaying: (playing) => {
            dispatch(setPlaying(playing));
        },
        setCurrentTime: (current_time) => {
            dispatch(setCurrentTime(current_time));
        },
        setVideoSources: (sources) => {
            dispatch(setVideoSources(sources));
        },
        setQuality: (quality) => {
            dispatch(setQuality(quality))
        },
        setSocket: (socket) => {
            dispatch(setSocket(socket));
        },
        setLive: (source, url) => {
            dispatch(setLive(source, url));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(withCookies(App))