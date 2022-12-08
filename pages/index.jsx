import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Link from 'next/link';
import Navbar from '../components/Navbar';

const Home = () => {

  const useData = () => {
    const [people, setPeople] = useState([])

    useEffect(() => {
      axios.get('http://localhost:3001/people/')
      .then((response) => {
        setPeople(response.data)
      });
    }, []);
    return people
  }

  const people = useData()
  const renderedPeople = []
  console.log(people)

  for (let index in people) {
    let renderedPerson = {
      "id": people[index].id,
      "picture": people[index].picture,
      "fullName": people[index].fullName,
      "age": people[index].age,
      "occupation": people[index].occupation
    }

    renderedPeople.push(renderedPerson);
  }

  const handleOptionId = (event) => {
    let id = event.target.id
    console.log(id)
  }

  return (
    <div>
      <Navbar />
      {renderedPeople.map((item, index) => (
        <li key={index}>
          {/* <Link href="/pages/profile/[id].jsx"> */}
            <a href='/profile/<id>' onChange={handleOptionId}>
              {item.picture}
              <ul>
              Full Name: {item.fullName} <br />
              Age: {item.age} <br />
              Occupation: {item.occupation}
              </ul>
            </a>
          {/* </Link> */}
        </li>
      ))}
    </div>
  )
}

export default Home