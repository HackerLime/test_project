import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { FavoritesState } from './types';



//todo Переделаем так чтобы в state хранилось id+title+body
//*По length получим количевсто а рендерится будем с стейта
//!Надо исправить ошибку с типами never[]


const initialState: FavoritesState[] | [] = []

export const Favorites = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorites(initialState, action: PayloadAction<FavoritesState>) {
      if (initialState.some(i => i.id === action.payload.id)) {
        return initialState.filter(i => i.id !== action.payload.id)
      } else {
        return [...initialState, action.payload]
      }
    }
  }
})

export const { toggleFavorites } = Favorites.actions
export default Favorites.reducer
