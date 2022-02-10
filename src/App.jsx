import { TituloEncabezado } from './componentes/title';
import { SearchEmoji } from './componentes/Search';
import { EmojiList } from './componentes/EmojiList';
import {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


let URL = 'http://localhost:3001/emoji'
function App() {
  let [emojis, setEmonijs]= useState([])
  let [buscadorEmoji, setBuscadorEmoji] = useState('')

  useEffect(() =>{
    fetch(URL)
    .then(res => res.json())
    .then(datos =>{
      setEmonijs(datos)
    })
  },[])
  return(
    <div className='container'>
    <TituloEncabezado/>
    <SearchEmoji />
    <EmojiList datos={emojis} itemsPerPage={24} />
    </div>
  )
}
export default App;
