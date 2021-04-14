import React, {useContext} from 'react'
import styled from 'styled-components'
import { productContext } from '../contexts/ProductsContext'

// si tengo tiempo de cerrar modal haciendo click afuera
/* 
const EscDiv = styled.div`
    background: darkblue;
    height:100vh;
    position: absolute;
    transition: all 1.3s;
    width: 100vw;
   
` */
const ModalDiv = styled.div`
position: relative;
    display: flex;
    flex-direction: column;
    background: #F2F2F2;
    width: 80%;
    max-width: 800px;
    margin: 4rem auto;
    padding: 20px;
`
const ModalHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`
const CloseX = styled.span`
    padding: 5px;
    cursor: pointer;
`
const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
`
const Title = styled.h2`

`
const ModalText = styled.p`

`
const OkButton = styled.button`

`


export default function Modal() {

    const { show, setShow } = useContext(productContext)

    const closeModalHandler = () => setShow(false);

    return (
        <ModalDiv
            style= {{
                display: show ? 'flex' : 'none'
            }}
        >
            <ModalHeader>
                <CloseX onClick={closeModalHandler}>x</CloseX>
            </ModalHeader>
            <ModalBody>
                <Title>se pudo o no</Title>
                <ModalText>está todo bien o está todo mal</ModalText>
                <OkButton onClick={closeModalHandler}>Chido</OkButton>
            </ModalBody>
            
        </ModalDiv>
    )
}