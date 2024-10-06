import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import styles from './HomeIcon.module.scss';
export const HomeIcon = () => {
  return (
    <Link className={styles.homeIcon__link} to={'/'}>
      <FaHome className={styles.homeIcon__icon} />
    </Link>
  )
}
