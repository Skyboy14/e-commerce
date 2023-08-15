import React, { useState } from 'react';
import '../StyleSheet/NavBar.css'; // Import your CSS file for styling
import { Modal } from '@mui/material';
import ProductAdd from './ProductAdd';

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
    <nav className="navbar">
      <ul className="navbar-nav">
        <li>
            E-Commerce
        </li>
        <li >
            Products{ }
        </li>
        <li >
          <button className="nav-link" onClick={handleOpen}>
            Add Product
          </button>
        </li>
        <li style={{marginLeft: '800px'}}>
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
