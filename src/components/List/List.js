import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/hero';
import PropTypes from 'prop-types';
import Column from '../Column/Column';

class List extends React.Component {

  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    img: PropTypes.string
  }

  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }


  render() {
    return (

      <section className={styles.component}>
        <Hero titleText={this.props.title} img={this.props.img} />
        <div className={styles.description}>
          {/* children component from App.js tag <p> */}
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column columns={<div className={styles.creator}>Books</div>} />
          <Column columns={<div className={styles.creator}>Films</div>} />
          <Column columns={<div className={styles.creator}>Game</div>} />

        </div>
      </section>

    )
  }
}

export default List;