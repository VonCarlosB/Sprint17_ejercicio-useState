import { useState } from 'react'
import './App.css'

function App() {
    const [name, setName] = useState('Sofía')
    // const [newName, setNewName] = useState('')

    const changeName = nombre => {
        setName(nombre)
    }

    // const changeNameTo = nombre => {
    //     setNewName(nombre)
    //     changeName()
    // }

    return(
        <div>
            <h2>Teacher name: {name}</h2>
            <ul>
                <li onClick={() => changeName('Data')}>Data</li>
                <li onClick={() => changeName('Reyes')}>Reyes</li>
                <li onClick={() => changeName('Celia')}>Celia</li>
            </ul>
        </div>
    )
}

export default App
