import { Route, Routes } from 'react-router-dom'
import { FavoritesPage } from '../../pages/favorites'
import { HomePage } from '../../pages/homePage'

export const AppRouter = () => {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/favorites' element={<FavoritesPage />} />
      <Route path='*' element={<HomePage />} />
    </Routes>
  )
}
