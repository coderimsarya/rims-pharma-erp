import React, { useRef, useState } from 'react';
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
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useReactToPrint } from 'react-to-print';
import { exportToPDF } from './ExportPDF';

const PrintContainer = styled(Box)({
  width: '210mm',
  height: '148.5mm',
  padding: '10mm',
  margin: '0 auto',
  backgroundColor: 'white',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  fontSize: '10px',
  '@media print': {
    boxShadow: 'none',
    padding: '5mm',
  },
});

const StyledTable = styled(Table)({
  '& .MuiTableCell-root': {
    padding: '2px 4px',
    fontSize: '8px',
    border: '1px solid #000',
  },
  '& .MuiTableHead-root .MuiTableCell-root': {
    fontWeight: 'bold',
    backgroundColor: '#f5f5f5',
  },
});

export default function PrintInvoice({ invoice }) {
  const componentRef = useRef();
  const [openPDFDialog, setOpenPDFDialog] = useState(false);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleExportToPDF = () => {
    setOpenPDFDialog(true);
  };

  const handleConfirmPDFExport = () => {
    setOpenPDFDialog(false);
    exportToPDF();
  };

  return (
    <Box sx={{ p: 1.5 }}>
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <Button
          variant="contained"
          onClick={handlePrint}
        >
          Print Invoice
        </Button>
        <Button
          variant="contained"
          onClick={handleExportToPDF}
          sx={{ mb: 1, mr: 1 }}
        >
          Export to PDF
        </Button>
      </Box>

      <PrintContainer ref={componentRef}>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '11px' }}>
              M/S RETAR MEDISERVE PRIVATE LIMITED
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '9px' }}>
              MAHATABPUR NEAR APARTMENT MIDNAPORE
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '9px' }}>
              PASCHIM MEDINIPUR
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '9px' }}>
              Phone: 9749431711
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '9px' }}>
              DL No.: WB/PAM/RLN/08/58806
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '9px' }}>
              Email: rimsmedi@gmail.com
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'right' }}>
            <Typography variant="body2" sx={{ fontSize: '9px' }}>
              NAME: Arya Jana
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '9px' }}>
              DR.NAME: Dr. DK Mondal
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '9px' }}>
              Address: Haldia
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '9px' }}>
              Ph No: 9038443073
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '9px' }}>
              Page No.: 1
            </Typography>
          </Box>
        </Box>

        {/* Invoice Title */}
        <Box sx={{ border: '1px solid #000', p: 0.5, mb: 1 }}>
          <Typography variant="h6" align="center" sx={{ fontSize: '11px', fontWeight: 'bold' }}>
            GST INVOICE
          </Typography>
          <Typography variant="body2" align="right" sx={{ fontSize: '9px' }}>
            Invoice No.: A000100 &nbsp;&nbsp;&nbsp; Date: 23-11-2024
          </Typography>
        </Box>

        {/* Invoice Table */}
        <TableContainer sx={{ mb: 1 }}>
          <StyledTable size="small">
            <TableHead>
              <TableRow>
                <TableCell>SN</TableCell>
                <TableCell>Qty</TableCell>
                <TableCell>Pack</TableCell>
                <TableCell>Product</TableCell>
                <TableCell>Batch</TableCell>
                <TableCell>Exp</TableCell>
                <TableCell>HSN</TableCell>
                <TableCell>MRP</TableCell>
                <TableCell>Rate</TableCell>
                <TableCell>Dis</TableCell>
                <TableCell>SGST</TableCell>
                <TableCell>CGST</TableCell>
                <TableCell>Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>1.0</TableCell>
                <TableCell>15T</TableCell>
                <TableCell>ROSUVAS 10 TAB</TableCell>
                <TableCell>S1E0409B</TableCell>
                <TableCell>7/25</TableCell>
                <TableCell>3004</TableCell>
                <TableCell>312.00</TableCell>
                <TableCell>312.00</TableCell>
                <TableCell>0.00</TableCell>
                <TableCell>6.00</TableCell>
                <TableCell>6.00</TableCell>
                <TableCell>312.00</TableCell>
              </TableRow>
              {/* Empty rows for spacing */}
              {[...Array(5)].map((_, index) => (
                <TableRow key={index}>
                  {[...Array(13)].map((_, cellIndex) => (
                    <TableCell key={cellIndex}>&nbsp;</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </StyledTable>
        </TableContainer>

        {/* Footer */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="body2" sx={{ fontSize: '9px', fontWeight: 'bold' }}>
              ** GET WELL SOON **
            </Typography>
            <Box sx={{ mt: 1 }}>
              <Typography variant="body2" sx={{ fontSize: '9px' }}>Card Balance - 10</Typography>
              <Typography variant="body2" sx={{ fontSize: '9px' }}>Credit Amount - 25</Typography>
              <Typography variant="body2" sx={{ fontSize: '9px' }}>Debit Amount - 0</Typography>
              <Typography variant="body2" sx={{ fontSize: '9px', mt: 0.5 }}>
                TOTAL CARD BALANCE: 35
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '9px', fontStyle: 'italic', mt: 0.5 }}>
                Rs. Three Hundred Twelve Only
              </Typography>
            </Box>
          </Box>
          <Box sx={{ textAlign: 'right' }}>
            <Typography variant="body2" sx={{ fontSize: '9px' }}>SUB TOTAL: 278.58</Typography>
            <Typography variant="body2" sx={{ fontSize: '9px' }}>SGST PAYBLE: 16.71</Typography>
            <Typography variant="body2" sx={{ fontSize: '9px' }}>CGST PAYBLE: 16.71</Typography>
            <Typography variant="body2" sx={{ fontSize: '9px' }}>ADD/LESS: 0.00</Typography>
            <Typography variant="body2" sx={{ fontSize: '9px' }}>CREDIT NOTE: 0.00</Typography>
            <Typography variant="body2" sx={{ fontSize: '9px' }}>Card LESS: 0.00</Typography>
            <Typography variant="body2" sx={{ fontSize: '9px', fontWeight: 'bold', mt: 0.5 }}>
              GRAND TOTAL: 312.00
            </Typography>
          </Box>
        </Box>

        {/* Signature Section */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Typography variant="body2" sx={{ fontSize: '9px' }}>Receiver</Typography>
          <Typography variant="body2" sx={{ fontSize: '9px' }}>
            For M/S RETAR MEDISERVE PRIVATE LIMITED
          </Typography>
        </Box>

        {/* Terms & Conditions */}
        <Box sx={{ mt: 2, borderTop: '1px solid #000', pt: 0.5 }}>
          <Typography variant="body2" sx={{ fontSize: '9px', fontWeight: 'bold' }}>
            Terms & Conditions
          </Typography>
        </Box>
      </PrintContainer>

      {/* PDF Export Confirmation Dialog */}
      <Dialog
        open={openPDFDialog}
        onClose={() => setOpenPDFDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Generate PDF"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to generate a PDF of this invoice?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenPDFDialog(false)}>Cancel</Button>
          <Button onClick={handleConfirmPDFExport} autoFocus>
            Generate PDF
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

