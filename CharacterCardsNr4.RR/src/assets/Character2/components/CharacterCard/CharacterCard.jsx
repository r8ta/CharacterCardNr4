import Card from 'react-bootstrap/Card'
import './CharacterCard.css'

function CharacterCard({character}) {



  return (

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
    )
}

export default CharacterCard

