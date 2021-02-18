import React, {useState} from 'react';


import ProductItem from "../../../components/Producto/ProductItem";
import ProductForm from "../../../components/Producto/ProductForm";
import ProductsPage from "../../../components/Producto/ProdutsPage";
import ShoppingCart from "../../../components/ShoppingCart/ShoppingCart";

const ProductsContainer = (props) => {
    const [productsState, setProductsState] = useState({
        products: props.products,
        activePage: 1,
        shoppingCart: props.shoppingCart,
        totalPriceCart: 0,
        pageCont: props.products.length / 3,
        countChangePage: 0
    });

    const addProduct = (product) => {
        product.id = productsState.products.length;
        setProductsState(prevState => {
            return {
                products: [...productsState.products, product],
                activePage: prevState.activePage,
                shoppingCart: prevState.shoppingCart,
                totalPriceCart: prevState.totalPriceCart,
                pageCont: prevState.pageCont,
                countChangePage: prevState.countChangePage
            }
        });
        console.log(productsState.products);
    }

    return (
        <div className="container">
            <div className="row">
                <ProductForm AddProduct={addProduct}/>
                <ProductItem products={productsState.products}/>
            </div>
            <ProductsPage activePage={productsState.activePage} />
            <ShoppingCart shoppingCart={productsState.shoppingCart}/>
            
        </div>
    );
}

export default ProductsContainer;