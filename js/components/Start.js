import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';

import {
    clickStart
} from "../actions/start";

import Style from './Start.scss';

class Start extends Component {

    handleClick = () => {
        const {
            clickStart
        } = this.props;
        clickStart();
    };

    render() {
        return ( <
            div className = {
                Style.container
            } >
            <
            img src = "/static/images/pajalw.png"
            alt = "" / >

            <
            button onClick = {
                this.handleClick
            } >
            Kliknij, aby otworzyć odtwarzacz <
            /button> <
            /div>
        )
    }

}

const mapStateToProps = () => {};

const mapDispatchToProps = (dispatch) => {
    return {
        clickStart: () => {
            dispatch(clickStart())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Start)