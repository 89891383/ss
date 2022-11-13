import React, {
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
    Sync as SyncIcon,
    SyncDisabled
} from '@material-ui/icons';

//Actions
import {
    setSync,
    toggleSync
} from '../../actions/sync';

//Styles
import Styles from './Sync.module.scss';

const Sync = () => {
    const sync = useSelector(state => state.sync);
    const dispatch = useDispatch();
    const [cookies, setCookie] = useCookies(['sync']);

    useEffect(() => {
        const sync = (cookies.sync || 'true') === 'true';
        dispatch(setSync(sync));
    }, []);

    const handleClick = () => {
        setCookie('sync', !sync);
        dispatch(toggleSync());
    };

    return ( <
        Tooltip tooltip = {
            `${sync ? 'Wyłącz' : 'Włącz'} synchronizację`
        } >
        <
        button className = {
            Styles.sync
        }
        onClick = {
            handleClick
        } > {
            sync ? < SyncIcon / > : < SyncDisabled / >
        } <
        /button> <
        /Tooltip>
    )
};

export default Sync