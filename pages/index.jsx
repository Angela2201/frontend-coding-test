import React from 'react'
import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

const Home = () => {

  return (
    <Layout title='Welcome'>
      <div className={styles.welcome}>
          <h1>Do you want to meet the best talent?</h1>
      </div>
      <div>
        <Link href={'/people'}>
          <button className={styles.button}>Visit</button>
        </Link>
      </div>
    </Layout>
  )
}

export default Home

