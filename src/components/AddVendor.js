import React, { useState } from 'react';
import {
  Box,
  TextField,
  Typography,
  Grid,
  Button,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const HeaderBox = styled(Box)({
  backgroundColor: '#FF5722',
  color: 'white',
  padding: '20px',
  borderTopLeftRadius: '4px',
  borderTopRightRadius: '4px',
});

const SectionTitle = styled(Typography)({
  color: '#00B0F0',
  fontSize: '1.2rem',
  marginBottom: '20px',
  marginTop: '20px',
});

const VendorCode = styled(Typography)({
  color: '#666',
  marginTop: '20px',
  fontSize: '0.9rem',
});

export default function AddVendor({ onClose }) {
  const [formData, setFormData] = useState({
    firstName: '',
    midName: '',
    lastName: '',
    phoneNumber: '',
    altPhoneNumber: '',
    address: '',
    businessName: '',
    typeOfBusiness: '',
    gstNumber: '',
    dlNumber: '',
    panNumber: '',
    mobileNumber: '',
    email: '',
    companyAddress: '',
  });

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

  return (
    <>
      <HeaderBox>
        <Typography variant="h6">Add New Vendor</Typography>
      </HeaderBox>
      
      <DialogContent>
        <form id="add-vendor-form" onSubmit={handleSubmit}>
          <SectionTitle>Vendor Details</SectionTitle>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                name="firstName"
                label="First Name"
                variant="outlined"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                name="midName"
                label="Mid Name"
                variant="outlined"
                value={formData.midName}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                name="lastName"
                label="Last Name"
                variant="outlined"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                name="phoneNumber"
                label="Phone Number"
                variant="outlined"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                name="altPhoneNumber"
                label="Alt Phone Number"
                variant="outlined"
                value={formData.altPhoneNumber}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={3}
                name="address"
                label="Address"
                variant="outlined"
                value={formData.address}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>

          <SectionTitle>Business Details</SectionTitle>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="businessName"
                label="Business Name"
                variant="outlined"
                value={formData.businessName}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                name="typeOfBusiness"
                label="Type Of Business"
                variant="outlined"
                value={formData.typeOfBusiness}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                name="gstNumber"
                label="GST Number"
                variant="outlined"
                value={formData.gstNumber}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                name="dlNumber"
                label="DL Number"
                variant="outlined"
                value={formData.dlNumber}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                name="panNumber"
                label="PAN Number"
                variant="outlined"
                value={formData.panNumber}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                name="mobileNumber"
                label="Mobile Number"
                variant="outlined"
                value={formData.mobileNumber}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                value={formData.email}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={3}
                name="companyAddress"
                label="Company Address"
                variant="outlined"
                value={formData.companyAddress}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>

          <VendorCode>
            Vendor Code - RETA24002 ( Auto generated Vendor Code is Random - "RETA" is fixed )
          </VendorCode>
        </form>
      </DialogContent>
      <DialogActions sx={{ p: 3 }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          type="submit"
          form="add-vendor-form"
          variant="contained"
          sx={{
            bgcolor: '#4267B2',
            '&:hover': {
              bgcolor: '#365899',
            },
            px: 4,
          }}
        >
          Submit
        </Button>
      </DialogActions>
    </>
  );
}

