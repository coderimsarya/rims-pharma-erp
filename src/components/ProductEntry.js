import React, { useState } from 'react';
import {
  Box,
  TextField,
  Typography,
  Grid,
  Button,
  Select,
  MenuItem,
  DialogContent,
  Dialog,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import AddHSN from './AddHSN';

const HeaderBox = styled(Box)({
  backgroundColor: '#FF5722',
  color: 'white',
  padding: '20px',
  borderTopLeftRadius: '4px',
  borderTopRightRadius: '4px',
});

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#00B0F0',
    },
    '&:hover fieldset': {
      borderColor: '#00B0F0',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#00B0F0',
    },
  },
});

export default function ProductEntry({ onClose }) {
  const [formData, setFormData] = useState({
    productName: '',
    pack: '',
    type: '',
    quantity: '',
    hsn: '',
    batchCode: '',
    mfr: '',
    expDate: '',
    mrp: '',
    rate: '',
    taxableAmt: '',
    discount: '',
    gst: '',
    totalAmount: '',
  });
  const [isAddHSNOpen, setIsAddHSNOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    onClose();
  };

  const handleAddHSNClick = () => {
    setIsAddHSNOpen(true);
  };

  const handleAddHSNClose = () => {
    setIsAddHSNOpen(false);
  };


  return (
    <>
      <HeaderBox>
        <Typography variant="h6">Product entry</Typography>
      </HeaderBox>
      
      <DialogContent>
        <form id="product-entry-form" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <StyledTextField
                fullWidth
                name="productName"
                placeholder="Product Name"
                variant="outlined"
                value={formData.productName}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <StyledTextField
                fullWidth
                name="pack"
                placeholder="Pack"
                variant="outlined"
                value={formData.pack}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <StyledTextField
                fullWidth
                name="type"
                placeholder="Type"
                variant="outlined"
                value={formData.type}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <StyledTextField
                fullWidth
                name="quantity"
                placeholder="Quantity"
                variant="outlined"
                type="number"
                value={formData.quantity}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12} md={8}>
              <Select
                fullWidth
                name="hsn"
                value={formData.hsn}
                onChange={handleInputChange}
                displayEmpty
                placeholder="HSN"
                sx={{ borderColor: '#00B0F0' }}
              >
                <MenuItem disabled value="">HSN</MenuItem>
                <MenuItem value="3004">3004</MenuItem>
              </Select>
            </Grid>

            <Grid item xs={12} md={4}>
              <Button
                fullWidth
                variant="contained"
                onClick={handleAddHSNClick}
                sx={{
                  bgcolor: '#00B0F0',
                  '&:hover': {
                    bgcolor: '#0091D5',
                  },
                }}
              >
                Add HSN
              </Button>
            </Grid>

            <Grid item xs={12} md={4}>
              <StyledTextField
                fullWidth
                name="batchCode"
                placeholder="Batch Code"
                variant="outlined"
                value={formData.batchCode}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <StyledTextField
                fullWidth
                name="mfr"
                placeholder="MFR"
                variant="outlined"
                value={formData.mfr}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <StyledTextField
                fullWidth
                name="expDate"
                placeholder="EXP Date"
                variant="outlined"
                value={formData.expDate}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <StyledTextField
                fullWidth
                name="mrp"
                placeholder="MRP"
                variant="outlined"
                type="number"
                value={formData.mrp}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <StyledTextField
                fullWidth
                name="rate"
                placeholder="Rate"
                variant="outlined"
                type="number"
                value={formData.rate}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <StyledTextField
                fullWidth
                name="taxableAmt"
                placeholder="Taxable Amt"
                variant="outlined"
                type="number"
                value={formData.taxableAmt}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <StyledTextField
                fullWidth
                name="discount"
                placeholder="Discount"
                variant="outlined"
                type="number"
                value={formData.discount}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <StyledTextField
                fullWidth
                name="gst"
                placeholder="GST"
                variant="outlined"
                type="number"
                value={formData.gst}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12}>
              <StyledTextField
                fullWidth
                name="totalAmount"
                placeholder="Total Amount"
                variant="outlined"
                type="number"
                value={formData.totalAmount}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>

          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                bgcolor: '#00B0F0',
                '&:hover': {
                  bgcolor: '#0091D5',
                },
                px: 4,
              }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </DialogContent>
      <Dialog
        open={isAddHSNOpen}
        onClose={handleAddHSNClose}
        maxWidth="sm"
        fullWidth
      >
        <AddHSN onClose={handleAddHSNClose} />
      </Dialog>
    </>
  );
}

