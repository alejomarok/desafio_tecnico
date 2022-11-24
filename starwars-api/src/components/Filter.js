import React, { useReducer }  from 'react'




export default function People({ data }) {
  return (
    <div>
        <h1>FILTRADO POR NOMBRE</h1>
        <input type="text" placeholder="search..." className="Search" onChange={e=> setQuery(e.target.value)}/>
    </div>
  )
}







