
import { useState} from 'react'
import './Ch2.css'

import charactersData from './data/characters.js'

import CharacterCard from './components/CharacterCard/CharacterCard.jsx'
import Header from './components/header/Header.jsx'  


function Character2() {

  const [characters, setCharacters]  = useState(charactersData)

  return (
    <>

    <Header />  
    
  <div className='table'>
    
    {characters.map((character)=>(
      <CharacterCard
       character={character}
       key={character.id} 
       />

    ))}
    
    </div> 
    </>
  )
}


export default Character2
