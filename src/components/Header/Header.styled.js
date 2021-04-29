import styled from 'styled-components'

export const MainDiv = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
`
export const NavBar = styled.div`
 height: 80px;
 width: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
`
//Icono principal
export const Icon = styled.img`
 width: 39px;
 margin-left: 40px;
 cursor: pointer;

`
//Páginas (Router)
export const PagesList = styled.ul`
 display: flex;
 margin-right: 60px;
`
export const Pages = styled.a`
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


export const UserDataDiv = styled.div`
 display: flex;
 align-items: center;
 width: auto;
 height: 50px;
`
export const TextUserDiv = styled.p`
 font-size: 24px;
 color: #616161;
 font-weight: 400;
`
export const CoinsDiv = styled.div`
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
export const CoinIcon = styled.img`
 width: 50px;
 padding: 10px;
`
export const MainImage = styled.img`
 width: 100%;
`