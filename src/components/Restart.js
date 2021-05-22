import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    min-height: 100vh;
    min-width: 100vw;
    display: grid;
    place-content: center;
    z-index: 1;
`

const Button = styled.button`
    padding: 0.5em 1em;
    border: 1px solid #963199;
    cursor: pointer;
    background: #963199;
    color: white;
    box-shadow: 0 0.4em #712574;
    transition: transform 0.3s ease;
    &:hover {
        transform: scale(1.1);
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    padding: 2rem;
    background: white;
    color: black;
    border: 4px solid #963199;
`

const Title = styled.h2`
    margin: 0;
    padding: 0;
`

const Text = styled.p`
    margin: 0;
    padding: 0;
`

const Restart = ({reset, title}) => {
    return (
        <Wrapper>
            <Container>
                <Title>{title}</Title>
                <Text>Do you want to restart?</Text>
                <Button onClick={() => reset()}>
                    Restart
                </Button>
            </Container>
        </Wrapper>
    )
}

export default Restart
