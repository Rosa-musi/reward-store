import React, {useContext, useEffect} from 'react'
import styled from 'styled-components'
import { productContext } from '../contexts/ProductsContext'
import { Link } from 'react-router-dom';
import mainImage from '../images/header-x1.png'
import mainIcon from '../images/icons/logo.svg'
import coinIcon from '../images/icons/coin.svg'



const MainDiv = styled.div`
   width: 100%;
   height: auto;
   display: flex;
   flex-direction: column;
`
const NavBar = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
//Icono principal
const Icon = styled.img`
    width: 39px;
    margin-left: 40px;
    cursor: pointer;

`
//Páginas (Router)
const PagesList = styled.ul`
    display: flex;
    margin-right: 60px;
`
const Pages = styled.a`
    text-decoration: none;
    list-style: none;
    padding: 5px;
    font-size: 22px;
    margin: 10px;
    color: #616161;

    //a:hover, a:visited, a:link, a:active

    &:hover {
        border: solid 2px #616161;
        border-radius: 20.5px;
        background: #0AD4FA;
        color: #fff;
        text-decoration: none;
        padding: 10px;
    }
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
    width: 50px;
    padding: 10px;
`
const MainImage = styled.img`
    width: 100%;
`

export default function Header () {

    const { user, setUser, points, setPoints } = useContext(productContext)

    const UserFetch = async () => {
        
        try{
            const response = await fetch("https://coding-challenge-api.aerolab.co/user/me", {
                headers: {
                'Content-Type': "application/json",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDM0NDk1MDdlNzE4NzAwMjBlMzhmMTEiLCJpYXQiOjE2MTQwMzkzNzZ9.Nnt8B1ey0vF4h6iW0rGTjbQBIKdXGth5wX4eVGEWEso"
                }
            })
            var result = await response.json(); 
          
            setUser(result)
            setPoints(result.points)
            console.log(result)
        } catch (error) {
                console.log("Error", error)
        }
    }
      

    useEffect(() => {
        UserFetch()
    },[]) 

    return(
        <MainDiv>
            <NavBar>
                <Link to="/"><Icon src={mainIcon}></Icon></Link>
               
                <UserDataDiv>
                <PagesList>
                    <Link to="/redeems"><Pages>Redeems</Pages></Link>
                    <Link to="/getcoins"><Pages>Get Coins</Pages></Link>
                </PagesList>
                    <TextUserDiv>{user && user.name}</TextUserDiv>
                    <CoinsDiv>
                        <TextUserDiv>{points}</TextUserDiv>
                        <CoinIcon src={coinIcon}></CoinIcon>
                    </CoinsDiv>
                </UserDataDiv>
            </NavBar>
            <MainImage src={mainImage} />
        </MainDiv>
    )
}