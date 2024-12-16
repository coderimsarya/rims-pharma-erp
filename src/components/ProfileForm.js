import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid2,
  IconButton,
  Container,
  Divider,
  Card,
  CardContent,
} from '@mui/material';
import { CloudUpload, Business, Phone, Home, Person } from '@mui/icons-material';

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    typeOfBusiness: '',
    gstNumber: '',
    dlNumber: '',
    panNumber: '',
    mobileNumber1: '',
    mobileNumber2: '',
    email: '',
    website: '',
    addressLine1: '',
    addressLine2: '',
    district: '',
    state: '',
    country: '',
    pincode: '',
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
    console.log(formData);
    // Handle form submission
  };

  const SectionCard = ({ title, icon, children }) => (
    <Card elevation={3} sx={{ mb: 4 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          {icon}
          <Typography variant="h6" sx={{ ml: 1, color: '#1976d2' }}>
            {title}
          </Typography>
        </Box>
        <Divider sx={{ mb: 3 }} />
        {children}
      </CardContent>
    </Card>
  );

  return (
    <Container maxWidth="lg">
      <Box component="main" sx={{ flexGrow: 1, py: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 4, color: '#1976d2', fontWeight: 'bold' }}>
          Create Pharmacy Profile
        </Typography>

        <form onSubmit={handleSubmit}>
          <SectionCard title="Business Details" icon={<Business color="primary" />}>
            <Grid2 container spacing={3}>
              <Grid2 size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  label="Business Name"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Type Of Business"
                  name="typeOfBusiness"
                  value={formData.typeOfBusiness}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="GST Number"
                  name="gstNumber"
                  value={formData.gstNumber}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="DL Number"
                  name="dlNumber"
                  value={formData.dlNumber}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="PAN Number"
                  name="panNumber"
                  value={formData.panNumber}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid2>
            </Grid2>
          </SectionCard>

          <SectionCard title="Contact Information" icon={<Phone color="primary" />}>
            <Grid2 container spacing={3}>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Mobile Number"
                  name="mobileNumber1"
                  value={formData.mobileNumber1}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Alternative Mobile Number"
                  name="mobileNumber2"
                  value={formData.mobileNumber2}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid2>
            </Grid2>
          </SectionCard>

          <SectionCard title="Address" icon={<Home color="primary" />}>
            <Grid2 container spacing={3}>
              <Grid2 size={{ xs: 12}}>
                <TextField
                  fullWidth
                  label="Address Line 1"
                  name="addressLine1"
                  value={formData.addressLine1}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid2>
              <Grid2 size={{ xs: 12}}>
                <TextField
                  fullWidth
                  label="Address Line 2"
                  name="addressLine2"
                  value={formData.addressLine2}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="District"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="State"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 4 }}>
                <TextField
                  fullWidth
                  label="Pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid2>
            </Grid2>
          </SectionCard>

          <SectionCard title="Profile Picture" icon={<Person color="primary" />}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: 3,
                border: '2px dashed #1976d2',
                borderRadius: 2,
                bgcolor: '#f0f8ff',
              }}
            >
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
                sx={{ mb: 2 }}
              >
                <input hidden accept="image/*" type="file" />
                <CloudUpload sx={{ fontSize: 60, color: '#1976d2' }} />
              </IconButton>
              <Button
                variant="contained"
                component="label"
                sx={{
                  bgcolor: '#1976d2',
                  '&:hover': { bgcolor: '#1565c0' },
                }}
              >
                Upload
                <input hidden accept="image/*" type="file" />
              </Button>
            </Box>
          </SectionCard>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                px: 6,
                py: 1.5,
                bgcolor: '#1976d2',
                '&:hover': { bgcolor: '#1565c0' },
                fontSize: '1.1rem',
              }}
            >
              Save Profile
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default ProfileForm;

