import React, {
    useState,
    useEffect
} from 'react';
import {
    useSelector,
    useDispatch
} from 'react-redux';
import {
    useCookies
} from 'react-cookie';

//Components
import Tooltip from '../Tooltip/Tooltip';
import {
    Timer,
    Add,
    Remove
} from '@material-ui/icons';

//Actions
import {
    setDelay,
    decrementDelay,
    incrementDelay
} from '../../actions/delay';

//Styles
import Styles from './Delay.module.scss';

const DEFAULT_DELAY = 3000;
const DELAY_STEP = 500;

const Delay = () => {

    const [showDialog, setShowDialog] = useState(false);
    const delay = useSelector(state => state.delay);
    const dispatch = useDispatch();
    const [cookies, setCookie] = useCookies(['delay']);

    useEffect(() => {
        const delay = Math.max(parseInt(cookies.delay || DEFAULT_DELAY), 0);
        dispatch(setDelay(delay));
    }, []);

    const handleClick = () => {
        setShowDialog(!showDialog);
    }

    const handleDecrement = () => {
        dispatch(decrementDelay());
        setCookie('delay', delay - DELAY_STEP);
    };

    const handleIncrement = () => {
        dispatch(incrementDelay());
        setCookie('delay', delay + DELAY_STEP);
    };

    return ( <
        Tooltip tooltip = 'Zmiana opóźnienia' >
        <
        div className = {
            Styles.delay
        } > {
            showDialog && ( <
                button className = {
                    Styles.decrement
                }
                onClick = {
                    handleDecrement
                } >
                <
                Remove / >
                <
                /button>
            )
        }

        <
        button className = {
            Styles.button
        }
        onClick = {
            handleClick
        } >
        <
        Timer / >
        <
        span > {
            (delay / 1000).toFixed(1)
        }
        s <
        /span> <
        /button>

        {
            showDialog && ( <
                button className = {
                    Styles.increment
                }
                onClick = {
                    handleIncrement
                } >
                <
                Add / >
                <
                /button>
            )
        } <
        /div> <
        /Tooltip>
    )
};

export default Delay