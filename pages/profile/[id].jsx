import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/router';

function ProfileItem() {
    const router = useRouter();

    const useData = () => {
      const [person, setPerson] = useState([])

      useEffect(() => {
        axios.get('http://localhost:3001/people/')
        .then((response) => {
          setPerson(response.data)
        });
      }, []);
      return person
    }

  const person = useData()
  const renderedPerson = []
  /* console.log(people) */

  for (let index in person) {
    let renderedIdPerson = {
      "id": person[index].id,
      "picture": person[index].picture,
      "fullName": person[index].fullName,
      "age": person[index].age,
      "occupation": person[index].occupation
    }

    renderedPerson.push(renderedIdPerson);
  }

  return (
    <div>Esta es la página del Perfil: {router.query.id}</div>
  )
}

export default ProfileItem