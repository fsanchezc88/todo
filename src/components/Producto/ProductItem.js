import React from 'react';

const ProductItem = (props) =>{

    const products = props.products.map((product,index) => {
       /*if(props){
           return 5;
       }*/
        return(
            <div key={index} className="col-md-8">
                <div className="card mt-4">
                    <div className="card-header">
                        <h3>{product.name}</h3>
                    </div>
                    <div className="card-body">
                        <p>
                            {product.description}
                        </p>
                        <span className="badge badge-pill badge-danger ml-2">
                            {product.symbol}{product.price}
                        </span>
                    </div>
                    <div className="card-footer">
                        <button
                            className="btn btn-danger"
                            onClick={() => props.onRemoveProd(index)}
                        >
                            Eliminar
                        </button>
                        <button
                            className="btn btn-danger"
                            onClick={() => props.onPayProd(index)}
                        >
                            Pagar
                        </button>
                    </div>
                </div>
            </div>
        );
        }
    );

    return(
        < div className="col-md-8">
                {products}
        </div>
    );
}

export default ProductItem;