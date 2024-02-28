import React from 'react'
import './features.css';
import { Feature } from '../../components';

const featuresData = [
  {
    title: 'Improving and distrusts instantly',
    text:'Improving trust requires consistent actions and transparency, which cannot be achieved instantly.'
  },
  {
    title: 'Become the tended active',
    text:"Embracing proactive engagement fosters growth and development in one's journey towards becoming a more fulfilled individual."
  },
  {
    title: 'Message or am nothing',
    text:"The essence of existence lies in the message we convey, for without it, our presence remains inconsequential"
  },
  {
    title:'Really boy law county',
    text:"Exploring the law of the land, a county boy finds his true identity."
  },
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding ' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started </p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text}  key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Features