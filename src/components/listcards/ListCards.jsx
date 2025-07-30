import React from 'react'
import './ListCards.css'
import PokemonCard from '../pokemoncard/PokemonCard.jsx'
import {useQuery} from '@tanstack/react-query';
import axios from 'axios'
import {Grid} from '@mui/material';

function ListCards() {
    const { data, error, isLoading } = useQuery({
        queryFn: () => axios.get('http://localhost:3000/api/v1/pokemon/').then(res => res.data)
    })

    if (isLoading) return <div>Loading...</div>

    if (error) return <div>{error}</div>

    return (
        <Grid container spacing={5} sx={{ paddingTop: '110px', paddingX: 10 }} justifyContent='center'>
            {data.map((pokemon) => (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2} display='flex'>
                    <PokemonCard pokemon={pokemon} />
                </Grid>
            ))}
        </Grid>
    )
}

export default ListCards