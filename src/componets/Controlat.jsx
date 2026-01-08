import {useState} from 'react'

const Controlat = () => {
  const [dades, setDades] = useState({
    nom: '',
    cognom: ''
  })
const handleImputChange = (event) => {
  setDades({
    ...dades,
    [event.target.name]: event.target.value
  })
  
} 

const handlsubmit = (event) => {
  event.preventDefault();
  alert(`El teu nom és ${dades.nom} i el teu cognom és ${dades.cognom}`)
}


  return (
    <>    <div>Formulari Controlat</div>
    <div>
      <form onSubmit={handlsubmit}>
        <label>
          Nom:
          <input type="text" name="nom" onChange={handleImputChange} />
        </label>
        <label>
          Cognom:
          <input type="text" name="cognom" onChange={handleImputChange} />
        </label>
        <input type="submit" value="Enviar" />  

      </form>
    </div>
    {console.log(dades.nom)}
    </>

  )
}

export default Controlat