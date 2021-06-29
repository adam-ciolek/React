import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Column from '../Column/ColumnContainer.js';
// import Creator from '../Creator/Creator';


class List extends React.Component {


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


  render() {
    const {title, image, description, columns} = this.props;
    return (

      <section className={styles.component}>
        <Hero titleText={title} image={image} />
        <div className={styles.description}>
          {ReactHtmlParser(description)}
        </div>
        {/* <div className={styles.creator}>
            <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)} />
          </div> */}
        <div className={styles.columns}>
          {columns.map(columnData => (
            <Column key={columnData.id} {...columnData} />
          ))}
        </div>
      </section>
    );
  }
}

export default List;
