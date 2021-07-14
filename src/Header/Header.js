import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import  styles  from './Header.scss';
import Container from '../components/Container/Container';
import Icon from '../components/Icon/Icon';
import Search from '../components/Search/Search';

class Header extends React.Component{

  render(){

    return (
      <header className = {styles.component}>
        <Container>
          <div className = {styles.wrapper}>
            <Link  to= '/' className = {styles.logo}> 
              <Icon name = 'align-right'/>
            </Link>
            <Search />
            <nav>
              <NavLink exact to='/' activeClassName='active'>Home</NavLink>
              <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
              <NavLink exact to='/FAQ' activeClassName='active'>FAQ</NavLink>
            </nav>
          </div>
        </Container>
      </header>

    );
  }
}

export default Header;