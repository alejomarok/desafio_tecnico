import React, { useReducer }  from 'react'
import people from '../App';
import query from '../App'



export default function People() {
  return (
    <div>
        <h1>People</h1>

        <ul className="list">
            {people.filter((people) =>
            people.name.toLowerCase().includes(query)
            ).map((people) => (
                <li key={people.name} className="listItem">
                       {people.name} 
                </li>
                ))}
        </ul>


    </div>
  )
}


