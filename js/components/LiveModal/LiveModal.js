import React, {
    useState
} from 'react';
import {
    useSelector,
    useDispatch
} from 'react-redux';

//Actions
import {
    setLive
} from '../../actions/live';

//Styles
import Styles from './LiveModal.module.scss';
import Buttons from '../../Styles/Buttons.module.scss';
import Inputs from '../../Styles/Inputs.module.scss';

const LiveModal = (props) => {
    const [url, setURL] = useState('');
    const [fullscreen, setFullscreen] = useState(false);
    const socket = useSelector(state => state.socket);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setURL(e.target.value);
    };

    const handleFullscreenChange = (e) => {
        setFullscreen(e.target.checked);
    };

    const handleCancel = () => {
        props.setVisible(false);
    };

    const handleConfirm = () => {
        dispatch(setLive(fullscreen, url));
        socket.emit('live', {
            url,
            fullscreen
        });
        props.setVisible(false);
    };

    return ( <
        div className = {
            Styles.background
        } >
        <
        div className = {
            Styles.modal
        } >
        <
        label className = {
            Inputs.label
        } > Adres streama < /label> <
        input className = {
            Inputs.input
        }
        type = "text"
        value = {
            url
        }
        onChange = {
            handleChange
        }
        />

        <
        div style = {
            {
                marginTop: 5,
                marginBottom: 5
            }
        } >
        <
        input id = "fullscreen"
        type = "checkbox"
        checked = {
            fullscreen
        }
        onChange = {
            handleFullscreenChange
        }
        /> <
        label htmlFor = "fullscreen" > Tryb pełnoekranowy < /label> <
        /div>

        <
        div className = {
            Styles.buttons
        } >
        <
        button className = {
            Buttons.cancel
        }
        onClick = {
            handleCancel
        } >
        Anuluj <
        /button>

        <
        button className = {
            Buttons.confirm
        }
        onClick = {
            handleConfirm
        } >
        Zatwierdź <
        /button> <
        /div> <
        /div> <
        /div>
    )
};

export default LiveModal