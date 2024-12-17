import React, { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  Select,
  MenuItem,
  Grid2,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Add, ExitToApp } from '@mui/icons-material';
import ProductEntry from './ProductEntry';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: '#f5f5f5',
  borderRadius: theme.spacing(1),
}));

const VendorDetails = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
  padding: theme.spacing(2),
  backgroundColor: 'white',
  borderRadius: theme.spacing(1),
}));

const Title = styled(Typography)(({ theme }) => ({
  color: '#00B0F0',
  fontSize: '2rem',
  marginBottom: theme.spacing(3),
}));

const ViewAllButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#E8F5F3',
  color: '#00B0F0',
  '&:hover': {
    backgroundColor: '#D1EAE7',
  },
}));

// Sample purchase data
const samplePurchases = [
  {
    vcod: '6605',
    qty: '5',
    pack: '10ml',
    product: 'Amritanjan Yellow',
    hsn: '3004',
    batch: 'C6324035',
    exDt: '8/27',
    mrp: '44.00',
    rate: '34.50',
    taxAmu: '138.00',
    gst: '12%',
    amount: '154.56',
  },
  {
    vcod: '6605',
    qty: '5',
    pack: '10ml',
    product: 'Amritanjan Yellow',
    hsn: '3004',
    batch: 'C6324035',
    exDt: '8/27',
    mrp: '44.00',
    rate: '34.50',
    taxAmu: '138.00',
    gst: '12%',
    amount: '154.56',
  },
];

export default function PurchaseList() {
  const [isProductEntryOpen, setIsProductEntryOpen] = useState(false);
  const [selectedVendor, setSelectedVendor] = useState('');
  const [purchases] = useState(samplePurchases);

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <StyledPaper>
          <Title>Purchase Entry</Title>
          
          <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 12, md: 9 }}>
              <Select
                fullWidth
                value={selectedVendor}
                onChange={(e) => setSelectedVendor(e.target.value)}
                displayEmpty
                sx={{
                  backgroundColor: 'white',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#f7fafc',
                  },
                }}
              >
                <MenuItem disabled value="">Select Vendor</MenuItem>
                <MenuItem value="vendor1">NC Medical Store</MenuItem>
              </Select>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 2 }}>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  bgcolor: '#22a3ff',
                  '&:hover': {
                    bgcolor: '#F4511E',
                  },
                }}
              >
                Add Vendor
              </Button>
            </Grid2>
          </Grid2>

          <VendorDetails>
            <Typography variant="subtitle1" gutterBottom>NC Medical Store</Typography>
            <Typography variant="body2" color="textSecondary">Pharmaceutical Distributor</Typography>
            <Typography variant="body2" color="textSecondary">Bibiganj</Typography>
            <Typography variant="body2" color="textSecondary">Paschim Medinipur</Typography>
            <Typography variant="body2" color="textSecondary">GST No - 19BLXPP2145565</Typography>
            <Typography variant="body2" color="textSecondary">Vcode - RETA24002</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
              <Typography variant="body2">Date - 10-12-2024</Typography>
              <Button
                variant="contained"
                startIcon={<Add />}
                onClick={() => setIsProductEntryOpen(true)}
                sx={{
                  bgcolor: '#00B0F0',
                  '&:hover': {
                    bgcolor: '#0091D5',
                  },
                }}
              >
                Add Product
              </Button>
            </Box>
          </VendorDetails>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: '#428BCA', '& > *': { color: '#FFFFFF' } }}>
                  <TableCell>Vcod</TableCell>
                  <TableCell>Qty</TableCell>
                  <TableCell>Pack</TableCell>
                  <TableCell>Product</TableCell>
                  <TableCell>HSN</TableCell>
                  <TableCell>Batch</TableCell>
                  <TableCell>ExDt</TableCell>
                  <TableCell>MRP</TableCell>
                  <TableCell>Rate</TableCell>
                  <TableCell>TaxAmu</TableCell>
                  <TableCell>GST</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {purchases.map((purchase, index) => (
                  <TableRow key={index}>
                    <TableCell>{purchase.vcod}</TableCell>
                    <TableCell>{purchase.qty}</TableCell>
                    <TableCell>{purchase.pack}</TableCell>
                    <TableCell>{purchase.product}</TableCell>
                    <TableCell>{purchase.hsn}</TableCell>
                    <TableCell>{purchase.batch}</TableCell>
                    <TableCell>{purchase.exDt}</TableCell>
                    <TableCell>{purchase.mrp}</TableCell>
                    <TableCell>{purchase.rate}</TableCell>
                    <TableCell>{purchase.taxAmu}</TableCell>
                    <TableCell>{purchase.gst}</TableCell>
                    <TableCell>{purchase.amount}</TableCell>
                    <TableCell>
                      <ViewAllButton
                        startIcon={<ExitToApp />}
                        size="small"
                      >
                        View all
                      </ViewAllButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Box sx={{ mt: 3, textAlign: 'right' }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#00B0F0',
                '&:hover': {
                  bgcolor: '#0091D5',
                },
                px: 4,
              }}
            >
              Save
            </Button>
          </Box>
        </StyledPaper>
      </Box>

      <Dialog
        open={isProductEntryOpen}
        onClose={() => setIsProductEntryOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <ProductEntry onClose={() => setIsProductEntryOpen(false)} />
      </Dialog>
    </Container>
  );
}

