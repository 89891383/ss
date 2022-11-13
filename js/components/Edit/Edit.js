import React, {
    useState
} from 'react';
import {
    useSelector,
    useDispatch
} from 'react-redux';

//Components
import Tooltip from '../Tooltip/Tooltip';
import VideoURL from '../VideoURL';
import LiveModal from '../LiveModal/LiveModal';
import {
    Dashboard
} from "@material-ui/icons";
import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

//Actions
import {
    toggleEditMode
} from '../../actions/edit';

//Styles
import Styles from './Edit.module.scss';

const Edit = ({
    visible
}) => {
    const [sourcesModalVisible, setSourcesModalVisible] = useState(false);
    const [liveModalVisible, setLiveModalVisible] = useState(false);

    const edit = useSelector(state => state.edit);
    const dispatch = useDispatch();

    const handleEdit = () => {
        dispatch(toggleEditMode());
    };

    if (edit) {
        return (
            //TODO
            // <div className={Styles.editContainer}>

            // </div>

            <
            div className = {
                `edit-box ${visible ? 'enabled' : ''}`
            } >
            <
            button className = "edit"
            onClick = {
                handleEdit
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
                        () => setSourcesModalVisible(true)
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
                        () => setLiveModalVisible(true)
                    } >
                    <
                    FontAwesomeIcon icon = {
                        'broadcast-tower'
                    }
                /> <
                /button>
            }

            {
                edit && sourcesModalVisible && ( <
                    VideoURL visible = {
                        this.state.sources_modal
                    }
                    setVisible = {
                        (visible) => setSourcesModalVisible(visible)
                    }
                    />
                )
            }

            {
                edit && liveModalVisible && ( <
                    LiveModal visible = {
                        this.state.live_modal
                    }
                    setVisible = {
                        visible => setLiveModalVisible(visible)
                    }
                    />
                )
            } <
            /div>
        )
    }

    return ( <
        Tooltip >
        <
        button className = {
            Styles.edit
        }
        onClick = {
            handleEdit
        } >
        <
        Dashboard / >
        <
        /button> <
        /Tooltip>
    );
};

export default Edit