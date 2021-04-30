//librerias
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

//context
import { productContext } from '../../contexts/ProductsContext'

//icons
import mainImage from '../../images/header-x1.png'
import mainIcon from '../../images/icons/logo.svg'
import coinIcon from '../../images/icons/coin.svg'

//styles
import {
MainDiv,
NavBar,
Icon,
PagesList,
Pages,
UserDataDiv,
TextUserDiv, 
CoinsDiv,
CoinIcon, 
MainImage
} from './Header.styled'

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
                <Link to="/reward-store/"><Icon src={mainIcon}></Icon></Link>
               
                <UserDataDiv>
                <PagesList>
                    <Link to="/reward-store/redeems"><Pages>Redeems</Pages></Link>
                    <Link to="/reward-store/getcoins"><Pages>Get Coins</Pages></Link>
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