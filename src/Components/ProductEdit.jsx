import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateProduct } from '../Redux/Action/Product';

import '../StyleSheet/ProductEdit.css'

const ProductEdit = ({ product, updateProduct, handleClose }) => {

    const [updatedName, setUpdatedName] = useState(product.name);
    const [updatedPrice, setUpdatedPrice] = useState(product.price);
    const [updatedRating, setUpdatedRating] = useState(product.rating);
    const [updatedDescription, setUpdatedDescription] = useState(product.description);

    const handleUpdate = () => {
    const updatedProduct = {
      ...product,
      name: updatedName,
      price: updatedPrice,
      rating: updatedRating,
      description: updatedDescription,
    };
    updateProduct(product.id, updatedProduct);
    handleClose(true)
  };

  return (
      <div className='covermain'>
           <div className='imgstyle'>
                <img className='imageCover' src={product.image} alt={product.name} />
           </div>
          <div className='unitCover'>
              <label>Name</label>
              <input type="text" value={updatedName} onChange={e => setUpdatedName(e.target.value)} />
          </div>
          <div className='unitCover'>              
              <label>Price</label>
              <input type="number" max='5' value={updatedPrice} onChange={e => setUpdatedPrice(e.target.value)} />
          </div>
          <div className='unitCover'>
              <label>Rating</label>
              <input type="number" value={updatedRating} onChange={e => setUpdatedRating(e.target.value)} />
          </div>
          <div className='unitCover'>
              <label>Description</label>
              <textarea style={{ height: '180px', width: '250px'}} type="text" value={updatedDescription} onChange={e => setUpdatedDescription(e.target.value)} />
          </div>
          <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default connect(null, { updateProduct })(ProductEdit);
