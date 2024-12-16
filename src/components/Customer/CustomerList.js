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
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Search, Add } from '@mui/icons-material';
import AddCustomer from './AddCustomer';

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
  marginBottom: theme.spacing(3),
  fontWeight: 500,
}));

// Sample customer data
const sampleCustomers = [
  {
    id: 1,
    name: 'John Doe',
    phone: '9876543210',
    gst: 'GST123456',
    address: '123 Main St, City',
  },
  {
    id: 2,
    name: 'Jane Smith',
    phone: '9876543211',
    gst: 'GST123457',
    address: '456 Oak St, City',
  },
];

export default function CustomerList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddCustomerOpen, setIsAddCustomerOpen] = useState(false);
  const [customers] = useState(sampleCustomers);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.phone.includes(searchTerm) ||
    customer.gst.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <StyledPaper>
          <Title variant="h5">Customer List</Title>
          
          <SearchContainer>
            <TextField
              fullWidth
              placeholder="Search customers..."
              value={searchTerm}
              onChange={handleSearchChange}
              InputProps2={{
                startAdornment: <Search sx={{ color: 'text.secondary', mr: 1 }} />,
              }}
            />
            <Button
              variant="contained"
              startIcon={<Add />}
              onClick={() => setIsAddCustomerOpen(true)}
              sx={{
                bgcolor: '#00B0F0',
                '&:hover': {
                  bgcolor: '#0091D5',
                },
              }}
            >
              Add Customer
            </Button>
          </SearchContainer>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: '#f5f5f5' }}>
                  <TableCell>Name</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>GST</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredCustomers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell>{customer.name}</TableCell>
                    <TableCell>{customer.phone}</TableCell>
                    <TableCell>{customer.gst}</TableCell>
                    <TableCell>{customer.address}</TableCell>
                    <TableCell>
                      <Button
                        size="small"
                        sx={{ color: '#00B0F0' }}
                      >
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </StyledPaper>
      </Box>

      <Dialog
        open={isAddCustomerOpen}
        onClose={() => setIsAddCustomerOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <AddCustomer onClose={() => setIsAddCustomerOpen(false)} />
      </Dialog>
    </Container>
  );
}

