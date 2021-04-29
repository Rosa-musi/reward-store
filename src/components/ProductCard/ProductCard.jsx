import React, {useContext, useEffect} from 'react'
import { productContext } from '../../contexts/ProductsContext'

import MainShoppingIconHov from '../../images/icons/buy-white.svg'
import MainShoppingIcon from '../../images/icons/buy-blue.svg'
import CoinIcon from '../../images/icons/coin.svg'

import {
    HoverDiv,
    ShoppingIconHover,
    CoinsDiv,
    HoverSaldo,
    CoinHover,
    MainDivProduct,
    ImageDiv,
    Image,
    ShoppingIcon,
    NotEnCoinsDiv,
    Coin,
    NotEText,
    Separator,
    CategoryAndName,
    Category,
    Name,
    RedeemButton

} from './ProductCard.styled'

export default function ProductCard (props) {
    
    const { setShow, user, setRedeemMessage } = useContext(productContext)

    const redeem = async (id) => {
    
        try {
           console.log(id)
           const response = await fetch('https://coding-challenge-api.aerolab.co/redeem', {
               method: "POST",
               headers: {
                   "Content-Type": "application/json",
                   "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDM0NDk1MDdlNzE4NzAwMjBlMzhmMTEiLCJpYXQiOjE2MTQwMzkzNzZ9.Nnt8B1ey0vF4h6iW0rGTjbQBIKdXGth5wX4eVGEWEso"
               },
               body: JSON.stringify({productId: id})
           })
           var result = await response.json(); 
     
           setShow(true)
           setRedeemMessage(result.message)

           console.log(result)
        
       } catch (error) {
           console.log("error", error)
       } 
    }

    return(
    <MainDivProduct sinHover={user?.points < props.cost} >
        <ImageDiv>
            <Image src={props.img.url}/>
            {user?.points > props.cost ? <ShoppingIcon src={MainShoppingIcon}></ShoppingIcon> :
                <NotEnCoinsDiv>
                    <NotEText>You need {props.cost - user?.points}</NotEText>
                    <Coin src={CoinIcon}></Coin>
                </NotEnCoinsDiv>}
        </ImageDiv>
        <Separator></Separator>
        <CategoryAndName>
            <Category>{props.category}</Category>
            <Name>{props.name}</Name>
        </CategoryAndName>
        <HoverDiv>
            <ShoppingIconHover src={MainShoppingIconHov}></ShoppingIconHover>
            <CoinsDiv>
                <HoverSaldo>{props.cost}</HoverSaldo>
                <CoinHover src={CoinIcon}></CoinHover>
            </CoinsDiv>
            <RedeemButton onClick={() =>redeem(props._id)}>Redeem now</RedeemButton>
        </HoverDiv>
    </MainDivProduct>
    )
}