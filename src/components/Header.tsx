import styles from './Header.module.css';
import rocketLogo from '../assets/rocket.svg';

export function Header () {
  return (
    <header className={styles.header}>
      <img src={rocketLogo} alt="Logo do todolist da Rocketseat"/>
      <strong className={styles.title}>
        <span className={styles.to}>to</span>
        <span className={styles.do}>do</span>
      </strong>
    </header>
  )
}