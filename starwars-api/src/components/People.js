import React, { useReducer }  from 'react'
import { Card, Grid } from 'semantic-ui-react';
import people from '../App';
import query from '../App'



export default function People({ data }) {
  return (
    <div>
        <h1>People</h1>

        <Grid columns={3}>
            {people.filter((people)=>
                people.name.toLowercase().includes(query)
            ).map((people, i ) => {
                return(
                    <Grid.Column key={i} >
                     <Card>
                        <Card.Content>
                            <Card.Header key={people.name}>
                                {people.name}
                            </Card.Header>
                            <Card.Description>
                                <strong>Height</strong>
                                <p>{people.height}</p>
                                <strong>Mass</strong>
                                <p>{people.mass}</p>
                            </Card.Description>
                        </Card.Content>
                     </Card>
                    </Grid.Column> 
                )
            })}
        </Grid>

    </div>
  )
}


