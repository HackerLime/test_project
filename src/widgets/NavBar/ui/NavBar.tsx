import { useFavorites } from '../../../shared/hooks/useFavorites';
import { FavoritesIcon } from '../../../shared/icons/favoritesIcon';
import { HomeIcon } from '../../../shared/icons/homeIcon';
import styles from './NavBar.module.css';

export const NavBar = () => {
  const favorites = useFavorites()
  return (
    <header className={styles.navBar__wrapper}>
      <nav className={styles.navBar__container}>
        <HomeIcon />
        <FavoritesIcon favorites={favorites} />
      </nav>
    </header>



  )
}
