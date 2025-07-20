import { Route, Routes } from 'react-router'
import { MainScreen } from '../../Screens/MainScreen'
import { Profile } from '../../Screens/Profile'
import { MyCats } from '../../Screens/MyCats'
import { Administration } from '../../Screens/Administration'

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path ="/" element={<MainScreen/>}/>
        <Route path ="/profile" element={<Profile/>}/>
        <Route path ="/admin" element={<Administration/>}/>
        <Route path ="/MyCats" element={<MyCats/>}/>
    </Routes>
  )
}
