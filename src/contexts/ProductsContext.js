import react, {createContext, useState, useEffect } from 'react'


export const productContext = createContext();

export const ProductsProvider = (props) => {
    const [products, setProducts] = useState([])

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(16);

    // Get Current posts
    const [indexOfLastPost, setIndexOfLastPost] = useState(currentPage * postsPerPage);
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const [currentPosts, setCurrentPost] = useState([])


    useEffect(() => {
        console.log("a")
       setCurrentPost(products.slice(indexOfFirstPost, indexOfLastPost))
    },[products, indexOfFirstPost, indexOfLastPost])
    
    //User
    const [user, setUser] = useState ();
    const [points, setPoints] = useState ();

    //Modal
    const [show, setShow] = useState(false);

    //Redeems
    const [redeems, setRedeems] = useState([]);

    return (
        <productContext.Provider value={{products, setProducts, currentPage, setCurrentPage, postsPerPage, setPostsPerPage, indexOfLastPost, indexOfFirstPost, currentPosts,  setIndexOfLastPost, user, setUser, show, setShow, points, setPoints, redeems, setRedeems, setCurrentPost }}>
            {props.children}
        </productContext.Provider>
    )
}




