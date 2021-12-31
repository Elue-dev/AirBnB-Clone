import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Home from './pages/Home/Home'
import SingleFullVenue from './pages/SingleFullVenue/SingleFullVenue'
import Modal from './utility/Modal/Modal'
import NavBar from './utility/NavBar/NavBar'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <NavBar />
          <Modal />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/venue/:vId' element={<SingleFullVenue />} />
            <Route exact path ='/' element={<Modal />} />
          </Routes>
        </div>
      </Router>
    )
  }
}
