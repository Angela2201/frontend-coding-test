import React from 'react'
import Layout from '../../components/Layout'
import Person from '../../components/Person'
import { getItemData, getPathsFromIds } from '../../lib/utils'

function ProfilePage({ personInfo }) {

  return (
    <Layout>
        <Person item={personInfo.data} showAs="Page" />
    </Layout>
  )
}

export default ProfilePage

export async function getStaticPaths() {
    const paths = await getPathsFromIds();

    return {
        paths: paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const id = params.id;
    const person = await getItemData(id);

    return {
        props:{
            personInfo: person,
        },
    };
}