import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../Redux/Action/Product';

const AddProduct = ({ addProduct, handleClose }) => {
     const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');
    const [description, setDescription] = useState('');

  const handleAddProduct = () => {
    const newProduct = {
      id: Math.random(), 
      name,
      price: parseFloat(price),
      rating: parseFloat(rating),
      description,
    };

    addProduct(newProduct);
    handleClose(true)

    setName('');
    setPrice('');
    setRating('')
    setDescription('')
  };

  return (
    <div className='covermain'>
      <h2>Add a New Product</h2>
      <div className='imgstyle'>
                {/* <img className='imageCover' src={product.image} alt={product.name} /> */}
           </div>
          <div className='unitCover'>
              <label>Name</label>
              <input type="text" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div className='unitCover'>              
              <label>Price</label>
              <input type="number" max='5' value={price} onChange={e => setPrice(e.target.value)} />
          </div>
          <div className='unitCover'>
              <label>Rating</label>
              <input type="number" value={rating} onChange={e => setRating(e.target.value)} />
          </div>
          <div className='unitCover'>
              <label>Description</label>
              <textarea style={{ height: '180px', width: '250px'}} type="text" value={description} onChange={e => setDescription(e.target.value)} />
          </div>
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default connect(null, { addProduct })(AddProduct);
