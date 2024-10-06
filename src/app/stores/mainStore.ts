import { combineReducers, configureStore } from '@reduxjs/toolkit';
import FavoritesReducer from '../../entities/favorites/model/Favorites.slice';
import { postsApi } from '../../entities/posts/api/postsApi';
const rootReducer = combineReducers({
  favorites: FavoritesReducer,
  [postsApi.reducerPath]: postsApi.reducer
})

export const mainStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
})


export type RootState = ReturnType<typeof mainStore.getState>
export type AppDispatch = typeof mainStore.dispatch