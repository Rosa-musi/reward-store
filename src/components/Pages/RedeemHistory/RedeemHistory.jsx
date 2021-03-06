import React, {useContext, useEffect } from 'react'
import RedeemsCard from '../../../RedeemsCard/RedeemsCard'

import { productContext } from '../../../contexts/ProductsContext'

import {
    RedeemHistDiv,
    Title,
    RedeemsText,
    RedeemedProductsDiv
} from  './RedeemHistory.styled'


export default function RedeemHistory  () {

    const { redeems, setRedeems } = useContext(productContext)

    const redeemHistFetch = async (id) => {
    
        try {
           console.log(id)
           const response = await fetch('https://coding-challenge-api.aerolab.co/user/history', {
               method: "GET",
               headers: {
                   "Content-Type": "application/json",
                   "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDM0NDk1MDdlNzE4NzAwMjBlMzhmMTEiLCJpYXQiOjE2MTQwMzkzNzZ9.Nnt8B1ey0vF4h6iW0rGTjbQBIKdXGth5wX4eVGEWEso"
               }
           })
           var result = await response.json(); 

           setRedeems(result)
           console.log(result)
        
       } catch (error) {
           console.log("error", error)
       } 
    }

    useEffect(() => {
        redeemHistFetch()
    },[]) 

    return(
        <RedeemHistDiv>
            <Title>Redeemed products</Title>
            <RedeemsText>History of your redeems</RedeemsText>
            <RedeemedProductsDiv>
                {
                    redeems.map((obj) => (
                    <div key={obj._id}>
                        <RedeemsCard {...obj}/>
                    </div>
                    ))
                }  
            </RedeemedProductsDiv>
        </RedeemHistDiv>
    )
}

