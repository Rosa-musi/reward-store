import styled from 'styled-components'
import PlaceHolderImage from '../images/product-pics/AmazonEcho-x1.png'
import MainShoppingIconHov from '../images/icons/buy-white.svg'
import MainShoppingIcon from '../images/icons/buy-blue.svg'
import CoinIcon from '../images/icons/coin.svg'

//Hover

const HoverDiv = styled.div`
    display: none;
    flex-direction: column;
    align-items: center;
    position: absolute;
    width: 276px;
    height: 290px;
    background: linear-gradient(180deg, rgba(10, 212, 250, 0.86) 0%, rgba(37, 187, 241, 0.86) 100%);
    z-index: 200;
`

const ShoppingIconHover = styled.img`
    width: 50px;
    align-self: flex-end;
    margin-top: 12.5px;
    margin-bottom: 20px;
    margin-right: 6px;
`
const CoinsDiv = styled.div`
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`
const HoverSaldo = styled.p`
    font-size: 26px;
    color: #fff;
    font-weight: 400;
`
const CoinHover = styled.img`
    width: 26px;
    margin: 5px;
`

//Main div
const MainDivProduct = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 276px;
    height: 290px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

    &:hover ${HoverDiv} {
        display: flex;
    }
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
const ShoppingIcon = styled.img`
    width: 42px;
    position: absolute;
    z-index: 100;
    align-self: flex-end;
`
//Not enough coins
//condicionarlo para queu sólo se muestre cuando haya saldo
const NotEnCoinsDiv = styled.div`
    width: 142px;
    height: 42px;
    background:#616161;
    border-radius: 20.5px;
    color: #fff;
    opacity: 80%;
    cursor: pointer;
    outline: none;
    font-size: 14px;
`

const Coin = styled.img`
    width: 20px;
`
const NotEText = styled.p`
    font-size: 14px;
    color: #fff;
`

//Separator
const Separator = styled.span`
    height: 1px;
    width: 228px;
    background: #D9D9D9;
`

//Category and name
const CategoryAndName = styled.div`
    width: 228px;
    height: 45px;
    display: flex;
    flex-direction: column;
    padding: 23px;
    
`
const Category = styled.p`
    font-weight: 400;
    font-size: 16px;
    color: #A3A3A3;
    margin: 0;
`

const Name = styled.p`
    font-size: 18px;
    color:  #616161;
    margin-top: 5px;

`

const RedeemButton = styled.button`
    width: 180px;
    height: 42px;
    background:#fff;
    border-radius: 20.5px;
    color: #616161;
    cursor: pointer;
    outline: none;
    font-size: 18px;
`

export default function ProductCard () {
    return(
    <MainDivProduct>
        <ImageDiv>
            <Image src={PlaceHolderImage}/>
            <ShoppingIcon src={MainShoppingIcon}></ShoppingIcon>
        </ImageDiv>
        <Separator></Separator>
        <CategoryAndName>
            <Category>Smart Home</Category>
            <Name>Amazon Echo</Name>
        </CategoryAndName>
        <HoverDiv>
            <ShoppingIconHover src={MainShoppingIconHov}></ShoppingIconHover>
            <CoinsDiv>
                <HoverSaldo>12,000</HoverSaldo>
                <CoinHover src={CoinIcon}></CoinHover>
            </CoinsDiv>
            <RedeemButton>Redeem now</RedeemButton>
        </HoverDiv>
    </MainDivProduct>
    )
}