import React, {useState} from 'react';

import classes from './ProductForm.module.css'

const ProductForm = (props) =>{

    const [productState,setrPoductState] = useState({
        id:"",
        name: "",
        description:"",
        price: 0
        //image:""
    });

    const handleInput = (event) =>{
        const {name, value} = event.target;
        setrPoductState(prevState => {
            return {...prevState, [name]: value}
        });
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        props.AddProduct(productState);
    }

    return(
        <div className={classes.Form} >
            {/*Comoponente ProductForm*/}
{/*            <div className="container">
                <div className="row">*/}
                    <div className="card mt-2">
                        <form className="card-body" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    placeholder="Nombre del producto"
                                    onChange={handleInput}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="description"
                                    className="form-control"
                                    placeholder="Descripcion del producto"
                                    onChange={handleInput}/>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="price"
                                    className="form-control"
                                    placeholder="Precio del producto"
                                    onChange={handleInput}
                                />
                            </div>
                            {/*<div className="form-group">
                                <img src="" alt="" name="image" onChange={handleInput}/> name="image"
                            </div>*/}
                            <button type="submit" className="btn btn-primary">Save</button>
                        </form>
                    </div>
                </div>
/*            </div>

        </div>*/
    );
}

export default ProductForm;