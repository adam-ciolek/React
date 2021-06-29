import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
// import Creator from '../Creator/Creator';
import Card from '../Card/Card';
// import { settings } from '../../data/dataStore';
import Icon from './Icon';


class Column extends React.Component {


  static propTypes = {
    // columns: PropTypes.array,
    cards: PropTypes.array,
    title: PropTypes.string,
    icon: PropTypes.node,
  };


  render() {
    const {title , icon, cards} = this.props;
    return (

      <section className={styles.component}>
        <h3 className={styles.title}><span className={styles.icon}><Icon name={icon} /></span>{title}</h3>

        <div>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData}/>
          ))}
        </div>

        {/* <div>
          <Creator text={settings.cardCreatorText} action={title => this.addColumn(title)} />
        </div> */ } 

      </section>
    );
  }


}


export default Column;