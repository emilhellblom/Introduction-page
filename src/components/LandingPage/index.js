import React, { Component } from 'react';
import Typing from 'react-typing-animation';
import './styles.css';


class Home extends Component {
  render() {
    return (
      <div className='home'>
        <Typing className='intro'>
          Hi, and welcome to my website!
        </Typing>
      </div>
    );
  }
}

export default Home;
