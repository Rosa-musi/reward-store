import React, {useContext, useEffect} from 'react'
import styled from 'styled-components'
import Filtration from './Filtration'
import { productContext } from '../contexts/ProductsContext'
import left from '../images/icons/arrow-left.svg'
import right from '../images/icons/arrow-right.svg'

const Filters = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #F2F2F2;
    width: 100%;
`
const Information = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: auto;
    padding-left: 132px;
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

//Separator
const DivSeparator = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`
const SeparatorBig = styled.div`
    height: 1px;
    width: 90%;
    background: #D9D9D9;
`

//Pages Bottom
const PagesBottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #F2F2F2;
    width: 100%;
    height: 100px;
    padding-bottom: 50px;
`
const NumbOfPage = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: auto;
`
const TextPB = styled.p`
    font-size: 24px;
    margin: 10px;
    color: #A3A3A3;
    padding-left: 132px;
    width: 100%;
` 
const PagesDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

export default function Body() {

    const { currentPosts, products,  currentPage, setCurrentPage, indexOfLastPost, setCurrentPosts, indexOfFirstPost, postsPerPage, setIndexOfLastPost} = useContext(productContext)

    const paginate = (e) => {
        //alert("pues no sé")
        e.preventDefault()
         if (products.length > indexOfLastPost) {
              setCurrentPage( (prevState) => {
                  return(
                    prevState + 1
                  )
              })
              //alert(currentPage)
            } 
        else if (products.length > indexOfLastPost && products.length < currentPage + 1) {
              setCurrentPage(2)
              setCurrentPosts(products.slice(indexOfFirstPost, products.length))
            } 

        //arreglar este desmadre, hacer la lógica para el cambio de página */
    }

    useEffect(() => {
        setIndexOfLastPost(currentPage * postsPerPage);
    }, [currentPage]);

    return(
        <>
            <Filters>
                <Information>
                    <Text>{currentPosts.length} of {products.length} products</Text>
                    <Separator/>
                    <Text>Sort by:</Text>
                    <FilterButton>Lowest price</FilterButton>
                    <FilterButton>Highest Price</FilterButton>
                    <div>
                        <img src={left} alt="left"/>
                        <img src={right} alt= "right"/>
                    </div>
                </Information>
                <DivSeparator>
                    <SeparatorBig></SeparatorBig>
                </DivSeparator>
            </Filters>
            <Filtration />
            <PagesBottom>
                <NumbOfPage>
                    <TextPB>{currentPosts.length} of {products.length} products</TextPB>
                    <PagesDiv>
                        <a href="!#" ><img src={left} alt="left"/></a>
                        <a href="!#" onClick={paginate}><img src={right} alt= "right"/></a>
                    </PagesDiv>
                </NumbOfPage>
                <DivSeparator style={{ marginTop: 20}}>
                    <SeparatorBig></SeparatorBig>
                </DivSeparator>
            </PagesBottom>
        </>
    )
}