import React, { useState } from 'react';
import { 
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  IconButton,
  TextField,
  Dialog,
  Grid2,
  Card,
  CardContent,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PrintIcon from '@mui/icons-material/Print';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import AddIcon from '@mui/icons-material/Add';
import CreateInvoice from './Invoice/CreateInvoice';
import PrintInvoice from './Invoice/PrintInvoice';

export default function SalesReport() {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [isCreateInvoiceOpen, setIsCreateInvoiceOpen] = useState(false);
  const [isPrintInvoiceOpen, setIsPrintInvoiceOpen] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  // Sample data
  const rows = [
    {
      invoiceNo: '0025',
      date: '12/12/2024',
      customerName: 'Arya Jana',
      subTotal: 278.58,
      gst: 33.42,
      payableAmt: 312,
    },
    {
      invoiceNo: '0026',
      date: '12/12/2024',
      customerName: 'Arya Jana',
      subTotal: 278.58,
      gst: 33.42,
      payableAmt: 312,
    },
  ];

  const handleCreateInvoice = () => {
    setIsCreateInvoiceOpen(true);
  };

  const handlePrintInvoice = (invoice) => {
    setSelectedInvoice(invoice);
    setIsPrintInvoiceOpen(true);
  };

  return (
    <Box sx={{ p: 3, maxWidth: 1200, margin: 'auto' }}>
      <Grid2 container spacing={3}>
        <Grid2 size={{ xs: 12}}>
          <Typography
            variant="h4"
            sx={{
              color: '#33B6E6',
              mb: 3,
              fontWeight: 'normal'
            }}
          >
            Sales Report
          </Typography>
        </Grid2>

        <Grid2 size={{ xs: 12, md: 3 }}>
          <TextField
            fullWidth
            label="From Date"
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            InputLabelProps2={{
              shrink: true,
            }}
            size="small"
          />
        </Grid2>
        <Grid2  size={{ xs: 12, md: 3 }}>
          <TextField
            fullWidth
            label="To Date"
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            size="small"
          />
        </Grid2>
        <Grid2  size={{ xs: 12, md: 3 }}>
          <Button
            fullWidth
            variant="contained"
            startIcon={<FileDownloadIcon />}
            sx={{
              bgcolor: '#33B6E6',
              '&:hover': { bgcolor: '#2DA6D3' }
            }}
          >
            Export Excel
          </Button>
        </Grid2>
        <Grid2  size={{ xs: 12, md: 3 }}>
          <Button
            fullWidth
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              bgcolor: '#33B6E6',
              '&:hover': { bgcolor: '#2DA6D3' },
            }}
            onClick={handleCreateInvoice}
          >
            Create Invoice
          </Button>
        </Grid2>

        <Grid2  size={{ xs: 12}}>
          <Card elevation={3}>
            <CardContent>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow sx={{ bgcolor: '#E5E5E5' }}>
                      <TableCell>Invoice No</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Customer Name</TableCell>
                      <TableCell>Sub Total</TableCell>
                      <TableCell>GST</TableCell>
                      <TableCell>Payable Amt</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{row.invoiceNo}</TableCell>
                        <TableCell>{row.date}</TableCell>
                        <TableCell>{row.customerName}</TableCell>
                        <TableCell>{row.subTotal}</TableCell>
                        <TableCell>{row.gst}</TableCell>
                        <TableCell>{row.payableAmt}</TableCell>
                        <TableCell>
                          <IconButton size="small" color="primary">
                            <EditIcon />
                          </IconButton>
                          <IconButton size="small" color="error">
                            <DeleteIcon />
                          </IconButton>
                          <IconButton size="small" color="default" onClick={() => handlePrintInvoice(row)}>
                            <PrintIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>

      <Dialog
        open={isCreateInvoiceOpen}
        onClose={() => setIsCreateInvoiceOpen(false)}
        maxWidth="lg"
        fullWidth
      >
        <CreateInvoice onClose={() => setIsCreateInvoiceOpen(false)} />
      </Dialog>

      <Dialog
        open={isPrintInvoiceOpen}
        onClose={() => setIsPrintInvoiceOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <PrintInvoice invoice={selectedInvoice} onClose={() => setIsPrintInvoiceOpen(false)} />
      </Dialog>
    </Box>
  );
}

