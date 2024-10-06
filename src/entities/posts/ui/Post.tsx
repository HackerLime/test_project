import { FC } from 'react';
import { FaHeart } from "react-icons/fa";
import { PostPropsTypes } from '.';
import styles from './Post.module.css';
export const Post: FC<PostPropsTypes> = ({ id, title, body, addFavorites }) => {




  return (
    <article className={styles.article_wrapper} >
      {addFavorites ?
        <button
          onClick={() => addFavorites({ id, title, body })}
          className={styles.article_favoriteButton}>
          <FaHeart />
        </button>
        :
        ''
      }

      <h2 className={styles.article_title}>
        <strong>{id}.</strong>
        {title}
      </h2>
      <p className={styles.article_body}>{body}</p>
    </article>
  )
}

