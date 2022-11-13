import React, {
    Component
} from 'react';
import {
    withCookies
} from 'react-cookie';
import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome';
import {
    connect
} from 'react-redux';
import $ from 'jquery';
import MovingChat from './MovingChat';
import {
    setChatPosition
} from '../../actions/chat';

import Styles from './Chat.module.scss';

class Chat extends Component {

    state = {
        width: 350,
        moving: false,
        resizing: false,
        hidden: false,
        rel: {
            x: 0,
            y: 0
        },
        ghost: {
            x: 0,
            y: 0
        },
        windowWidth: window.innerWidth
    };

    constructor(props) {
        super(props);

        this.chatElement = React.createRef();
    }

    componentDidMount() {
        const {
            cookies,
            setChatPosition
        } = this.props;

        let position = cookies.get('chat.position') || 'right';
        let width = parseFloat(cookies.get('chat.width') || 350);
        let hidden = cookies.get('chat.hidden') === 'true';

        this.setState({
            width: width,
            hidden: hidden
        });

        setChatPosition(position);

        $(window).mousemove(this.onMouseMove);
        $(window).mouseup(this.onMouseUp);
    }

    componentWillUnmount() {
        $(window).off('mousemove');
        $(window).off('mouseup');
        $(window).off('resize');
    }

    onMoveClick = (e) => {
        e.persist();

        if (e.button !== 0) {
            return;
        }

        let x = e.pageX - this.chatElement.current.offsetLeft;
        let y = e.pageY - this.chatElement.current.offsetTop;

        this.setState({
            moving: true,
            rel: {
                x: x,
                y: y
            },
            ghost: {
                x: e.clientX - x,
                y: e.clientY - y
            }
        });
    };

    onResizeClick = (e) => {
        e.persist();

        if (e.button !== 0) {
            return;
        }

        this.setState({
            resizing: true
        });
    };

    onMouseMove = (e) => {
        const {
            cookies,
            chat,
            setChatPosition
        } = this.props;

        if (this.state.moving) {
            let half = $('body').outerWidth() / 2;

            let x = e.clientX - this.state.rel.x;
            let y = e.clientY - this.state.rel.y;

            let position = e.clientX < half ? 'left' : 'right';

            this.setState({
                ghost: {
                    x: x,
                    y: y
                }
            });

            setChatPosition(position);

            cookies.set('chat.position', position);
        } else if (this.state.resizing) {
            const bodyElement = $('body');

            let width = Math.round(Math.max(150, Math.min((chat.position === 'left' ? e.clientX : bodyElement.outerWidth() - e.clientX), bodyElement.outerWidth() * 0.5)));

            this.setState({
                width: width
            });

            cookies.set('chat.width', width);
        }
    };

    onMouseUp = (e) => {
        if (e.button !== 0) {
            return;
        }

        this.setState({
            moving: false,
            resizing: false
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

        cookies.set('chat.hidden', hidden);
    };

    render() {
        let mobile = 'ontouchstart' in window || navigator.msMaxTouchPoints;

        const {
            edit,
            chat
        } = this.props;
        const channel = process.env.REACT_APP_CHANNEL;
        const poorchat = process.env.REACT_APP_POORCHAT;
        // const { hidden } = this.state;
        const hidden = false;
        const {
            moving
        } = this.state;

        if (edit) {
            if (moving) {
                return ( <
                    div >
                    <
                    div className = {
                        [
                            Styles.chat,
                            Styles.ghost
                        ].join(' ')
                    }
                    style = {
                        {
                            width: this.state.width,
                            height: '100vh'
                        }
                    }
                    />

                    <
                    MovingChat x = {
                        this.state.ghost.x
                    }
                    y = {
                        this.state.ghost.y
                    }
                    width = {
                        this.state.width
                    }
                    position = {
                        chat.position
                    }
                    hidden = {
                        this.state.hidden
                    }
                    /> <
                    /div>
                )
            }

            return ( <
                div className = {
                    [
                        Styles.chat,
                        Styles.edit,
                        chat.position
                    ].join(' ')
                }
                style = {
                    {
                        width: this.state.width
                    }
                }
                ref = {
                    this.chatElement
                } >
                <
                FontAwesomeIcon icon = {
                    ['fas', 'comment-alt']
                }
                style = {
                    {
                        color: hidden ? '#DF3D62' : undefined
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
                }
                onMouseDown = {
                    this.onMoveClick
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
                }
                onMouseDown = {
                    this.onResizeClick
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
                }
                onClick = {
                    this.onHideClick
                } >
                <
                FontAwesomeIcon icon = {
                    ['fas', hidden ? 'eye-slash' : 'eye']
                }
                /> <
                /div> <
                /div> <
                /div>
            );
        }

        if (this.state.hidden) {
            return ( <
                div / >
            );
        }

        return ( <
            div className = {
                Styles.chat
            }
            ref = {
                this.chatElement
            } >
            <
            iframe frameBorder = "0"
            title = "chat"
            scrolling = "no"
            id = "chat_embed"
            src = {
                poorchat ? `https://client.poorchat.net/${poorchat}` : `https://www.twitch.tv/embed/${channel}/chat?darkpopout`
            }
            style = {
                {
                    width: mobile ? '100%' : this.state.width,
                    flex: '100%'
                }
            } >
            <
            /iframe> <
            /div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        edit: state.edit,
        chat: state.chat
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setChatPosition: (position) => {
            dispatch(setChatPosition(position))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withCookies(Chat))