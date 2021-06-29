import React from 'react';
import styles from './App.scss';
import PropTypes from 'prop-types';
import List from '../List/ListContainer.js';


class App extends React.Component {

  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  }

  render() {
    const {title, subtitle, lists} = this.props;
    return (

      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
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
