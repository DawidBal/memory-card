import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
    flex: 0 1 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(180deg, rgba(91, 25, 86, 1) 50%, rgba(0, 0, 0, 1) 95%);
    padding: 1rem;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    transition: transform 0.3s ease;
    &:hover {
        transform: scale(1.1);
    }
`

const Card = ({ children, handleClick, id }) => {
    return (
        <CardWrapper onClick={() => handleClick(id)}>
        {children}
        </CardWrapper>
        
    )
}
export default Card
