import React, { Component } from 'react';
import './styles.css';
import { Icon } from 'react-materialize'
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';

const NavBar = ({toggleNavBar, expanded}) => (
  <div className='nav'>
    <div onClick={ toggleNavBar } className='nav-icon'><Icon medium>menu</Icon></div> 
    <div className={`nav-content expanded-${expanded}`}>
      <div className='nav-links'>
        <Link to="/" onClick={ toggleNavBar }>Home</Link>
        <Link to="/about" onClick={ toggleNavBar }>About</Link>
        <Link to="/interests" onClick={ toggleNavBar }>Interests</Link>
        <Link to="/portfolio" onClick={ toggleNavBar }>Portfolio</Link>
      </div>
      <div className='social'>
        <SocialIcon className='social-links' url="https://github.com/emilhellblom" />
        <SocialIcon className='social-links' url="https://twitter.com/EMHellbom" />
        <SocialIcon className='social-links' url="https://www.facebook.com/Varriot" />
        <SocialIcon className='social-links' url="https://www.instagram.com/varriot/" />
      </div>
    </div> 
  </div>
);

class BaseLayout extends Component {
  state = {
    expanded: false,
  }

  toggleNavBar = () => {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    return (
      <div className='base-layout'>
        <div className='base-content'>
          <div className='header'>
            <NavBar 
              toggleNavBar={ this.toggleNavBar }
              expanded={ this.state.expanded } /> 
          </div>
          <div className={`visible-${this.state.expanded} wrapper`} />
          <div className='content'>
            { this.props.children }
          </div>
        </div>
      </div>     
    );
  }
}

export default BaseLayout;
