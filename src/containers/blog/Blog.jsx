import React from 'react';
import './blog.css';
import { Article } from '../../components';
import { blog1, blog2, blog3, blog4, blog5 } from './imports';

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container__groupA'>
          <Article imgUrl={blog1} date="Sep 26,2023" title="From Pixels to Masterpieces: The Intersection of AI and Creative Arts"  />
        </div>
        <div className='gpt3__blog-container__groupB'>
          <Article imgUrl={blog2} date="Sep 26,2023" title="Unveiling the Future: AI's Impact on Healthcare"/>
          <Article imgUrl={blog3} date="Sep 26,2023" title="Transforming Industries: AI's Role in Revolutionizing Manufacturing"/>
          <Article imgUrl={blog4} date="Sep 26,2023" title="Open AI is the future. Let us explore how it is?"/>
          <Article imgUrl={blog5} date="Sep 26,2023" title="Navigating Ethical Dilemmas: AI and Data Privacy in the Digital Age" />
        </div>
      </div>
    </div>
  )
}

export default Blog
