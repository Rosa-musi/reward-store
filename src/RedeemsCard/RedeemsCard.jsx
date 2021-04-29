import React from 'react'

import {
    MainDivProduct,
    ImageDiv,
    Image,
    CategoryAndName,
    Name,
    Cost
} from './RedeemsCard.styled'

export default function RedeemsCard (props) {

    return(
    <MainDivProduct >

        <ImageDiv>
            <Image src={props.img.url}/>
        </ImageDiv>
        <CategoryAndName>
            <Name>{props.name}</Name>
            <Cost>{props.cost}</Cost>
        </CategoryAndName>
    </MainDivProduct>
    )
}