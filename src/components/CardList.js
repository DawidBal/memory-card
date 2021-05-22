import React, { useState } from 'react'
import styled from 'styled-components'
import Card from './Card'

const CardGrid = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    justify-content: space-between;
    gap: 2rem;
    margin: 2rem;
`

const CardImage = styled.img`
object-fit: cover;
max-width: 100%;
`


const CardList = ( { scoreBoard, setScoreBoard} ) => {
    const charactersData = [
        { id: 1, name: "Bigby Wolf", image: './images/bigby.webp', clicked: false },
        { id: 2, name: "Snow White", image: './images/snow-white.webp', clicked: false },
        { id: 3, name: "Bluebeard", image: './images/bluebeard.webp', clicked: false },
        { id: 4, name: "Bufkin", image: './images/bufkin.webp', clicked: false },
        { id: 5, name: "Colin", image: './images/colin.webp', clicked: false },
        { id: 6, name: "Ichabod Crane", image: './images/crane.webp', clicked: false },
        { id: 7, name: "Crooked Man", image: './images/Crooked_Man.webp', clicked: false },
        { id: 8, name: "Faith", image: './images/Faith.webp', clicked: false },
        { id: 9, name: "Flycatcher", image: './images/flycatcher.webp', clicked: false },
        { id: 10, name: "Aunty Greenleaf", image: './images/greenleaf.webp', clicked: false },
        { id: 11, name: "Holly", image: './images/holly.webp', clicked: false },
        { id: 12, name: "Jack Horner", image: './images/jack.webp', clicked: false },
        { id: 13, name: "Bloody Mary", image: './images/mary.webp', clicked: false },
        { id: 14, name: "Nerissa", image: './images/nerissa.webp', clicked: false },
        { id: 14, name: "Mr. Toad", image: './images/toad.webp', clicked: false },
    ]

    const [characters, setCharacters] = useState(charactersData);
    return (
        <CardGrid>
            {characters.map(character => 
            <Card key={character.key}>
                    <CardImage src={character.image} alt="" />
                <p>{character.name}</p>
            </Card>)}
        </CardGrid>
    )
}

export default CardList
