import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';
import {
    Timer,
    Add,
    Remove
} from '@material-ui/icons';
import {
    decrementDelay,
    incrementDelay,
    setDelay
} from '../actions/delay';
import {
    withCookies
} from 'react-cookie';
import $ from "jquery";

import "./Delay.scss";
import './Tooltip.scss';

class Delay extends Component {

    state = {
        show_dialog: false,
    };

    static DELAY_STEP = 500;

    componentDidMount() {
        const {
            cookies,
            setDelay
        } = this.props;

        let delay = Math.max(parseInt(cookies.get('delay') || 3000), 0);

        setDelay(delay);

        $(window).on('mousedown', this.onMouseDown);
    }

    componentWillUnmount() {
        $(window).off('mousedown', this.onMouseDown);
    }

    onMouseDown = (e) => {
        let target = $(e.target);

        if (target.parents('div.delay').length !== 0) {
            return;
        }

        this.setState({
            show_dialog: false
        });
    };

    handleDelayDialog = (e) => {
        let target = $(e.target);

        if ((target.is('div') && !target.hasClass('delay')) || target.parents('button:not(.delay)').length !== 0) {
            return;
        }

        this.setState({
            show_dialog: !this.state.show_dialog
        })
    };

    handleDecrement = () => {
        const {
            decrementDelay,
            cookies,
            delay
        } = this.props;
        decrementDelay();

        cookies.set('delay', delay - Delay.DELAY_STEP);
    };

    handleIncrement = () => {
        const {
            incrementDelay,
            cookies,
            delay
        } = this.props;
        incrementDelay();

        cookies.set('delay', delay + Delay.DELAY_STEP);
    };

    render() {
        const {
            delay
        } = this.props;

        return ( <
            div className = {
                `delay tooltip ${this.state.show_dialog ? 'hidden' : ''}`
            }
            onClick = {
                this.handleDelayDialog
            } > {
                this.state.show_dialog &&
                <
                button onClick = {
                    this.handleDecrement
                } >
                <
                Remove / >
                <
                /button>
            }

            <
            Timer / >

            <
            span > {
                (delay / 1000).toFixed(1)
            }
            s < /span>

            {
                this.state.show_dialog &&
                    <
                    button onClick = {
                        this.handleIncrement
                    } >
                    <
                    Add / >
                    <
                    /button>
            }

            <
            label > Zmiana opóźnienia < /label> <
            /div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        delay: state.delay
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        decrementDelay: () => {
            dispatch(decrementDelay())
        },
        incrementDelay: () => {
            dispatch(incrementDelay())
        },
        setDelay: (delay) => {
            dispatch(setDelay(delay));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withCookies(Delay))