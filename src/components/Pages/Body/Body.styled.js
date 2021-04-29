import styled from 'styled-components'


export const Filters = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #F2F2F2;
    width: 100%;
`
export const Information = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: auto;

`

export const Text = styled.p`
    font-size: 24px;
    color: #616161;
    padding-left: 60px;
`

export const Separator = styled.div`
    border: .5px solid #D9D9D9;
    height: 49px;
    width: 1px;
    padding: 0;
    background: #D9D9D9;
    margin: 10px;
`
export const FilterButton = styled.button`
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
export const PagesDivTop = styled.div`
    display: flex;
    justify-content: center;
    width: 100px;
    margin-right: 68px;
`
export const LeftPage = styled.img`
    margin-right: 15px;
`


//Separator
export const DivSeparator = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`
export const SeparatorBig = styled.div`
    height: 1px;
    width: 90%;
    background: #D9D9D9;
`

//Pages Bottom
export const PagesBottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #F2F2F2;
    width: 100%;
    height: 100px;
    padding-bottom: 100px;
    padding-top: 50px;
`
export const NumbOfPage = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: auto;
`
export const TextPB = styled.p`
    font-size: 24px;
    margin: 10px;
    color: #616161;
    padding-left: 90px;
    width: 100%;
` 
export const PagesDivBot = styled.div`
    display: flex;
    justify-content: center;
    padding-right: 100px;
    width: auto;
`