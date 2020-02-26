// App.js

import React from 'react'
import FirstView from './Components/FirstView' //NE PAS OUBLIER DE CHANGER L'IMPORT !
import Navigation from './Navigation/Navigation'
import Home from './Components/Home'

export default class App extends React.Component {
  render() {
    return (
      <Navigation/>
    )
  }
}
