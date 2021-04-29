import React, {useContext} from 'react'
import { productContext } from '../../contexts/ProductsContext'

import {
    EscDiv,
    ModalDiv,
    ModalHeader,
    CloseX,
    ModalBody,
    Title,
    ModalText,
    OkButton
} from './Modal.styled'


export default function Modal() {

    const { show, setShow, redeemMessage } = useContext(productContext)

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
                    <Title>
                        {redeemMessage === "You've redeem the product successfully" ? 
                        "Congratulations!!" :
                        "Oops, something went wrong"
                        }
                    </Title>
                    <ModalText>{redeemMessage === "You've redeem the product successfully" ? 
                        redeemMessage :
                        "You can try again"
                        }</ModalText>
                    <OkButton onClick={closeModalHandler}>Ok</OkButton>
                </ModalBody>
                
            </ModalDiv>
        </EscDiv>
    )
}