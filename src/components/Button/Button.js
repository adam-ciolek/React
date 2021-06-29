/* eslint-disable indent */
import React from 'react';
import styles from './Button.scss';
import PropTypes from 'prop-types';


const Button = ({variant = '', ...otherProps}) => (
 
  // Button.propType = {
  //   variant: PropTypes.string,
  // },

  <button 
  {...otherProps} 
className={styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}
  />
);
  
Button.propType = {
  variant: PropTypes.string,
};

export default Button;
