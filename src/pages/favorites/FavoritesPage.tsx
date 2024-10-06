import { Post } from '../../entities/posts'
import { useFavorites } from '../../shared/hooks/useFavorites'
export const FavoritesPage = () => {

  const favorites = useFavorites()



  return (
    <>
      {favorites.map(post => <Post key={post.id} id={post.id} title={post.title} body={post.body} />)}
    </>
  )
}
