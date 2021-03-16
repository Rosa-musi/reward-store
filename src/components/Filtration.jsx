import React, {useContext, useEffect} from 'react'
import styled from 'styled-components'
import { productContext } from '../contexts/ProductsContext'
import ProductCard from '../components/ProductCard'

const BodyDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export default function Filtration () {
    const { products, setProducts } = useContext(productContext)
   
 
    const ProductsFetch = async () => {
    
        const response = await fetch("https://coding-challenge-api.aerolab.co/products", {
            headers: {
            'Content-Type': "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDM0NDk1MDdlNzE4NzAwMjBlMzhmMTEiLCJpYXQiOjE2MTQwMzkzNzZ9.Nnt8B1ey0vF4h6iW0rGTjbQBIKdXGth5wX4eVGEWEso"
            }
        })
        var result = await response.json(); 
      
        setProducts(result)
        console.log(result)
    }

    useEffect(() => {
        ProductsFetch()
    },[]) 

    return(
        <body>
            <BodyDiv>
                {
                    products.map((obj) => (
                        <div key={obj._id}>
                            <ProductCard {...obj}/>
                        </div>
                    ))
                }  
            </BodyDiv>
        </body>
    )
}