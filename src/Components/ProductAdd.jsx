import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../Redux/Action/Product';
import { toast } from 'react-toastify';

const AddProduct = ({ addProduct, handleClose }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
  

    const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  const handleAddProduct = () => {

    if (name === '' || image === '' || price === '' || rating === '' || description === '') {
         toast.error('Please add all fields')
    } else {
    const newProduct = {
      id: Math.random(), 
      image,
      name,
      price: parseFloat(price),
      rating: parseFloat(rating),
      description,
    };

    addProduct(newProduct);
    handleClose(true)

    toast.success('Product Added successfully')

    setImage(null);
    setName('');
    setPrice('');
    setRating('')
      setDescription('');
       }
  };

  return (
    <div className='covermain'>
      <h2>Add a New Product</h2>
          <div className='unitCover'>
            <label>Image</label>
            {!image && <input type="file" accept="image/*" onChange={handleImageChange} />}
            {image && <img src={image} alt="Selected" style={{ maxWidth: '100px' }} />}
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
              <textarea style={{ height: '120px', width: '250px'}} type="text" value={description} onChange={e => setDescription(e.target.value)} />
          </div>
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default connect(null, { addProduct })(AddProduct);
