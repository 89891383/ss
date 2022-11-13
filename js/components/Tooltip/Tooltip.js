import React from 'react';

import Styles from './Tooltip.module.scss';

const Tooltip = (props) => ( <
    div className = {
        [
            props.className,
            Styles.tooltip
        ].join(' ')
    } > {
        props.children
    }

    <
    label className = {
        Styles.label
    } > {
        props.tooltip
    } < /label> <
    /div>
);

export default Tooltip