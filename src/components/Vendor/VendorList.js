import React, { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Add, Edit, Delete } from '@mui/icons-material';
import AddVendor from './AddVendor';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: '#f5f5f5',
  borderRadius: theme.spacing(1),
}));

const SearchContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3),
}));

const Title = styled(Typography)(({ theme }) => ({
  color: '#00B0F0',
  fontSize: '2rem',
  marginBottom: theme.spacing(3),
}));

// Sample vendor data
const sampleVendors = [
  {
    vnCode: 'R1608',
    businessName: 'New Mother',
    phone: '9038443073',
    gstNo: 'AQw1fg0254',
  },
  {
    vnCode: 'R1605',
    businessName: 'Apollo pharmacy',
    phone: '9749431711',
    gstNo: '19HNS623843',
  },
];

export default function VendorList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddVendorOpen, setIsAddVendorOpen] = useState(false);
  const [vendors] = useState(sampleVendors);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredVendors = vendors.filter(vendor =>
    vendor.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vendor.vnCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vendor.phone.includes(searchTerm)
  );

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <StyledPaper>
          <Title>Vendor List</Title>
          
          <SearchContainer>
            <TextField
              fullWidth
              placeholder="Search Vendor"
              value={searchTerm}
              onChange={handleSearchChange}
              sx={{
                backgroundColor: 'white',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                }
              }}
            />
            <Button
              variant="contained"
              startIcon={<Add />}
              onClick={() => setIsAddVendorOpen(true)}
              sx={{
                bgcolor: '#00B0F0',
                '&:hover': {
                  bgcolor: '#0091D5',
                },
                borderRadius: '8px',
                px: 3,
              }}
            >
              Add Vendor
            </Button>
          </SearchContainer>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: '#428BCA', '& > *': { color: 'white' } }}>
                  <TableCell>Vn-code</TableCell>
                  <TableCell>Business Name</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>GST no</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredVendors.map((vendor) => (
                  <TableRow key={vendor.vnCode}>
                    <TableCell>{vendor.vnCode}</TableCell>
                    <TableCell>{vendor.businessName}</TableCell>
                    <TableCell>{vendor.phone}</TableCell>
                    <TableCell>{vendor.gstNo}</TableCell>
                    <TableCell>
                      <IconButton color="primary" size="small">
                        <Edit />
                      </IconButton>
                      <IconButton color="error" size="small">
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </StyledPaper>
      </Box>

      <Dialog
        open={isAddVendorOpen}
        onClose={() => setIsAddVendorOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <AddVendor onClose={() => setIsAddVendorOpen(false)} />
      </Dialog>
    </Container>
  );
}

