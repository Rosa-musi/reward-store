import React, {useContext} from 'react'
import styled from 'styled-components'
import { productContext } from '../contexts/ProductsContext'

// si tengo tiempo de cerrar modal haciendo click afuera
 
const EscDiv = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0; 
    display: flex;
    background:#F2F2F2;
    width: 100%;
    height: 100%;
    transition: all 1.3s;
    z-index: 100;
` 

const ModalDiv = styled.div`
    display: flex;
    flex-direction: column;
    background: #ffffff; 
    position: absolute;
    width: 80%;
    height: 70%;
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
    cursor: pointer;
`


export default function Modal() {

    const { show, setShow } = useContext(productContext)

    const closeModalHandler = () => setShow(false);

    return (
        <EscDiv   
            style= {{
                display: show ? 'flex' : 'none'
            }}
            onClick={closeModalHandler}
        >
            <ModalDiv>
                <ModalHeader>
                    <CloseX onClick={closeModalHandler}>x</CloseX>
                </ModalHeader>
                <ModalBody>
                    <Title>se pudo o no</Title>
                    <ModalText>está todo bien o está todo mal</ModalText>
                    <OkButton onClick={closeModalHandler}>Chido</OkButton>
                </ModalBody>
                
            </ModalDiv>
        </EscDiv>
    )
}