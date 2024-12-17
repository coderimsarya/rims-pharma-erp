import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

export default function AddOrder({ onClose, onAdd }) {
  const [formData, setFormData] = useState({
    productName: '',
    strength: '',
    size: '',
    quantity: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    onClose();
  };

  return (
    <Box>
      <DialogTitle>Add New Order</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            name="productName"
            label="Product Name"
            value={formData.productName}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            name="strength"
            label="Strength"
            value={formData.strength}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            name="size"
            label="Size"
            value={formData.size}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            name="quantity"
            label="Quantity"
            type="number"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Add Order
        </Button>
      </DialogActions>
    </Box>
  );
}

