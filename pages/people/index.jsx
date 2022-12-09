import React from 'react'
import Layout from '../../components/Layout'
import { getItems } from '../../services/itemService'
import Person from '../../components/Person';
import styleItems from '../../styles/Person.module.css';

function index({ items }) {
  return (
    <Layout>
      <h1>People</h1>
      <div className={styleItems.items}>
        {items && items.map((item) => (
          <Person key={item.id} item={item} showAs='Default'/>
        ))}
      </div>
    </Layout>
  )
}
export default index

export async function getStaticProps() {
  const res = await getItems();

  return {
    props:{
      items: res,
    }
  }
}
