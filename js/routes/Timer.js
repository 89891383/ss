import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';

import {
    setDelay
} from '../actions/delay';

import Styles from './Timer.scss';

class Timer extends Component {

    componentDidMount() {
        const {
            removeDelay
        } = this.props;

        removeDelay();
    }
    render() {
        const {
            video
        } = this.props;

        const current_time = Math.round(video.current_time);

        const h = Math.floor(current_time / 3600);
        const m = Math.floor((current_time % 3600) / 60);
        const s = current_time % 60;

        return ( <
            div className = {
                Styles.timer
            } >
            <
            span > {
                h < 10 ? '0' : Math.floor(h / 10)
            } < /span> <
            span > {
                h % 10
            } < /span> <
            span >: < /span> <
            span > {
                m < 10 ? '0' : Math.floor(m / 10)
            } < /span> <
            span > {
                m % 10
            } < /span> <
            span >: < /span> <
            span > {
                s < 10 ? '0' : Math.floor(s / 10)
            } < /span> <
            span > {
                s % 10
            } < /span> <
            /div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        video: state.video
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeDelay: () => {
            dispatch(setDelay(0))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer)