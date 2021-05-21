import React from 'react'
import styled from 'styled-components'


const Header = styled.header`
    padding: 1rem;
`
const Title = styled.h1`
    font-size: 2rem;
`
const Paragraph = styled.p`

`

const header = () => {
    return (
        <Header>
            <Title>Scooby Doo</Title>
            <Paragraph>Memory Game</Paragraph>
        </Header>
    )
}

export default header
