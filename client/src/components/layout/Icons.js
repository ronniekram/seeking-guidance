import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faPlusCircle, faBook, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import styles from './assets/icons.module.scss';

const Icons = () => {

  const handleClick = () => {

  };

  return (
    <div className={styles.container}>
      <div>
        <FontAwesomeIcon 
          id="info"
          icon={faInfo} 
          className={styles.icon}
          onClick={handleClick}
        />
      </div>

      <div>
        <FontAwesomeIcon 
          id="info"
          icon={faBook} 
          className={styles.icon}
          onClick={handleClick}
        />
      </div>

      <div>
        <FontAwesomeIcon 
          id="info"
          icon={faPlusCircle} 
          className={styles.icon}
          onClick={handleClick}
        />
      </div>

    </div>
  );
}

export default Icons;
