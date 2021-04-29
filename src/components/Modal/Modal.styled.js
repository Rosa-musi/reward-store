import styled from 'styled-components'

 
export const EscDiv = styled.div`
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

export const ModalDiv = styled.div`
    display: flex;
    flex-direction: column;
    background: #ffffff; 
    position: absolute;
    border-radius: 20.5px;
    width: 80%;
    height: 70%;
`
export const ModalHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`
export const CloseX = styled.span`
    padding: 5px;
    cursor: pointer;
    font-weight: 800;
    font-size: 20px;
    margin-right: 10px;
    color: #616161;
`
export const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5px;
    height: 100%;
`
export const Title = styled.h2`
    margin: 2%;
    color: #0AD4FA;

`
export const ModalText = styled.p`
    margin: 2%;
    color: #616161;
`
export const OkButton = styled.button`
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