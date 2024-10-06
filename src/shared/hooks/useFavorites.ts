import { useSelector } from 'react-redux'
import { RootState } from '../../app/stores/mainStore'

export const useFavorites = () => {

  const favorites = useSelector((state: RootState) => state.favorites)
  return favorites
}