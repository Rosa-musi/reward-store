import styled from 'styled-components'
import mainImage from '../images/header-x1.png'

const MainDiv = styled.div`
   width: 100%;
   height: auto;
   display: flex;
   flex-direction: column;
`
const UserDiv = styled.div`
    height: 80 px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const MainImage = styled.img`
    width: 100%;
`

export default function Header () {
    return(
        <MainDiv>
            <UserDiv>

            </UserDiv>
            <MainImage src={mainImage} />
        </MainDiv>
    )
}