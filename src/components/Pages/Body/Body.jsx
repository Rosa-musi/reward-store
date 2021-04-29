import React, {useContext, useEffect} from 'react'

import Modal from '../../Modal/Modal'
import Filtration from '../../Filtration/Filtration'
import { productContext } from '../../../contexts/ProductsContext'
import left from '../../../images/icons/arrow-left.svg'
import right from '../../../images/icons/arrow-right.svg'

import {
    Filters,
    Information,
    Text,
    Separator,
    FilterButton,
    PagesDivTop,
    LeftPage,
    DivSeparator,
    SeparatorBig,
    PagesBottom,
    NumbOfPage,
    TextPB,
    PagesDivBot
} from './Body.styled'

export default function Body() {

    const { products, currentPage, setCurrentPage, indexOfLastPost, setCurrentPosts, indexOfFirstPost, postsPerPage, setIndexOfLastPost, setProducts } = useContext(productContext)

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


    useEffect(() => {
        setIndexOfLastPost(currentPage * postsPerPage);
    }, [currentPage]);

    const handleLowestPrice = () => {
        //no funcionaba porque estaba usando directamente products y estaba mutando el estado
        setProducts([...products].sort((a, b) =>{
            let result = a.cost - b.cost
            setCurrentPage(1)
            return result
        }))
    }

    const handleHighestPrice = () => {
        //no funcionaba porque estaba usando directamente products y estaba mutando el estado
        setProducts([...products].sort((a, b) =>{
            let result = b.cost - a.cost
            setCurrentPage(1)
            return result
        }))
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
                    <FilterButton onClick={handleHighestPrice}>Highest Price</FilterButton>
                    <PagesDivTop>
                        <a href="!#" 
                            onClick={paginateLeft}            
                            style= {{
                            visibility: products.length === indexOfLastPost ? 'visible' : 'hidden'
                        }}>
                            <LeftPage src={left} alt="left"/>
                        </a>
                        <a href="!#"><img src={right}  onClick={paginateRight} alt= "right"/></a>
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