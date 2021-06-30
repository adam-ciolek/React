import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Creator from '../Creator/Creator';
import Card from '../Card/Card';
import { settings } from '../../data/dataStore';
import Icon from './Icon';


class Column extends React.Component {

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  static propTypes = {
    cards: PropTypes.array,
    title: PropTypes.string,
    icon: PropTypes.node,
    addCard: PropTypes.func,
  };


  render() {
    const {title , icon, cards, addCard} = this.props;
    return (

      <section className={styles.component}>
        <h3 className={styles.title}><span className={styles.icon}><Icon name={icon} /></span>{title}</h3>

        <div>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData}/>
          ))}
        </div>

        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={addCard} />
        </div>   

      </section>
    );
  }


}


export default Column;