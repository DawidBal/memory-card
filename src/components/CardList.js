import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Card from './Card'

const CardGrid = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin: 2rem;
`

const CardImage = styled.img`
    object-fit: cover;
    max-width: 100%;
    flex: 1;
`

const CardDescription = styled.p`
    position:relative;
    margin: 1rem 0 0 0;
    font-size: 1.2rem;
    font-weight: 800;
`


const CardList = ({ scoreBoard, setScoreBoard, highestScore, setHighestScore, characters, setCharacters, setGameLost, gameWon, setGameWon } ) => {

    const shuffleCharacters = () => {
        const shuffledCharacters = [...characters];
        for (let i = shuffledCharacters.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [shuffledCharacters[i], shuffledCharacters[j]] = [shuffledCharacters[j], shuffledCharacters[i]];
        }
        setCharacters(shuffledCharacters);  
    }

    const handleClick = (id) => {
        const newCharacters = [...characters];
        const index = newCharacters.findIndex(value => value.id === id);
        
        if (!newCharacters[index].clicked === true) {
            newCharacters[index].clicked = true;
            setScoreBoard(scoreBoard + 1);
        } else {
            setGameLost(true);
        }
        setCharacters(newCharacters);
    }

    useEffect(() => {
        shuffleCharacters();
        if (scoreBoard > highestScore) {
            setHighestScore(scoreBoard);
        }

        if (scoreBoard >= characters.length) {
            setGameWon(true);
        }
    }, [scoreBoard])

    return (
        <CardGrid>
            {characters.map(character => 
                <Card key={character.id} id={character.id} handleClick={handleClick}>
                    <CardImage src={character.image} alt="" />
                    <CardDescription>{character.name}</CardDescription>
                </Card>)}
        </CardGrid>
    )
}

export default CardList
