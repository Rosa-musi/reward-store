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
    background:rgba(242, 242, 242, 0.5);
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
    border-radius: 20.5px;
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
    font-weight: 800;
    font-size: 20px;
    margin-right: 10px;
    color: #616161;
`
const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5px;
    height: 100%;
`
const Title = styled.h2`
    margin: 2%;
    color: #0AD4FA;

`
const ModalText = styled.p`
    margin: 2%;
    color: #616161;
`
const OkButton = styled.button`
    background:#fff;
    border-radius: 20.5px;
    width: 120px;
    height: 40px;
    color: #616161;
    cursor: pointer;
    outline: none;
    font-size: 18px;
    margin: 2%;
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
                    <OkButton onClick={closeModalHandler}>Ok</OkButton>
                </ModalBody>
                
            </ModalDiv>
        </EscDiv>
    )
}