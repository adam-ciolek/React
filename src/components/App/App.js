import React from 'react';
import styles from './App.scss';
import PropTypes from 'prop-types';
import List from '../List/ListContainer.js';
import Search from '../Search/SearchContainer';

class App extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    lists: PropTypes.array,
  }

  render() {
    const {title, subtitle, lists} = this.props;
    return (

      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        < Search />
        {/* Create Array and in any object always add key */}
        {/* <List title={['Things to do ', <sup key='1'>soon!</sup>]} img={'https://i.postimg.cc/jj06w3Pf/space.pnggit add . '} ></List> */}
        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}
      </main>

    );
  }
}

export default App;
