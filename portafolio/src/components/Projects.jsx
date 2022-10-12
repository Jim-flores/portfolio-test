import React from 'react'
import './styles/Projects.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Projects = () => {
  return (
    <div className='projects'>
      <div>
        <h1>Projects</h1>
      </div>
      <div className='projects-list'>
        <Card style={{ width: '18rem', height: '300px'}}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Project 1</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', height: '300px' }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Project 2</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', height: '300px' }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Project 3</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', height: '300px' }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Project 4</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', height: '300px' }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Project 5</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', height: '300px' }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Project 6</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default Projects