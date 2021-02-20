import React from 'react';

import styles from './CardGrid.module.scss';

const CardGrid = ({ children }) => {
    return <div className={styles['grid']}>{children}</div>;
};

export default CardGrid;
