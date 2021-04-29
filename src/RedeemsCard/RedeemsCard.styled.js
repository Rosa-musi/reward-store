import styled from 'styled-components'


//Main div
export const MainDivProduct = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    width: 276px;
    height: 290px;
    margin: 12px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`

export const ImageDiv = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 12px;
    width: 252px;
    height: 182px;
`
export const Image = styled.img`
    width: 252px;
    position: absolute;
`

//Name and cost
export const CategoryAndName = styled.div`
    width: 228px;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 23px;   
`

export const Name = styled.p`
    font-size: 18px;
    color:  #616161;
    font-weight: 600;
    margin-top: 5px;
`
export const Cost = styled.p`
    font-size: 16px;
    color: #A3A3A3;
`