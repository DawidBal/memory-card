import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    padding: 1rem;
    border-radius: 10px;
    color: #501941;
`

const Card = ({children}) => {
    return (
        <CardWrapper>
        {children}
        </CardWrapper>
        
    )
}
export default Card
