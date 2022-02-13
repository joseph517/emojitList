import { TituloEncabezado } from './componentes/title';
import { SearchEmoji } from './componentes/Search';
import { EmojiList } from './componentes/EmojiList';
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



let URL = 'http://localhost:3001/emoji'
function App() {
  let [emojis, setEmonijs] = useState([])
  let [busqueda, setBusqueda] = useState('')

  let emojiFilters = emojis.filter((emoji) => {
    let emojiToLowercase = emoji.title.toLowerCase()
    let busquedaToLowerCase = busqueda.toLocaleLowerCase()

    if (emojiToLowercase.includes(busquedaToLowerCase)) {
      return emoji
    }
  })

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(datos => {
        setEmonijs(datos)
      })
  }, [])

  function acutualice(event) {
    setBusqueda(event.target.value)
  }

  return (
    <div className='container'>
      <TituloEncabezado />
      <SearchEmoji valorInput={busqueda} onInputChange={acutualice} />
      <EmojiList datos={busqueda ? emojiFilters : emojis} itemsPerPage={24} />
    </div>
  )
}
export default App;
