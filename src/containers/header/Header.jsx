import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import face from '../../assets/face2.jpg';

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let's Build Something amazing with GPT-3 Open AI</h1>
        <p>Explore the limitless possibilities of language with OpenAI's GPT-3-powered website. From creative writing to problem-solving, unleash the power of AI-generated text at your fingertips.</p>

        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt='people' />
          <p>1,600 people requested acress a visit in last 24 hours</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
          <img src={face} alt='image' />
      </div>
    </div>
  )
}

export default Header