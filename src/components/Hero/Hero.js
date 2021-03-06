import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';


// Props in component  function
const Hero = props => (
  <header className={styles.component}>
    <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>
    <img className={styles.image} src={props.image} />
  </header>
);

Hero.propTypes = {
  titleText: PropTypes.node.isRequired,
  image: PropTypes.string,
};


export default Hero;








// Props in component  class


// class Hero extends React.Component {
//   render() {
//     return (
//       <header className={styles.component}>
//         {/* <h2 className={styles.title}>Things to do</h2> */}
//         <h2 className={styles.title}>{props.titleText}</h2>
//         <img className={styles.image} src='https://i.postimg.cc/jj06w3Pf/space.pnggit add . ' />
//       </header>

//     )
//   }
// };

// <h2 className={styles.title}>{props.titleText}</h2>
