import React from 'react';
import styles from './SearchResult.scss';
import PropTypes from 'prop-types';
import Creator from '../Creator/Creator';
import Card from '../Card/Card';
import { settings } from '../../data/dataStore';



class SearchResult extends React.Component {


  static propTypes = {
    cards: PropTypes.array,
    addCard: PropTypes.func,
    title: PropTypes.string,
  };


  render() {
    const { cards, addCard} = this.props;
    return (

      <section className={styles.component}>
        <h3 className={styles.title}></h3>

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


export default SearchResult;