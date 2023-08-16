import React, { useState } from 'react';
import '../StyleSheet/NavBar.css'; // Import your CSS file for styling
import { Modal } from '@mui/material';
import ProductAdd from './ProductAdd';

const Navbar = ({productsLen}) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
    <nav className="navbar">
      <ul className="navbar-nav">
        <li style={{color: 'aqua'}}>
            E-Commerce
        </li>
        <li style={{display:'flex'}} >
            Products Incart : <div className='ProductCount'>{productsLen}</div>
        </li>
        <li >
          <button style={{fontSize: 'inherit'}} className="nav-link" onClick={handleOpen}>
            Add Product +
          </button>
        </li>
        <li style={{marginLeft: '620px'}}>
          Hello Akash
        </li>
      </ul>
    </nav>

     <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                    >
                <ProductAdd handleClose={handleClose} />  
      </Modal>
      
      </>
  );
};

export default Navbar;
