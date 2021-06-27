import React from 'react';
import styles from './App.scss';
import List from '../List/List';
import { pageContents, listData } from '../../data/dataStore';

class App extends React.Component {

  // static propTypes = {
  //   img: PropTypes.string.isRequired
  // }

  render() {
    return (

      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        {/* Create Array and in any object always add key */}
        {/* <List title={['Things to do ', <sup key='1'>soon!</sup>]} img={'https://i.postimg.cc/jj06w3Pf/space.pnggit add . '} ></List> */}
        <List {...listData} />
      </main>

    )
  }
}

export default App;
