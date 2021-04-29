import React, {useContext, useEffect} from 'react'
import styled from 'styled-components'
import Modal from '../Modal'
import Filtration from '../Filtration'
import { productContext } from '../../contexts/ProductsContext'
import left from '../../images/icons/arrow-left.svg'
import right from '../../images/icons/arrow-right.svg'

const Filters = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #F2F2F2;
    width: 100%;
`
const Information = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: auto;

`

const Text = styled.p`
    font-size: 24px;
    color: #616161;
    padding-left: 60px;
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
const PagesDivTop = styled.div`
    display: flex;
    justify-content: center;
    width: 100px;
`
const LeftPage = styled.img`
    margin-right: 15px;
`
const RightPageTop = styled.img`
    margin-right: 120px;
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
    padding-bottom: 100px;
    padding-top: 50px;
`
const NumbOfPage = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: auto;
`
const TextPB = styled.p`
    font-size: 24px;
    margin: 10px;
    color: #616161;
    padding-left: 90px;
    width: 100%;
` 
const PagesDivBot = styled.div`
    display: flex;
    justify-content: center;
    padding-right: 100px;
    width: auto;
`

export default function Body() {

    const { products, currentPosts,  currentPage, setCurrentPage, indexOfLastPost, setCurrentPosts, indexOfFirstPost, postsPerPage, setIndexOfLastPost, setProducts } = useContext(productContext)

    const paginateRight = (e) => {
        //poner el e.preventDefault para que la página no se reinicie al usar el tag <a>
        //ya que los hilos de trabajo son asícronos hay que hacer una función para asegurarlos que setCurrentPage se ejecute primero
        //entonces se usa el prevState como parámetro y entonces sele suma el 1 para la siguiente página.
        e.preventDefault()
         if (products.length > indexOfLastPost) {
              setCurrentPage( (prevState) => {
                  return(
                    prevState + 1
                  )
              })
            } 
        //esta opción es para cuando el contenido del array no sea exacto, como en este caso que son 16 artículos en casa página
        else if (products.length > indexOfLastPost && products.length < currentPage + 1) {
            setCurrentPage( (prevState) => {
                return(
                  prevState + 1
                )
            })
              setCurrentPosts(products.slice(indexOfFirstPost, products.length))
            } 
    }

    const paginateLeft = (e) => {

        e.preventDefault()
            if (currentPage > 1) {
                setCurrentPage( (prevState) => {
                    return(
                    prevState - 1
                )
            })
        } 
    }

    console.log(currentPage)
    console.log(currentPosts)


    useEffect(() => {
        setIndexOfLastPost(currentPage * postsPerPage);
    }, [currentPage]);

    const handleLowestPrice = () => {
        //no funcionaba porque estaba usando directamente products y estaba mutando el estado
        setProducts([...products].sort((a, b) =>{
            let result = a.cost - b.cost
            return result
        }))
        console.log("pollo frodón")
    }

    return(
        <>
            <Modal/>
            <Filters>
                <Information>
                    <Text>{products.length > indexOfLastPost && products.length < currentPage + 1 ? products.length : indexOfLastPost} of {products.length} products</Text>
                    <Separator/>
                    <Text>Sort by:</Text>
                    <FilterButton onClick={handleLowestPrice}>Lowest price</FilterButton>
                    <FilterButton>Highest Price</FilterButton>
                    <PagesDivTop>
                        <a href="!#" 
                            onClick={paginateLeft}            
                            style= {{
                            visibility: products.length == indexOfLastPost ? 'visible' : 'hidden'
                        }}>
                            <LeftPage src={left} alt="left"/>
                        </a>
                        <a href="!#" onClick={paginateRight}><RightPageTop src={right} alt= "right"/></a>
                    </PagesDivTop>
                </Information>
                <DivSeparator>
                    <SeparatorBig></SeparatorBig>
                </DivSeparator>
            </Filters>
            <Filtration />
            <PagesBottom>
                <NumbOfPage>
                    <TextPB>{products.length > indexOfLastPost && products.length < currentPage + 1 ? products.length : indexOfLastPost} of {products.length} products</TextPB>
                    <PagesDivBot>
                        <a href="!#"   
                            onClick={paginateLeft}          
                            style= {{
                            visibility: products.length == indexOfLastPost ? 'visible' : 'hidden'
                        }}>
                            <LeftPage src={left} alt="left"/>
                        </a>
                        <a href="!#" onClick={paginateRight}><img src={right} alt= "right"/></a>
                    </PagesDivBot>
                </NumbOfPage>
                <DivSeparator style={{ marginTop: 20}}>
                    <SeparatorBig></SeparatorBig>
                </DivSeparator>
            </PagesBottom>
        </>
    )
}