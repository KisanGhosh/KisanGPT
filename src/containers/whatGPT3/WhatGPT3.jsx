import React from 'react';
import './whatGPT3.css';
import Feature  from '../../components/feature/Feature';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature  title="What is GPT-3" text="GPT-3, short for 'Generative Pre-trained Transformer 3,' is an advanced natural language processing model developed by OpenAI. It's renowned for its ability to generate human-like text based on input prompts, demonstrating impressive language understanding and generation capabilities. GPT-3 has been widely used in various applications, including chatbots, content generation, language translation, and more, marking a significant advancement in AI-driven language technology."/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Chatbots" text="Chatbots are AI-powered virtual assistants designed to simulate human conversation, offering automated responses and assistance in various tasks. Leveraging natural language processing, they enable seamless interaction with users across diverse platforms, from customer service to personal assistants."/>
        <Feature title="Knowledgebase" text="A knowledge base is a centralized repository of information that organizes and stores data, documents, and resources for easy access and retrieval. It serves as a valuable tool for sharing knowledge within organizations and facilitating self-service support for customers."/>
        <Feature title="Education" text="Education is the foundation of personal and societal development, empowering individuals with knowledge, skills, and critical thinking abilities to navigate the world. It encompasses formal instruction, lifelong learning, and the cultivation of intellectual curiosity."/>
      </div>
    </div>
  )
}

export default WhatGPT3