import React from 'react'
import styled from 'styled-components'


const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
`
const Title = styled.h1`
    padding: 0;
    margin: 0;
    font-size: 4rem;
    text-align: center;
    font-weight: 800;
    text-transform: uppercase;
    background: -webkit-linear-gradient(-86deg, #e01111 5%, #e01111 10%, #e27005 91%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-stroke: 4px transparent;
    color: #000;
`
const Paragraph = styled.p`
    margin: 1rem 0 0 0;
    font-size: 2rem;
    font-weight: 600;
`

const header = () => {
    return (
        <Header>
                <Title>The Wolf Among Us</Title>
            <Paragraph>Memory Game</Paragraph>
        </Header>
    )
}

export default header
