import { FC } from 'react';
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import styles from './FavoritesIcon.module.scss';
type FavoritesArrElemType = {
  id: number;
  title: string;
  body: string;
}

type FavoritesIconProps = {
  favorites: [] | FavoritesArrElemType[]
}



export const FavoritesIcon: FC<FavoritesIconProps> = ({ favorites }) => {

  return (
    <Link to={'/favorites'} className={styles.favoritesIconContainer}>
      <FaHeart fontSize='2em' className={styles.favoritesIcon} />
      <span className={styles.favoritesIconNumber}>{favorites.length}</span>
    </Link>
  )
}
