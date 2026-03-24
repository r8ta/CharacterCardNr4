import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import './Ch1.css'



function Character1() {

  const characters = [
    {
      name: "Mario" ,
      age: 36,
      job: "Plumber",
      img: "./src/assets/img/Mario.jpeg",
    },
    {
      name: "Link",
      age: 17,
      job: "Hero",
      img: "./src/assets/img/Link.jpeg",
    },
    {
      name: "Pikachu",
      age: 5,
      job: "Electric mouse",
      img: "./src/assets/img/Pikachu.png",
    },
    {
      name: "Harry Potter",
      age: 12,
      job: "Wizard",
      img: "./src/assets/img/HarryPotter.jpeg",
    },
    {
      name: "Percy Jackson",
      age: 15,
      job: "Half god",
      img: "./src/assets/img/PercyJackson.jpeg",
    },
    {
      name: "Vilis",
      age: 18,
      job: "Žvalgo mokinys",
      img: "./src/assets/img/Vilis.jpeg",
    },
  ]

  return (
    <>

    <div className='table'>

    <header className='title'>Character Catalog</header>
   { characters.map((character, index) => (
    <div className='container'>
      <Card style={{ width: '16rem' }}>
        <Card.Img src={character.img} />
      <Card.Body>

        <Card.Title>
          Name:  {character.name}
        </Card.Title>

        <Card.Text>
          Age:  {character.age}
          <br />
          Job:  {character.job}
        </Card.Text>

      </Card.Body>
    </Card>
    </div>
   ))}
    </div>
    </>
  );
}


export default Character1
