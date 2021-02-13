import styled from 'styled-components'

const MainDiv = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100px;
    margin-left: 132px;
    margin-right: 132px;
    `

const Text = styled.p`
    font-size: 24px;
    margin: 10px;
    color: #A3A3A3;
`

const Separator = styled.div`
    border: .5px solid #D9D9D9;
    height: 49px;
    width: 1px;
    padding: 0;
    background: #D9D9D9;
    margin: 10px;
`
const FilterButton = styled.button`
    width: 163px;
    height: 48px;
    background:#EDEDED;
    border-radius: 20.5px;
    color: #A3A3A3;
    cursor: pointer;
    margin: 20px;
    outline: none;
    font-size: 20px;

    &:hover{
        background: #0AD4FA;
        color: #fff;
    }
`


export default function Filters () {
    return(
        <MainDiv>
            <Text>16 of 32 products</Text>
            <Separator/>
            <Text>Sort by:</Text>
            <FilterButton>Most Recent</FilterButton>
            <FilterButton>Lowest price</FilterButton>
            <FilterButton>Highest Price</FilterButton>
        </MainDiv>
    )
}