import React from 'react'
import './styles/Skills.css'


const Skills = () => {
  
  return (
    <div className='skills'>
      <div className='skills-info'>
        <div className="skills-item">
          <h2>HTML</h2>
          <div className="barr">
            <div className="progress" style={{width: '90%'}}></div>
          </div>
        </div>
        <div className="skills-item">
          <h2>CSS</h2>
          <div className="barr">
            <div className="progress" style={{width: '65%'}}></div>
          </div>
        </div>
        <div className="skills-item">
          <h2>JS</h2>
          <div className="barr">
            <div className="progress" style={{width: '80%'}}></div>
          </div>
        </div>
        <div className="skills-item">
          <h2>REACT</h2>
          <div className="barr">
            <div className="progress" style={{width: '70%'}}></div>
          </div>
        </div>
        <div className="skills-item">
          <h2>NODE</h2>
          <div className="barr">
            <div className="progress" style={{width: '50%'}}></div>
          </div>
        </div>
        
        
      </div>
    </div>
  )
}

export default Skills