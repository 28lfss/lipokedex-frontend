import React from 'react'
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material"
import {useQuery} from "@tanstack/react-query";
import axios from "axios"

function PokemonCard({pokemon = 94}) {

    const { data, error, isLoading } = useQuery({
        queryKey: ["pokemon", pokemon],
        queryFn: () => axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(res => res.data)
    })

    if (isLoading) return <div>Loading...</div>

    if (error) return <div>{error}</div>

    return (
        <Card sx={{ width: 245 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="180"
                    image= {data.sprites.front_default}
                    alt="pokemon image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                        {
                            data.types.map((t) => t.type.name).join(" / ")
                        }
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default PokemonCard