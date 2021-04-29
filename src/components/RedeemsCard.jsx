import React from 'react'
import styled from 'styled-components'
import MainShoppingIconHov from '../images/icons/buy-white.svg'
import MainShoppingIcon from '../images/icons/buy-blue.svg'
import CoinIcon from '../images/icons/coin.svg'





//Main div
const MainDivProduct = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    width: 276px;
    height: auto;
    margin: 12px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`

const ImageDiv = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 12px;
    width: 252px;
    height: 182px;
`
const Image = styled.img`
    width: 252px;
    position: absolute;
`

//Name and cost
const CategoryAndName = styled.div`
    width: 228px;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 23px;   
`

const Name = styled.p`
    font-size: 18px;
    color:  #616161;
    font-weight: 600;
    margin-top: 5px;
`
const Cost = styled.p`
    font-size: 16px;
    color: #A3A3A3;
`

export default function RedeemsCard (props) {

    return(
    <MainDivProduct >

        <ImageDiv>
            <Image src={props.img.url}/>
        </ImageDiv>
        <CategoryAndName>
            <Name>{props.name}</Name>
            <Cost>{props.cost}</Cost>
        </CategoryAndName>
    </MainDivProduct>
    )
}