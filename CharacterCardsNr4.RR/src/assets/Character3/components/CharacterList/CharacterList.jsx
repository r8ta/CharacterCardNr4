import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import CharacterCard from '../CharacterCard/CharacterCard.jsx'
import Header from '../header/Header.jsx'
import charactersData from '../../data/characters.js'
import './CharacterList.css'


function CharacterList() {

    const [characters, setCharacters] = useState(charactersData)
    const [formData, setFormData] = useState({
        id: null,
        name: '',
        age: '',
        job: '',
        img: '',
    })
    const [editCharacterId, setEditCharacterId] = useState(null)





    function addCharacter() {
        if (!formData.name.trim() || !formData.age || !formData.job.trim() || !formData.img.trim())
        return 

        const newCharacter = {
        ...formData,
        id: uuidv4(),
         age: Number(formData.age),
        }

        setCharacters([...characters, newCharacter]);
        setFormData({
            id: null,
            name: '',
            age: '',
            job: '',
            img: '',
        });
    }




   function handleSubmit(e) {
        e.preventDefault();

        if (editCharacterId) {
            updateCharacter();
        } else {
            addCharacter();
        }
    }



    function deleteCharacter(id) {
        setCharacters(prev => 
            prev.filter(character => character.id !== id));
    }


    function startEdit(character) {
        setFormData(character)
        setEditCharacterId(character.id)
    }



    function updateCharacter() {
        setCharacters(prev =>
            prev.map(character =>
                character.id === editCharacterId ?
        { ...formData, description: editCharacterId }
        : character
        )
        );

        setEditCharacterId(null);
        setFormData({ 
            id: null, 
            name: '', 
            age: '', 
            job: '', 
            img: '' 
        });
  }




  return (
    <>

    <Header />  

    <div className='container'>
        <div className='character-list'>

        <form onSubmit={handleSubmit} className='character-form'>
            <input
            type="text"
            placeholder='Name'
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <input
            type="number"
            placeholder='Age'
            value={formData.age}
            onChange={(e) => setFormData({...formData, age: e.target.value})}
            />
            <input
            type="text"
            placeholder='Job'
            value={formData.job}
            onChange={(e) => setFormData({...formData, job: e.target.value})}
            />
            <input
            type="text"
            placeholder='Image URL'
            value={formData.img}
            onChange={(e) => setFormData({...formData, img: e.target.value})}
            />
            <button type='submit'>{editCharacterId ? 'Update' : 'Add'} Character</button>
        </form>
    
        <div className='character-cards'>
            {characters.map((character)=>(
                <CharacterCard
                key={character.id} 
                character={character}
                onEdit={() => startEdit(character)}
                onDelete={() => deleteCharacter(character.id)}
                />

            ))}
        
        </div>
    
    
        </div> 
    </div>
    
 
    </>
  )
}


export default CharacterList