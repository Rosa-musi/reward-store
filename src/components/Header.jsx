import React, {useContext, useEffect} from 'react'
import styled from 'styled-components'
import { productContext } from '../contexts/ProductsContext'
import mainImage from '../images/header-x1.png'
import mainIcon from '../images/icons/logo.svg'
import coinIcon from '../images/icons/coin.svg'



const MainDiv = styled.div`
   width: 100%;
   height: auto;
   display: flex;
   flex-direction: column;
`
const UserDiv = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Icon = styled.img`
    width: 39px;
    margin-left: 40px;

`
const UserDataDiv = styled.div`
    display: flex;
    align-items: center;
    width: auto;
    height: 50px;
`
const TextUserDiv = styled.p`
    font-size: 24px;
    color: #616161;
    font-weight: 400;
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
`
const CoinIcon = styled.img`
    width: 24px;
    padding: 10px;
`
const MainImage = styled.img`
    width: 100%;
`

export default function Header () {

    const { user, setUser } = useContext(productContext)

    const UserFetch = async () => {
    
        const response = await fetch("https://coding-challenge-api.aerolab.co/user/me", {
            headers: {
            'Content-Type': "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDM0NDk1MDdlNzE4NzAwMjBlMzhmMTEiLCJpYXQiOjE2MTQwMzkzNzZ9.Nnt8B1ey0vF4h6iW0rGTjbQBIKdXGth5wX4eVGEWEso"
            }
        })
        var result = await response.json(); 
      
        setUser(result)
        console.log(result)
    }

    useEffect(() => {
        UserFetch()
    },[]) 

    return(
        <MainDiv>
            <UserDiv>
            <Icon src={mainIcon}></Icon>
                    <UserDataDiv>
                        <TextUserDiv>{user && user.name}</TextUserDiv>
                        <CoinsDiv>
                            <TextUserDiv>{user?.points}</TextUserDiv>
                            <CoinIcon src={coinIcon}></CoinIcon>
                        </CoinsDiv>
                    </UserDataDiv>
            </UserDiv>
            <MainImage src={mainImage} />
        </MainDiv>
    )
}