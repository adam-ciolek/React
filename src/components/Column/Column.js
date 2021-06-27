import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';


class Column extends React.Component {

  static propTypes = {
    columns: PropTypes.array,
  };

  render() {
    return (

      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.name}</h3>
      </section>
    )
  }


}


export default Column;