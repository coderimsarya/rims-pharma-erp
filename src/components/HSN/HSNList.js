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
import { Add, ExitToApp } from '@mui/icons-material';
import AddHSN from './AddHSN';

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
  fontSize: '2rem',
  fontWeight: 500,
  marginBottom: theme.spacing(3),
}));

const ViewAllButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#E8F5F3',
  color: '#00B0F0',
  '&:hover': {
    backgroundColor: '#D1EAE7',
  },
}));

// Sample HSN data
const initialHSNs = [
  {
    id: 1,
    hsnNo: '6605',
    cgst: '6',
    sgst: '6',
    igst: '12',
  },
  {
    id: 2,
    hsnNo: '6605',
    cgst: '6',
    sgst: '6',
    igst: '12',
  },
];

export default function HSNList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddHSNOpen, setIsAddHSNOpen] = useState(false);
  const [hsns, setHSNs] = useState(initialHSNs);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddHSN = (newHSN) => {
    setHSNs([...hsns, { ...newHSN, id: Date.now() }]);
    setIsAddHSNOpen(false);
  };

  const filteredHSNs = hsns.filter(hsn =>
    hsn.hsnNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <StyledPaper>
          <Title>HSN List</Title>
          
          <SearchContainer>
            <TextField
              fullWidth
              placeholder="Search HSN"
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
              onClick={() => setIsAddHSNOpen(true)}
              sx={{
                bgcolor: '#00B0F0',
                '&:hover': {
                  bgcolor: '#0091D5',
                },
                borderRadius: '8px',
                px: 3,
              }}
            >
              Add HSN
            </Button>
          </SearchContainer>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: '#428BCA', '& > *': { color: 'white' } }}>
                  <TableCell>HSN No</TableCell>
                  <TableCell>CGST</TableCell>
                  <TableCell>SGST</TableCell>
                  <TableCell>IGST</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredHSNs.map((hsn) => (
                  <TableRow key={hsn.id}>
                    <TableCell>{hsn.hsnNo}</TableCell>
                    <TableCell>{hsn.cgst}</TableCell>
                    <TableCell>{hsn.sgst}</TableCell>
                    <TableCell>{hsn.igst}</TableCell>
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
        </StyledPaper>
      </Box>

      <Dialog
        open={isAddHSNOpen}
        onClose={() => setIsAddHSNOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <AddHSN onClose={() => setIsAddHSNOpen(false)} onAdd={handleAddHSN} />
      </Dialog>
    </Container>
  );
}

