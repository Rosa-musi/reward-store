import React, {useContext} from 'react'
import RedeemsCard from '../../components/RedeemsCard'
import styled from 'styled-components'
import { productContext } from '../../contexts/ProductsContext'


const RedeemHistDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Title = styled.h2`
    font-weight:600;
    color: #0AD4FA;
    margin-top: 50px;
    margin-bottom: 30px;
`
const RedeemsText = styled.p`
    margin-bottom: 30px;
`
const ProductsDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export default function RedeemHistory  () {

    return(
        <RedeemHistDiv>
            <Title>Redeemed products</Title>
            <RedeemsText>Hystory of your redeems</RedeemsText>
            <RedeemsCard></RedeemsCard>
        </RedeemHistDiv>
    )
}

