import React from 'react';
import './styles.css';
import quizimage from '../../data/reactquiz.png';
import robofriendsimage from '../../data/robofriends.png';

export const Portfolio = () => (
  <div className='portfolio'>
    <h1 className='portfolio-header'>PORTFOLIO</h1>
    <div className='robofriends'> 
      <img src={robofriendsimage} className='image' alt='robofriends'/>
      <div className='robofriends-content'>
        <a className='link' href='https://emilhellblom-robofriends.herokuapp.com/' target='_blank'>
          <h2>Robofriends</h2>
        </a>
        <p>This is the first React app I ever created. I made it during an online course I took over the christmas.</p>
      </div>
    </div>
    <div className='react-quiz'>
      <img src={quizimage} className='image' alt='quiz' />
      <div className='quiz-content'>
        <a className='link' href='https://sleepy-shelf-20363.herokuapp.com/' target='_blank'>
          <h2 className>React Quiz</h2>
        </a>
        <p>The first React app I created entirely by myself. Designwise it might not be my proudest moment, but I am still learning and trying to make it better and better as I learn more!</p>
      </div>
    </div>
  </div>
);