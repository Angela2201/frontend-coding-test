import React from 'react';
import Link from 'next/link';
import styles from '../styles/Menu.module.css';

function Menu() {
  return (
    <nav className={styles.menu}>
        <div>
            <Link href='/'>
                <a className={styles.link}>Home</a>
            </Link>
            <Link href='/people'>
                <a className={styles.link}>People</a>
            </Link>
        </div>
    </nav>
  )
}

export default Menu