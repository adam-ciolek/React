import React from 'react';
import styles from './Hero.scss';



class Hero extends React.Component {
  render() {
    return (

      <header className={styles.component}>
        <h2 className={styles.title}>React Op</h2>
        <img className={styles.image} src='https://i.postimg.cc/jj06w3Pf/space.pnggit add . ' />
      </header>

    )
  }
};

export default Hero;