import React from 'react';
import Container from '../Container/Container';
import { AboutMe } from '../../data/dataStore';
import styles from './INFO.scss';
import Hero from '../Hero/Hero';

const Info = () => (
  <Container>
    <div className={styles.component}>
      <h1 className={styles.title}>{AboutMe.title}</h1>
      <h2 className={styles.subtitle}>{AboutMe.subtitle}</h2>
      <Hero className={styles.image} image={AboutMe.image} titleText = {AboutMe.imageTitle}/>
      <p className={styles.content}>{AboutMe.content}</p>
    </div>
  </Container>
);

export default Info;