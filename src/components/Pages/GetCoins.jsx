import React, {useContext, useEffect} from 'react'
import styled from 'styled-components'
import { productContext } from '../../contexts/ProductsContext'
import coinIcon from '../../images/icons/coin.svg'

const GetCoinsDiv = styled.div`
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
const AmountOfCoinsDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 30px;
    margin-bottom: 50px;
`

const CoinsDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    padding-left: 12px;
    height: 48px;
    background: #EDEDED;
    border-radius: 20.5px;
    margin-left: 14px;
    margin-right: 42px;
    cursor: pointer;
`
const TextCoins = styled.p`
    font-size: 24px;
    color: #616161;
    font-weight: 400;
`
const CoinIcon = styled.img`
    width: 50px;
    padding: 10px;
`


export default function GetCoins () {

    const { setPoints } = useContext(productContext)

     const moreCoins = async (amount) => {
    
         try {
            console.log(amount)
            const response = await fetch("https://coding-challenge-api.aerolab.co/user/points", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDM0NDk1MDdlNzE4NzAwMjBlMzhmMTEiLCJpYXQiOjE2MTQwMzkzNzZ9.Nnt8B1ey0vF4h6iW0rGTjbQBIKdXGth5wX4eVGEWEso"
                },
                //se puede reducir {amount: amount} a {amount} sintaxis de EM6
                body: JSON.stringify({amount: amount})
            })
            var result = await response.json(); 
      
            setPoints(result['New Points']) 
            console.log(result)
            console.log(amount)
        } catch (error) {
            console.log("error", error)
        } 
 
   }

    return(
        <GetCoinsDiv>
            <Title>Do you want more coins?</Title>
            <p>Choose the amount of coins that you want</p>
            <AmountOfCoinsDiv>
                <CoinsDiv>
                    {/* si no le pongo arrow functioin se corre al momento la función, sin hacer click, si 
                    no tuviera argumento no se necesitaría, cuando no tiene argumentos no se ponen parétesis, 
                    los parétesis hacen que la función se ejecute sin hacer el click, por eso con el argumento
                    es necesario hacer el arrow function */}
                    <TextCoins onClick={() =>moreCoins(1000)}>1000</TextCoins>
                    <CoinIcon src={coinIcon}></CoinIcon>
                </CoinsDiv>
                <CoinsDiv>
                    <TextCoins onClick={() =>moreCoins(5000)}>5000</TextCoins>
                    <CoinIcon src={coinIcon}></CoinIcon>
                </CoinsDiv>
                <CoinsDiv>
                    <TextCoins onClick={() =>moreCoins(7500)}>7500</TextCoins>
                    <CoinIcon src={coinIcon}></CoinIcon>
                </CoinsDiv>
            </AmountOfCoinsDiv>

        </GetCoinsDiv>
        
    )
}

