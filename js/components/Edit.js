import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';
import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome';
import {
    toggleEditMode
} from '../actions/edit';
import VideoURL from './VideoURL';
import LiveModal from './LiveModal/LiveModal';
import $ from "jquery";
import {
    setQuality
} from "../actions/video";
import {
    withCookies
} from 'react-cookie';
import {
    Dashboard
} from "@material-ui/icons";

import './Edit.scss';
import './Tooltip.scss';

class Edit extends Component {

    state = {
        sources_modal: false,
        live_modal: false
    };

    handleEdit = () => {
        const {
            toggleEditMode,
            edit
        } = this.props;

        if (edit) {
            this.updateVideo();
        }

        toggleEditMode();
    };

    updateVideo = () => {
        const {
            cookies,
            video,
            setQuality
        } = this.props;

        setTimeout(() => {
            const videoElement = $('video.video');

            if (videoElement.length === 0) {
                return;
            }

            let video_quality = cookies.get('quality');
            let src = undefined;
            if (Object.keys(video.sources).length !== 0) {
                if (!video.sources[video_quality]) {
                    Object.keys(video.sources).sort((i, j) => {
                        return parseInt(i.slice(0, i.length - 1)) - parseInt(j.slice(0, j.length - 1));
                    }).forEach((quality) => {
                        let width = parseInt(quality.slice(0, quality.length - 1));

                        if (video_quality && $(window).outerHeight() < width) {
                            return
                        }

                        video_quality = quality;
                    });
                }

                src = video.sources[video_quality][Math.floor(Math.random() * video.sources[video_quality].length)];
            }

            $('video.video source').attr('src', src);
            videoElement[0].load();

            videoElement.get(0).volume = parseFloat(cookies.get('video.volume') || 0.5);

            setQuality(video_quality);

            let promise = undefined;
            if (video.playing) {
                promise = videoElement[0].play();
            } else {
                promise = videoElement[0].pause();
            }

            if (promise) {
                promise.catch((err) => {
                    if (this.state.alert_shown) {
                        return;
                    }

                    this.setState({
                        alert_shown: true
                    });

                    alert('Kliknij w odtwarzacz, aby odtworzyć wideo');

                    console.error(err);
                });
            }

            if (video.current_time) {
                videoElement.get(0).currentTime = video.current_time;
            }
        }, 100);
    };

    render() {
        const {
            edit
        } = this.props;

        if (edit) {
            const mobile = !!('ontouchstart' in window || navigator.msMaxTouchPoints);

            return ( <
                div className = {
                    `edit-box ${mobile ? 'mobile' : ''} ${this.props.visible ? 'enabled' : ''}`
                } >
                <
                button className = "edit"
                onClick = {
                    this.handleEdit
                } >
                <
                FontAwesomeIcon icon = {
                    edit ? 'times' : 'layer-group'
                }
                /> <
                /button>

                {
                    edit && localStorage.xD &&
                        <
                        button className = "video-url"
                    onClick = {
                            () => {
                                this.setState({
                                    sources_modal: true
                                })
                            }
                        } >
                        <
                        FontAwesomeIcon icon = {
                            'video'
                        }
                    /> <
                    /button>
                }

                {
                    edit && localStorage.xD &&
                        <
                        button className = "live"
                    onClick = {
                            () => {
                                this.setState({
                                    live_modal: true
                                })
                            }
                        } >
                        <
                        FontAwesomeIcon icon = {
                            'broadcast-tower'
                        }
                    /> <
                    /button>
                }

                {
                    edit && this.state.sources_modal && ( <
                        VideoURL visible = {
                            this.state.sources_modal
                        }
                        setVisible = {
                            (visible) => {
                                this.setState({
                                    sources_modal: visible
                                });
                            }
                        }
                        />
                    )
                }

                {
                    edit && this.state.live_modal && ( <
                        LiveModal visible = {
                            this.state.live_modal
                        }
                        setVisible = {
                            visible => this.setState({
                                live_modal: visible
                            })
                        }
                        />
                    )
                } <
                /div>
            );
        }

        return ( <
            button className = {
                "tooltip"
            }
            onClick = {
                this.handleEdit
            } >
            <
            Dashboard / >

            <
            label > Edytuj układ < /label> <
            /button>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        edit: state.edit,
        video: state.video,
        socket: state.socket
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleEditMode: () => {
            dispatch(toggleEditMode());
        },
        setQuality: (quality) => {
            dispatch(setQuality(quality))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withCookies(Edit))