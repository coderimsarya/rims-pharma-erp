import React, { useState } from 'react';
import {
  Box,
  TextField,
  Typography,
  MenuItem,
  Grid,
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Close } from '@mui/icons-material';

const Title = styled(Typography)(({ theme }) => ({
  color: '#00B0F0',
  marginBottom: theme.spacing(3),
  fontWeight: 500,
}));

const CardValue = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFA726',
  color: 'white',
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  textAlign: 'center',
  fontSize: '1rem',
  fontWeight: 500,
}));

export default function AddCustomer({ onClose }) {
  const [formData, setFormData] = useState({
    phoneNo: '',
    firstName: '',
    midName: '',
    lastName: '',
    gst: '',
    gender: '',
    address: '',
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

  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <>
      <DialogTitle sx={{ m: 0, p: 2 }}>
        <Title variant="h6">Add Customer Details</Title>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <form id="add-customer-form" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <TextField
                fullWidth
                name="phoneNo"
                label="Phone No"
                variant="outlined"
                value={formData.phoneNo}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <CardValue>
                Card Value - 0
              </CardValue>
            </Grid>

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

            <Grid item xs={12} md={8}>
              <TextField
                fullWidth
                name="gst"
                label="GST"
                variant="outlined"
                value={formData.gst}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                select
                name="gender"
                label="Gender"
                variant="outlined"
                value={formData.gender}
                onChange={handleInputChange}
              >
                {genderOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                name="address"
                label="Address"
                variant="outlined"
                value={formData.address}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          type="submit"
          form="add-customer-form"
          variant="contained"
          sx={{
            bgcolor: '#00B0F0',
            '&:hover': {
              bgcolor: '#0091D5',
            },
          }}
        >
          Save
        </Button>
      </DialogActions>
    </>
  );
}

