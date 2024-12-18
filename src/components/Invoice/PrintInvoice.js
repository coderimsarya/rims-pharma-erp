import React, { useRef } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useReactToPrint } from 'react-to-print';
import { jsPDF } from "jspdf";
import 'jspdf-autotable';

const PrintContainer = styled(Box)({
  width: '210mm', // A4 width
  height: '148.5mm', // A4 half-height
  padding: '10mm',
  margin: '0 auto',
  backgroundColor: 'white',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  fontSize: '10px', // Reduce base font size
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

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const exportToPDF = () => {
    const doc = new jsPDF();
    
    // Add company details
    doc.setFontSize(10);
    doc.text('M/S RETAR MEDISERVE PRIVATE LIMITED', 15, 15);
    doc.setFontSize(8);
    doc.text('MAHATABPUR NEAR APARTMENT MIDNAPORE', 15, 20);
    doc.text('PASCHIM MEDINIPUR', 15, 25);
    doc.text('Phone: 9749431711', 15, 30);
    doc.text('DL No.: WB/PAM/RLN/08/58806', 15, 35);
    doc.text('Email: rimsmedi@gmail.com', 15, 40);

    // Add customer details
    doc.text('NAME: Arya Jana', 195, 15, { align: 'right' });
    doc.text('DR.NAME: Dr. DK Mondal', 195, 20, { align: 'right' });
    doc.text('Address: Haldia', 195, 25, { align: 'right' });
    doc.text('Ph No: 9038443073', 195, 30, { align: 'right' });
    doc.text('Page No.: 1', 195, 35, { align: 'right' });

    // Add invoice title
    doc.setFontSize(12);
    doc.text('GST INVOICE', 105, 50, { align: 'center' });
    doc.setFontSize(8);
    doc.text('Invoice No.: A000100    Date: 23-11-2024', 195, 50, { align: 'right' });

    // Add invoice table
    doc.autoTable({
      startY: 55,
      head: [['SN', 'Qty', 'Pack', 'Product', 'Batch', 'Exp', 'HSN', 'MRP', 'Rate', 'Dis', 'SGST', 'CGST', 'Amount']],
      body: [
        ['1', '1.0', '15T', 'ROSUVAS 10 TAB', 'S1E0409B', '7/25', '3004', '312.00', '312.00', '0.00', '6.00', '6.00', '312.00'],
        ['', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', ''],
      ],
      styles: {
        fontSize: 8,
        cellPadding: 1,
      },
      headStyles: {
        fillColor: [255, 255, 255],
        textColor: [0, 0, 0],
        fontStyle: 'bold',
      },
      theme: 'grid',
    });

    
    const finalY = doc.lastAutoTable.finalY || 150;
   // Footer left side
   doc.setFontSize(8);
   doc.text('** GET WELL SOON **', 15, finalY + 10);
   doc.text('Card Balance - 10', 15, finalY + 15);
   doc.text('Credit Amount - 25', 15, finalY + 20);
   doc.text('Debit Amount - 0', 15, finalY + 25);
   doc.text('TOTAL CARD BALANCE: 35', 15, finalY + 30);
   doc.setFont(undefined, 'italic');
   doc.text('Rs. Three Hundred Twelve Only', 15, finalY + 35);

   // Footer right side (totals)
   //doc.setFontStyle('normal');
   doc.setFont(undefined, 'normal');
   doc.text('SUB TOTAL: 278.58', 195, finalY + 10, { align: 'right' });
   doc.text('SGST PAYBLE: 16.71', 195, finalY + 15, { align: 'right' });
   doc.text('CGST PAYBLE: 16.71', 195, finalY + 20, { align: 'right' });
   doc.text('ADD/LESS: 0.00', 195, finalY + 25, { align: 'right' });
   doc.text('CREDIT NOTE: 0.00', 195, finalY + 30, { align: 'right' });
   doc.text('Card LESS: 0.00', 195, finalY + 35, { align: 'right' });
   doc.setFont(undefined, 'bold');
   doc.text('GRAND TOTAL: 312.00', 195, finalY + 40, { align: 'right' });

   // Signature section
   //doc.setFontStyle('normal');
   doc.setFont(undefined, 'normal');
   doc.text('Receiver', 15, finalY + 50);
   doc.text('For M/S RETAR MEDISERVE PRIVATE LIMITED', 195, finalY + 50, { align: 'right' });

   // Terms & Conditions
   doc.line(15, finalY + 55, 195, finalY + 55);
   doc.text('Terms & Conditions', 15, finalY + 60);

   doc.save('invoice.pdf');
  };

  return (
    <Box sx={{ p: 1.5 }}>
      <Button
        variant="contained"
        onClick={handlePrint}
        sx={{ mb: 1, mr: 1 }}
      >
        Print Invoice
      </Button>
      <Button
        variant="contained"
        onClick={exportToPDF}
        sx={{ mb: 1 }}
      >
        Export to PDF
      </Button>

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
    </Box>
  );
}

