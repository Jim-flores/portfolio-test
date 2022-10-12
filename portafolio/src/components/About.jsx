import React from 'react'
import './styles/About.css'


const About = () => {
  return (
    <div className='about'>
      <div className="card-info">
        <div className='about-img'>
          <img src="http://pm1.narvii.com/7407/ec1e986acfe04cc423001298982634cfd4b8ceebr1-2048-1707v2_uhq.jpg" alt="" />
        </div>
          <div className='about-card'>
            <h2>I am software developer</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestiae ex dignissimos minus repellat quidem voluptatem magnam voluptatum assumenda, debitis ea tempore et quo sed id itaque, suscipit unde. Nisi?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestiae ex dignissimos minus repellat quidem voluptatem magnam voluptatum assumenda, debitis ea tempore et quo sed id itaque, suscipit unde. Nisi?</p>
            <button>DOWNLOAD CV</button>
          </div>
      </div>
    </div>
  )
}

export default About