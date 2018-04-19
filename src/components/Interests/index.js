import React from 'react';
import './styles.css';
import movieimage from '../../data/movieimage.jpg';
import hockeyimage from '../../data/hockeyimage.jpg';
import gamingimage from '../../data/gamingimage.jpg';

export const Interests = () => (
  <div className='interests'>
    <h1 className='interests-header'>INTERESTS</h1>
    <div className='hockey'>
      <img src={hockeyimage} className='image' alt='hockey'/>
      <h2 className='hockey-header'>ICE HOCKEY</h2>
      <p>I feel like I should start off by saying, I do not play Ice Hockey, like at all. I have tried to ice skate a few times but painting a mental picture of Bambi on slippery ice would be quite generous to my ability to skate. However, with that out of the way, I love the sport of Ice Hockey. There is something about the pace and the fact that it is so unpredictable makes it so interesting.
      The teams I support is first off the Stockholm team AIK, even though they are struggling in the lower Swedish league now. In NHL I have for as long as I can remember been a fan of the Colorado Avalanche but also the teams NY Rangers and Las Vegas Golden Knights has a space in my heart. Although the team that will always come first is the Three Crowns, the Swedish national team. I will never forget the world championships that led to gold for us, I can still get goosebumps watching the conclusion of those games, especially the penalties against Canada that gave us gold in 2017. *shivers*</p>
    </div>
    <div className='movies'>
      <img src={movieimage} className='image' alt='movie'/>
      <h2 className='movies-header'>MOVIES</h2>
      <p>If there is one thing I can practically never stop talking about once I get going, it’s motion pictures. Wether it be the small screen or the silver screen, I’m sure to have an opinion about it. I will most likely have different favourites depending on what mood I am in when you ask but on some level I enjoy the majority of the things I watch. However, if I would be forced to pick some top picks from various genres and mediums I would probably say Gladiator, Scrubs, Spider Man 2 and Saving Private Ryan. There is just something about the whole art of motion pictures that pulls me in, the way an actor is able to make me believe his character is real, or how a scene artist can make me feel like I am standing in the middle of a jungle, it is just quite astounding.</p>
    </div>
    <div className='gaming'>
      <img src={gamingimage} className='image' alt='gaming'/>
      <h2 className='gaming-header'>GAMING</h2>
      <p>Now, to pile on the nerdyness from the last interest, I want to mention gaming. The computers I was building as a kid was not usually to used as a tool, it was for entertainment, and while the amount of hours I can and want to sink in to gaming has drastically reduced over the years, it still holds a special place in my heart. To a certain degree I try to stay updated on the esport scene, mostly being interested in DOTA2 tournaments, but also having an ear to the ground about what is happening in the esport world in general. On occasion I will plow a AAA title for a slight escape from reality, most recently I completed Far Cry 5, but for the most part, my gaming time is down to the rare DOTA2 game with some friends, which more often than not ends in a fiery defeat rather than a win.</p>
    </div>
  </div>
);