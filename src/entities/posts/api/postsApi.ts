import { createApi, fetchBaseQuery, FetchBaseQueryMeta } from '@reduxjs/toolkit/query/react';
import { Post } from './types';

type PostsResponse = {
  posts: Post[],
  totalCount: number

}




const postsBaseUrl = 'https://jsonplaceholder.typicode.com/posts'
export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: postsBaseUrl }),
  endpoints: (builder) => ({
    getPosts: builder.query<PostsResponse, { page: number, limit: number }>({
      query: ({ page, limit }) => `?_page=${page}&_limit=${limit}`,
      transformResponse: (response: Post[], meta: FetchBaseQueryMeta | undefined) => {
        return {
          posts: response,
          totalCount: Number(meta?.response?.headers.get('X-TOTAL-COUNT')) || 0
          ,
        }
      }

    }),
  }),
})


export const { useGetPostsQuery } = postsApi