import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';
import {
    withCookies
} from 'react-cookie';

import './VideoURL.scss';

import {
    setVideoSources,
    setQuality
} from '../actions/video';

class VideoURL extends Component {

    static QUALITIES = [
        '240p',
        '360p',
        '480p',
        '720p',
        '1080p',
        '1440p',
        '2160p'
    ];

    state = {
        sources: {}
    };

    handleChange = (event, quality, index) => {
        const {
            sources
        } = this.state;

        if (!sources[quality]) {
            sources[quality] = [];
        }

        const value = event.target.value;
        sources[quality][index] = value;

        sources[quality] = sources[quality].filter((value) => {
            return value && value.length > 0;
        });

        this.setState({
            sources: sources
        });
    };

    handleCancel = () => {
        const {
            setVisible
        } = this.props;

        setVisible(false);
    };

    handleConfirm = () => {
        const {
            sources
        } = this.state;
        const {
            cookies,
            socket,
            setVideoSources,
            setQuality,
            setVisible
        } = this.props;

        let videoQuality = cookies.get('quality');
        if (Object.keys(sources).length !== 0) {
            if (!sources[videoQuality]) {
                Object.keys(sources).sort((i, j) => {
                    return parseInt(i.slice(0, i.length - 1)) - parseInt(j.slice(0, j.length - 1));
                }).forEach((quality) => {
                    let width = parseInt(quality.slice(0, quality.length - 1));

                    if (videoQuality && window.outerHeight < width) {
                        return
                    }

                    videoQuality = quality;
                });
            }
        }
        setQuality(videoQuality);
        setVideoSources(sources);

        socket.emit('sources', sources);

        setVisible(false);
    };

    renderQualityField(quality) {
        const {
            sources
        } = this.state;

        let inputs = [];
        for (let i = 0; i < (sources[quality] ? sources[quality].length : 0) + 1; i++) {
            inputs.push( < input key = {
                    `input-${quality}-${i}`
                }
                data - key = {
                    `input-${quality}-${i}`
                }
                onChange = {
                    (e) => this.handleChange(e, quality, i)
                }
                value = {
                    sources[quality] && i < sources[quality].length ? sources[quality][i] : ''
                }
                />);
            }

            return ( <
                div key = {
                    quality
                }
                className = "quality field" >
                <
                label > {
                    quality
                } < /label>

                <
                div className = "input-group" > {
                    inputs
                } <
                /div> <
                /div>
            )
        }

        render() {
            return ( <
                div className = "modal background" >
                <
                div className = "modal" > {
                    VideoURL.QUALITIES.map((quality) => {
                        return this.renderQualityField(quality);
                    })
                }

                <
                div >
                <
                button className = "cancel"
                onClick = {
                    this.handleCancel
                } >
                Anuluj <
                /button>

                <
                button className = "confirm"
                onClick = {
                    this.handleConfirm
                } >
                Zatwierdź <
                /button> <
                /div> <
                /div> <
                /div>
            );
        }

    }

    const mapStateToProps = (state) => {
        return {
            socket: state.socket
        };
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            setVideoSources: (sources) => {
                dispatch(setVideoSources(sources));
            },
            setQuality: (quality) => {
                dispatch(setQuality(quality));
            }
        }
    }

    export default connect(mapStateToProps, mapDispatchToProps)(withCookies(VideoURL))