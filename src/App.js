import React, { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Apartment from './views/Apartment/Apartment.js'
import Bedroom from './views/Bedroom/Bedroom.js'
import { useSelector } from 'react-redux'
import './App.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#AA4465',
    },
  },
})

function App() {
  const view = useSelector((state) => state.view)
  const [areaChoice, setAreaChoice] = useState('length-width')

  const handleAreaChoice = (event) => {
    setAreaChoice(event.target.value)
  }

  function showView() {
    switch (view.current) {
      case view.options[0]:
        return (
          <Apartment
            areaChoice={areaChoice}
            handleAreaChoice={handleAreaChoice}
          />
        )
      case view.options[1]:
        return <Bedroom areaChoice={areaChoice} />
      default:
        console.log('default')
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <header className='App-header'>{showView()}</header>
      </div>
    </ThemeProvider>
  )
}

export default App

/*

        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
*/
