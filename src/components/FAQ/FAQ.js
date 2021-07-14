import React from 'react';
import Container from '../Container/Container';
import styles from './FAQ.scss';
import Hero from '../Hero/Hero';
import { FAQAndMore } from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <div className={styles.component}>
      <h1 className={styles.title}>{FAQAndMore.title}</h1>
      <h2 className={styles.subtitle}>{FAQAndMore.subtitle}</h2>
      <Hero className={styles.image} image={FAQAndMore.image} titleText = {FAQAndMore.imageTitle}/>
      <p className={styles.content}>{FAQAndMore.content}</p>
    </div>
  </Container>
);

export default FAQ;