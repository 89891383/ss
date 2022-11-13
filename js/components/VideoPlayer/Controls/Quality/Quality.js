import React, {
    useState
} from 'react';
import {
    useSelector,
    useDispatch
} from 'react-redux';
import {
    useCookies
} from 'react-cookie';

import classNames from 'classnames/bind';

import Tooltip from '../../../Tooltip/Tooltip';

import {
    Settings
} from '@material-ui/icons';

//Actions
import {
    setQuality
} from '../../../../actions/video';

//Styles
import Styles from './Quality.module.scss';

const Quality = () => {
        const [showDialog, setShowDialog] = useState(false);
        const sources = useSelector(state => state.video.sources);
        const selectedQuality = useSelector(state => state.video.quality);
        const dispatch = useDispatch();
        const setCookie = useCookies(['quality'])[1];

        const handleQualityDialog = () => {
            setShowDialog(!showDialog);
        };

        const handleQualityChange = (quality) => {
            dispatch(setQuality(quality));
            setCookie('quality', quality);
        };

        return ( <
                div className = {
                    Styles.container
                } >
                <
                Tooltip tooltip = {
                    'Zmiana jakości'
                } >
                <
                button className = {
                    Styles.quality
                }
                onClick = {
                    handleQualityDialog
                } >
                <
                Settings / >

                <
                span > {
                    selectedQuality
                } <
                /span> <
                /button> <
                /Tooltip>

                {
                    showDialog && ( <
                        ul className = {
                            Styles.dialog
                        } > {
                            Object.keys(sources).map(quality => < li key = {
                                    quality
                                }
                                className = {
                                    classNames(Styles.quality, {
                                        [Styles.selected]: selectedQuality === quality
                                    })
                                }
                                onClick = {
                                    () => handleQualityChange(quality)
                                } > {
                                    quality
                                } < /li>)} <
                                /ul>
                            )
                        } <
                        /div>
                    );
                };

                export default Quality

                // import Styles from './Quality.module.scss';

                // class Quality extends Component {

                //     state = {
                //         show_dialog: false
                //     };

                //     componentDidMount() {
                //         $(window).on('mousedown', this.onMouseDown);
                //     }

                //     componentWillUnmount() {
                //         $(window).off('mousedown', this.onMouseDown);
                //     }

                //     onMouseDown = (e) => {
                //         let target = $(e.target);

                //         if(target.parents('button.quality').length !== 0) {
                //             return;
                //         }

                //         this.setState({
                //             show_dialog: false
                //         });
                //     };

                //     handleQualityDialog = () => {
                //         this.setState({
                //             show_dialog: !this.state.show_dialog
                //         });
                //     };

                //     handleQualityChange = (quality) => {
                //         const { cookies, video, setQuality } = this.props;

                //         setQuality(quality);

                //         cookies.set('quality', quality);

                //         let src = video.sources[quality][Math.floor(Math.random() * video.sources[quality].length)];

                //         const videoElement = $('video.video');

                //         videoElement.find('source').attr('src', src);
                //         videoElement[0].load();
                //         videoElement[0].currentTime = video.current_time;
                //     };

                //     render() {
                //         const { video } = this.props;

                //         return (
                //             <button className={`quality tooltip ${this.state.show_dialog ? 'hidden' : ''}`} onClick={this.handleQualityDialog}>
                //                 <Settings/>

                //                 <span>{video.quality}</span>

                //                 {this.state.show_dialog &&
                //                 <ul>
                //                     {Object.keys(video.sources).map((quality) => {
                //                         return (
                //                             <li key={quality} className={quality === video.quality ? 'selected' : undefined} onClick={() => this.handleQualityChange(quality)}>{quality}</li>
                //                         )
                //                     })}
                //                 </ul>
                //                 }

                //                 <label>Zmiana jakości</label>
                //             </button>
                //         );
                //     }

                // }

                // const mapStateToProps = (state) => {
                //     return {
                //         video: state.video
                //     };
                // };

                // const mapDispatchToProps = (dispatch) => {
                //     return {
                //         setQuality: (quality) => {
                //             dispatch(setQuality(quality));
                //         }
                //     }
                // };

                // export default connect(mapStateToProps, mapDispatchToProps)(withCookies(Quality))