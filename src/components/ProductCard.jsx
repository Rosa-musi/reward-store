import styled from 'styled-components'

const MainDivProduct = styled.div`
    display: flex;
    width: 276px;
    height: 276px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`
const ImageDvi = styled.div`
//checar código de proyecto 2 para hacer el hover en la imágen
`
const Image = styled.img`
    width: 252px;
`
const ShoppingIcon = styled.img`
    width: 42px;
`

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

    &:hover{
        background: #0AD4FA;
        color: #fff;
    }
`

const Coin = styled.img`
    width: 20px;
`
const NotEText = styled.p`
    font-size: 14px;
    color: #fff;
`


const Separator = styled.span`
    height: 1px;
    width: 228px;
    background: #D9D9D9;
`

const Category = styled.p`
    font-weight: 400;
    font-size: 16px;
    color: #A3A3A3;
`

const Name = styled.p`
    font-size: 1px;
    color:  #616161;
`

const HoverDiv = styled.div`
    display: flex;
    width: 276px;
    height: 276px;
    background: linear-gradient(180deg, rgba(10, 212, 250, 0.86) 0%, rgba(37, 187, 241, 0.86) 100%);
`
const CoinsDiv = styled.div`
    width: auto;
    display: flex;
`
const HoverSaldo = styled.p`
    font-size: 36px;
    color: #fff;
    font-weight: 400;
`
const CoinHover = styled.img`
    width: 26px;
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
    <MainDivProduct>

    </MainDivProduct>
}