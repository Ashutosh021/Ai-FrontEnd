import React from 'react'

const About = () => {
  return (
    <div className='about-main'>
      <div className='left'>
          <h3>Developed By Ashutosh</h3>
          <p>A Full Stack Web Developer From Muzaffarnagar , Uttar Pardesh</p>
          <p>Technology used :- React Node Express MongoDB Scss</p>
      </div>
      <div className='right'>
      <div>
        <h3>My Portfolio Website <a href='https://ashutosh-ashen.vercel.app/'>Checkout</a></h3>
      </div>
        <iframe src='https://ashutosh-ashen.vercel.app/'></iframe>
      </div>
    </div>
  )
}

export default About