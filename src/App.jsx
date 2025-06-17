import { useState } from 'react'
import './App.css'

function App() {
    const [name, setName] = useState('Sofía')
    const [newName, setNewName] = useState('')

    const changeName = () => {
        if(newName.trim() !== ''){
            setName(newName)
        }
        setNewName('')
    }

    return(
        <>
            <form onSubmit={(e) => {
                    e.preventDefault()
                    changeName()
                }}>
                <input type='text' value={newName} placeholder='Pon el nombre del profe' onChange={(e) => setNewName(e.target.value)} />
                <button type='submit'>Nuevo profesor</button>
            </form>
            <h2>Teacher name: {name}</h2>
            <ul>
                <li onClick={() => setName('Data')}>Data</li>
                <li onClick={() => setName('Reyes')}>Reyes</li>
                <li onClick={() => setName('Celia')}>Celia</li>
            </ul>
        </>
    )
}

export default App
