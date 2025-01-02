import React, { useState } from 'react';
import {
  Box,
  TextField,
  Typography,
  Grid2,
  Button,
  DialogContent,
  DialogActions,
  Divider,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const HeaderBox = styled(Box)`
  background-color: #1976d2;
  color: white;
  padding: 24px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  margin-bottom: 24px;
`;

const SectionTitle = styled(Typography)`
  color: #1976d2;
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 24px;
  margin-top: 32px;
  padding-bottom: 8px;
  border-bottom: 2px solid #1976d2;
`;

const VendorCode = styled(Typography)`
  color: #1976d2;
  marginTop: 24px;
  fontSize: 1rem;
  fontWeight: 500;
  padding: 8px;
  backgroundColor: #e3f2fd;
  borderRadius: 4px;
  display: inline-block;
`;

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
      
      <DialogContent sx={{ px: 4, py: 2 }}>
        <form id="add-vendor-form" onSubmit={handleSubmit}>
          <SectionTitle>Vendor Details</SectionTitle>
          <Grid2 container spacing={3}>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <TextField
                fullWidth
                name="firstName"
                label="First Name"
                variant="outlined"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <TextField
                fullWidth
                name="midName"
                label="Mid Name"
                variant="outlined"
                value={formData.midName}
                onChange={handleInputChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <TextField
                fullWidth
                name="lastName"
                label="Last Name"
                variant="outlined"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </Grid2>

            <Grid2 size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                name="phoneNumber"
                label="Phone Number"
                variant="outlined"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                name="altPhoneNumber"
                label="Alt Phone Number"
                variant="outlined"
                value={formData.altPhoneNumber}
                onChange={handleInputChange}
              />
            </Grid2>

            <Grid2 size={{ xs: 12 }}>
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
            </Grid2>
          </Grid2>
          <Divider sx={{ my: 4 }} />
          <SectionTitle>Business Details</SectionTitle>
          <Grid2 container spacing={3}>
            <Grid2 size={{ xs: 12 }}>
              <TextField
                fullWidth
                name="businessName"
                label="Business Name"
                variant="outlined"
                value={formData.businessName}
                onChange={handleInputChange}
              />
            </Grid2>

            <Grid2 size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                name="typeOfBusiness"
                label="Type Of Business"
                variant="outlined"
                value={formData.typeOfBusiness}
                onChange={handleInputChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                name="gstNumber"
                label="GST Number"
                variant="outlined"
                value={formData.gstNumber}
                onChange={handleInputChange}
              />
            </Grid2>

            <Grid2 size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                name="dlNumber"
                label="DL Number"
                variant="outlined"
                value={formData.dlNumber}
                onChange={handleInputChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                name="panNumber"
                label="PAN Number"
                variant="outlined"
                value={formData.panNumber}
                onChange={handleInputChange}
              />
            </Grid2>

            <Grid2 size={{ xs: 12 }}>
              <TextField
                fullWidth
                name="mobileNumber"
                label="Mobile Number"
                variant="outlined"
                value={formData.mobileNumber}
                onChange={handleInputChange}
              />
            </Grid2>

            <Grid2 size={{ xs: 12 }}>
              <TextField
                fullWidth
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                value={formData.email}
                onChange={handleInputChange}
              />
            </Grid2>

            <Grid2 size={{ xs: 12 }}>
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
            </Grid2>
          </Grid2>

          <VendorCode>
            Vendor Code - RETA24002 
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
            bgcolor: '#1976d2',
            '&:hover': {
              bgcolor: '#1565c0',
            },
            px: 4,
            py: 1,
          }}
        >
          Submit
        </Button>
      </DialogActions>
    </>
  );
}

