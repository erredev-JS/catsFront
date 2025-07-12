import React from 'react'
import { Route, Routes } from 'react-router'
import { MainScreen } from '../../Screens/MainScreen'
import { Profile } from '../../Screens/Profile'

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path ="/" element={<MainScreen/>}/>
        <Route path ="/profile" element={<Profile/>}/>
    </Routes>
  )
}
