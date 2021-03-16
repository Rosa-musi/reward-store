import react, {createContext, useState, useEffect} from 'react'


export const productContext = createContext();

export const ProductsProvider = (props) => {
    const [products, setProducts] = useState([])


    return (
        <productContext.Provider value={{products, setProducts}}>
            {props.children}
        </productContext.Provider>
    )
}




