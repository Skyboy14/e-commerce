import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Modal from '@mui/material/Modal';
import { fetchProducts, deleteProduct, sortProducts } from '../Redux/Action/Product';

import '../StyleSheet/ProductList.css'
import ProductEdit from './ProductEdit';
import { toast } from 'react-toastify';

const ProductList = ({ products, fetchProducts, deleteProduct, setProductsLen, sortProducts  }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    function handleEdit(product){
        setProduct(product)
        handleOpen()
    }


    // set in cart item count
    setProductsLen(products.length)

    return (
        <div className='mainCover'>
            <div className='sortButton'>
                <h1>Product List</h1>
                <button onClick={() => {sortProducts(products); toast.success('Product Sorted successfully')}}>
                    Sort by price
                </button>
            </div>
            <div>
                <ul style={{listStyleType: 'none'}}>
                    {products.map(product => (
                        <li key={product.id}>
                            <div className='CardCover'>
                                <div>
                                    <img className='imageCover' src={product.image} alt={product.name} />
                                </div>
                                <div>
                                    <h3>{product.name}</h3>
                                    <p>Price: ${product.price}</p>
                                    <p>Rating: {product.rating}</p>
                                </div>
                                <div style={{padding: '10px'}}>
                                    <div>
                                        <p>{product.description}</p>
                                    </div>
                                    <div className='BtnCover'>
                                        <button onClick={()=>handleEdit(product)}>
                                            Edit
                                        </button>
                                        <button onClick={() => { deleteProduct(product.id); toast.success('Product deleted successfully'); }}>
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>                        
                    </li>
                    ))}
                </ul>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                    >
                <ProductEdit product={product} handleClose={handleClose} />  
            </Modal>
    </div>
    );
};

const mapStateToProps = state => ({
    products: state.products.products, 
});

export default connect(mapStateToProps, { fetchProducts, deleteProduct, sortProducts })(ProductList);
