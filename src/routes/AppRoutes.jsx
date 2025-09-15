import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home.page'
import Game from '../pages/Game/Game.page'
import Login from '../pages/Login/Login.page'
import Register from '../pages/Register/Register.page'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/play' element={ <Game/> } />
        <Route path='/signin' element={ <Login/> } />
        <Route path='/register' element={ <Register/> } />
    </Routes>
  )
}

export default AppRoutes