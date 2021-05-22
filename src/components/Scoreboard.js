import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    `

const ScoreBar = styled.p`
    padding: 0.5rem 1rem;
    background: ${props => props.primary ? '#4c2fd7' : 'rgba(91,25,86,1)'};
    border-radius: 5px;
    `

const Scoreboard = ({ scoreBoard, highestScore }) => {

    return (
        <Wrapper>
            <ScoreBar>Score: {scoreBoard}</ScoreBar>
            <ScoreBar primary>Highscore: {highestScore}</ScoreBar>
        </Wrapper>
    )
}

export default Scoreboard
