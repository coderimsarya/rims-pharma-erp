import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Typography,
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

export default function AddHSN({ onClose }) {
  const [formData, setFormData] = useState({
    hsnNo: '',
    description: '',
    cgst: '',
    sgst: '',
    igst: '',
  });

  useEffect(() => {
    const cgstValue = parseFloat(formData.cgst) || 0;
    const sgstValue = parseFloat(formData.sgst) || 0;
    const igstValue = (cgstValue + sgstValue).toFixed(2);
    
    setFormData(prev => ({
      ...prev,
      igst: igstValue
    }));
  }, [formData.cgst, formData.sgst]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'hsnNo' || name === 'description' ? value : parseFloat(value) || ''
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    onClose();
  };

  return (
    <>
      <DialogTitle sx={{ m: 0, p: 2 }}>
        <Title variant="h6">Add HSN</Title>
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
        <form id="add-hsn-form" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="hsnNo"
                label="HSN No"
                variant="outlined"
                value={formData.hsnNo}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                name="description"
                label="Description"
                variant="outlined"
                value={formData.description}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                name="cgst"
                label="CGST %"
                variant="outlined"
                type="number"
                value={formData.cgst}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                name="sgst"
                label="SGST %"
                variant="outlined"
                type="number"
                value={formData.sgst}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                name="igst"
                label="IGST %"
                variant="outlined"
                type="number"
                value={formData.igst}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          type="submit"
          form="add-hsn-form"
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

