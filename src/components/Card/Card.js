import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';


class Card extends React.Component {

  static propTypes = {
    cards: PropTypes.array,
    cardName: PropTypes.string
  };

  render() {
    return (
      <div className={styles.component}>
        <h4>{this.props.name}</h4>
      </div>
    )
  }
}

export default Card;