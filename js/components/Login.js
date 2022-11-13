import React, {
    Component
} from 'react';

import Styles from './Login.scss';

class Login extends Component {

    _handleClick = () => {

    };

    render() {
        return ( <
            button className = {
                Styles.button
            }
            onClick = {
                this._handleClick
            } >
            Zaloguj się przez Twitch <
            /button>
        )
    }

}

export default Login