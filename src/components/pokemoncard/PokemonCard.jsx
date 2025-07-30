import React from 'react'
import {Card, CardActionArea, CardContent, CardMedia, Typography} from '@mui/material'

function PokemonCard({pokemon}) {
    if (!pokemon) return <div>No data</div>

    return (
        <Card sx={{ width: 245 }}>
            <CardActionArea>
                <CardMedia
                    component= "img"
                    height="220"
                    image={pokemon.spriteUrl}
                    alt="pokemon image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {pokemon.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                        {pokemon.typeOne} / {pokemon.typeTwo}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default PokemonCard