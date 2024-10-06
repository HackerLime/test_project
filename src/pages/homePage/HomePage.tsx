import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleFavorites } from '../../entities/favorites/model/Favorites.slice'
import { Post } from '../../entities/posts'
import { useGetPostsQuery } from '../../entities/posts/api/postsApi'
import type { PostPropsTypes } from '../../entities/posts/ui'
import { rangeToArray } from '../../features/utils/rangeToArray'
import { Pagination } from '../../shared/ui/pagination/UI/Pagination'

export const HomePage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const limit = 5
  const [pages, setPages] = useState<number[]>([1])
  const { isLoading, isError, data } = useGetPostsQuery({ page: currentPage, limit })
  const { posts, totalCount } = data || { posts: [], totalCount: 0 }
  useEffect(() => {
    if (totalCount) {
      setPages(rangeToArray(1, Math.ceil(totalCount / limit)))
    }
  }, [totalCount, limit])

  const dispatch = useDispatch()



  const addFavorites = (args: Omit<PostPropsTypes, 'addFavorites'>) => {
    return dispatch(toggleFavorites(args))
  }


  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (isError) {
    return <h1>Какая то Ошибка</h1>
  }

  return (
    <>
      <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {posts.map(post => <Post key={post.id} id={post.id} title={post.title} body={post.body} addFavorites={addFavorites} />)}
    </>
  )

}
