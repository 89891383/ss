import React, {
    Component
} from 'react';
import {
    withCookies
} from 'react-cookie';
import $ from 'jquery';
import ReactPlayer from 'react-player'
import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome';
import {
    connect
} from 'react-redux';

import Styles from './Stream.module.scss';

class Stream extends Component {

    state = {
        x: 0,
        y: 0,
        relX: 0,
        relY: 0,
        width: 426,
        height: 240,
        hidden: false,
        moving: false,
        resizing: false,
        playing: true,
        volume: 1,
        muted: false
    };

    constructor(props) {
        super(props);
        this.streamElement = React.createRef();
    }

    componentDidMount() {
        const {
            cookies
        } = this.props;

        let x = parseInt(cookies.get('stream.x') || 0);
        let y = parseInt(cookies.get('stream.y') || 0);
        let width = parseInt(cookies.get('stream.width') || 426);
        let height = parseInt(cookies.get('stream.height') || 240);
        let hidden = cookies.get('stream.hidden') === 'true';

        this.setState({
            x: x,
            y: y,
            width: width,
            height: height,
            hidden: hidden
        });

        $(window).on('mousemove', this.onMouseMove);
        $(window).on('touchmove', this.onMouseMove);
        $(window).on('mouseup', this.onMouseUp);
        $(window).on('touchend', this.onMouseUp);
        $(window).on('resize', this.onWindowResize);
        $('div.video').on('mouseover', this.onMouseOver);
        $('div.video').on('mouseout', this.onMouseOut);
    }

    componentWillUnmount() {
        $(window).off('mousemove', this.onMouseMove);
        $(window).off('mouseup', this.onMouseUp);
        $(window).off('resize', this.onWindowResize);
    }

    onMoveClick = (e) => {
        e.persist();

        if (e.button !== undefined && e.button !== 0) {
            return;
        }

        this.setState({
            moving: true,
            relX: e.nativeEvent.offsetX,
            relY: e.nativeEvent.offsetY
        });
    };

    onResizeClick = (e) => {
        e.persist();

        if (e.button !== undefined && e.button !== 0) {
            return;
        }

        this.setState({
            resizing: true
        });
    };

    onHideClick = () => {
        const {
            cookies
        } = this.props;

        let hidden = !this.state.hidden;

        this.setState({
            hidden: hidden
        });

        cookies.set('stream.hidden', hidden);
    };

    onMouseMove = (e) => {
        const {
            cookies
        } = this.props;

        if (!e.clientX && !e.changedTouches) {
            return;
        }

        let clientX = e.clientX;
        let clientY = e.clientY;

        if (!clientX || !clientY) {
            return;
        }

        if (this.state.moving) {
            let x = clientX - this.state.relX;
            let y = clientY - this.state.relY;

            let maxX = this.props.playerElement.current.clientWidth - this.state.width;
            let maxY = this.props.playerElement.current.clientHeight - this.state.height;

            x = Math.round(Math.min(maxX, Math.max(x, 0)));
            y = Math.round(Math.min(maxY, Math.max(y, 0)));

            this.setState({
                x,
                y,
            });

            console.log(x, y);

            cookies.set('stream.x', x);
            cookies.set('stream.y', y);
        } else if (this.state.resizing) {
            console.log(this.streamElement.current.offsetLeft, this.state.x);

            let width = clientX - this.state.x;

            width = Math.max(Math.min(this.props.playerElement.current.clientWidth, width), 256);
            let height = (width / 16) * 9;

            this.setState({
                width: width,
                height: height
            });

            cookies.set('stream.width', width);
            cookies.set('stream.height', height);
        }
    };

    onMouseUp = (e) => {
        if (e.button !== undefined && e.button !== 0) {
            return;
        }

        this.setState({
            moving: false,
            resizing: false
        });
    };

    onWindowResize = () => {
        const {
            cookies
        } = this.props;

        let mobile = 'ontouchstart' in window || navigator.msMaxTouchPoints;

        let width = parseInt(cookies.get('stream.width') || 426);
        let height = parseInt(cookies.get('stream.height') || 240);

        width = Math.min(this.props.playerElement.current.clientWidth, width);
        height = Math.min(this.props.playerElement.current.clientHeight, height);

        if (mobile) {
            width = 240;
            height = 144;
        }

        let x = Math.min(parseInt(cookies.get('stream.x') || 0), this.props.playerElement.current.clientWidth - width);
        let y = Math.min(parseInt(cookies.get('stream.y') || 0), this.props.playerElement.current.clientHeight - height);

        this.setState({
            x: x,
            y: y,
            width: width,
            height: height
        })
    };

    onMouseOver = (e) => {
        const target = $(e.target);
        if (target.parents('div.video').hasClass('edit') || (target.hasClass('video') && target.hasClass('edit'))) {
            return;
        }

        if (this.props.playerElement.current.clientHeight - (this.state.y + this.state.height) >= 90) {
            return;
        }

        let y = this.props.playerElement.current.clientHeight - 90 - this.state.height;

        this.setState({
            y: y
        });
    };

    onMouseOut = () => {
        const {
            edit
        } = this.props;
        if (edit) {
            return;
        }

        const {
            cookies
        } = this.props;

        let height = parseInt(cookies.get('stream.height') || 240);
        height = Math.min(this.props.playerElement.current.clientHeight, height);

        let y = Math.min(parseInt(cookies.get('stream.y') || 0), this.props.playerElement.current.clientHeight - height);

        console.log(y, height);

        this.setState({
            y: y
        });
    };

    componentDidUpdate(prevProps) {
        const prevEdit = prevProps.edit;
        const {
            edit
        } = this.props;

        if (prevEdit === edit) {
            return;
        }

        const {
            cookies
        } = this.props;

        console.log(this.props.edit, this.props.playerElement.current.clientHeight, this.state.y, this.state.height);

        if (edit) {
            let height = parseInt(cookies.get('stream.height') || 240);
            height = Math.min(this.props.playerElement.current.clientHeight, height);

            let y = Math.min(parseInt(cookies.get('stream.y') || 0), this.props.playerElement.current.clientHeight - height);

            this.setState({
                y: y
            });
        } else if (!edit && this.props.playerElement.current.clientHeight - (this.state.y + this.state.height) < 90) {
            let y = this.props.playerElement.current.clientHeight - 90 - this.state.height;

            this.setState({
                y: y
            });
        }
    }

    render() {
        const {
            edit,
            live
        } = this.props;
        const {
            fullscreen,
            url
        } = live;
        const {
            x,
            y,
            width,
            height,
            hidden
        } = this.state;

        if (edit) {
            let source;
            switch (true) {
                case url.indexOf('twitch') !== -1:
                    source = 'twitch';
                    break;
                case url.indexOf('youtube') !== -1:
                    source = 'youtube';
                    break;
                case url.indexOf('facebook') !== -1:
                    source = 'facebook';
                    break;
                default:
                    source = 'twitch';
                    break;
            }

            return ( <
                div className = {
                    [
                        Styles.stream,
                        Styles.edit,
                        fullscreen && 'fullscreen'
                    ].join(' ')
                }
                style = {
                    fullscreen ? {
                        width: '100%',
                        height: '100%'
                    } : {
                        transform: `translate(${x}px, ${y}px)`,
                        width: width,
                        height: height
                    }
                }
                ref = {
                    this.streamElement
                } >
                <
                FontAwesomeIcon icon = {
                    ['fab', source]
                }
                style = {
                    {
                        color: hidden ? '#DF3D62' : undefined
                    }
                }
                /> <
                span > {
                    source
                }
                stream < /span> {
                    !fullscreen && ( <
                        div className = {
                            Styles.move
                        }
                        onMouseDown = {
                            this.onMoveClick
                        }
                        onTouchStart = {
                            this.onMoveClick
                        } >
                        <
                        FontAwesomeIcon icon = {
                            ['fas', 'arrows-alt']
                        }
                        /> <
                        /div>
                    )
                } {
                    !fullscreen && ( <
                        div className = {
                            Styles.resize
                        }
                        onMouseDown = {
                            this.onResizeClick
                        }
                        onTouchStart = {
                            this.onResizeClick
                        } >
                        <
                        FontAwesomeIcon icon = {
                            ['fas', 'expand-arrows-alt']
                        }
                        /> <
                        /div>
                    )
                }

                {
                    !fullscreen && ( <
                        div className = {
                            Styles.hide
                        }
                        onClick = {
                            this.onHideClick
                        } >
                        <
                        FontAwesomeIcon icon = {
                            ['fas', hidden ? 'eye-slash' : 'eye']
                        }
                        /> <
                        /div>
                    )
                } <
                /div>
            );
        }

        if (hidden) {
            return ( <
                div / >
            );
        }

        const {
            playing,
            volume,
            muted
        } = this.state;

        return ( <
            div className = "stream-wrapper" >
            <
            ReactPlayer url = {
                url
            }
            playing = {
                playing
            }
            volume = {
                volume
            }
            muted = {
                muted
            }
            width = {
                fullscreen ? '100%' : width
            }
            height = {
                fullscreen ? '100%' : height
            }
            style = {
                fullscreen ? {
                    width: '100%',
                    height: '100%'
                } : {
                    position: 'absolute',
                    transform: `translate(${x}px,${y}px)`
                }
            }
            className = {
                Styles.stream
            }
            playsinline = {
                true
            }
            onPlay = {
                () => {
                    this.setState({
                        playing: true
                    });
                }
            }
            onPause = {
                () => {
                    this.setState({
                        playing: false
                    });
                }
            }
            controls = {
                true
            }
            youtubeConfig = {
                {
                    playerVars: {
                        controls: 1
                    }
                }
            }
            /> <
            /div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        edit: state.edit,
        live: state.live
    };
};

export default connect(mapStateToProps)(withCookies(Stream));