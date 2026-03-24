import Character1 from './assets/Character1/Ch1.jsx';
import Character2 from './assets/Character2/Ch2.jsx';
import Character3 from './assets/Character3/components/CharacterList/CharacterList.jsx';

import { Routes, Route } from 'react-router-dom'
import NotFound from './assets/NotFound/NotFound.jsx';
import Layout from './assets/Layout/Layout.jsx';


function App() {
  




  return (
    <>


      <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<Character1 />} />
        <Route path="/character2" element={<Character2 />} />
        <Route path="/character3" element={<Character3 />} />
        
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  )
}

export default App;

