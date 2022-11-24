import React  from 'react'
import { Card, Grid } from 'semantic-ui-react';





export default function Planets({ data }) {
  return (
    <div>
        <h1>Planets</h1>
        <Grid columns={3}>
            {data.map((planets, i ) => {
                return(
                    <Grid.Column key={i} >
                     <Card>
                        <Card.Content>
                            <Card.Header>
                                {planets.name}
                            </Card.Header>
                            <Card.Description>
                                <strong>Height</strong>
                                <p>{planets.height}</p>
                                <strong>Mass</strong>
                                <p>{planets.mass}</p>
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
