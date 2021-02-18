import React,{useState} from 'react';


import todo from '../../todo.json';
//import PersonsContainer from "./PersonsContainer/PersonsContainer";
import ProductsContainer from "./ProductsContainer/ProductsContainer";


const ShopContainer = (props) =>{

    const [globalState,setGlobalState] = useState({
        persons:todo.persons,
        products:todo.products,
        shoppingCart:todo.shoppingCart
    });

    const deleteProductHandler = () =>{

    }

    const addProductHandler = () =>{

    }

    const modifyProductHandler = () =>{

    }

    return(
        <>
            {/*<PersonsContainer persons = {globalState.persons}/>*/}
            <ProductsContainer
                products = {globalState.products}
                shoppingCart = {globalState.shoppingCart}/>
        </>
    );
}

export default ShopContainer;