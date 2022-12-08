import React from 'react'
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css' ;

const Home = () => {

  return (
    <Layout title='Welcome'>
      <div>Estás en index</div>
    </Layout>
  )
}

export default Home

