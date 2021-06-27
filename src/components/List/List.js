import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import Column from '../Column/Column';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator';


class List extends React.Component {

  state = {
    columns: this.props.columns || [],
  }


  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.string,
    description: PropTypes.node,
    columns: PropTypes.array,
    // children: PropTypes.node.isRequired,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
    // children: <p>I can do all the things!!!</p>,
  }

  addColumn(title) {
    this.setState(state => (
      {
        columns: [
          ...state.columns,
          {
            key: state.columns.length ? state.columns[state.columns.length - 1].key + 1 : 0,
            title,
            icon: 'list-alt',
            cards: []
          }
        ]
      }
    ));
  }

  render() {
    return (

      <section className={styles.component}>
        <Hero titleText={this.props.title} image={this.props.image} />
        <div className={styles.description}>
          {ReactHtmlParser(this.props.description)}
          <div className={styles.creator}>
            <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)} />
          </div>
        </div>
        <div className={styles.columns}>
          {this.state.columns.map(({ key, title, ...columnProps }) => (
            <Column key={key} name={title}{...columnProps} />
          ))}
          {/* <Column columns={<div className={styles.creator}>Books</div>} />
          <Column columns={<div className={styles.creator}>Films</div>} />
          <Column columns={<div className={styles.creator}>Game</div>} /> */}
        </div>
      </section>

    )
  }


}

export default List;