import jsPDF from 'jspdf';
import 'jspdf-autotable';

export const exportToPDF = () => {
  const doc = new jsPDF();
  
  // Company details
  doc.setFontSize(10);
  doc.text('M/S RETAR MEDISERVE PRIVATE LIMITED', 15, 15);
  doc.setFontSize(8);
  doc.text('MAHATABPUR NEAR APARTMENT MIDNAPORE', 15, 20);
  doc.text('PASCHIM MEDINIPUR', 15, 25);
  doc.text('Phone: 9749431711', 15, 30);
  doc.text('DL No.: WB/PAM/RLN/08/58806', 15, 35);
  doc.text('Email: rimsmedi@gmail.com', 15, 40);

  // Customer details
  doc.text('NAME: Arya Jana', 195, 15, { align: 'right' });
  doc.text('DR.NAME: Dr. DK Mondal', 195, 20, { align: 'right' });
  doc.text('Address: Haldia', 195, 25, { align: 'right' });
  doc.text('Ph No: 9038443073', 195, 30, { align: 'right' });
  doc.text('Page No.: 1', 195, 35, { align: 'right' });

  // Invoice title
  doc.setFontSize(12);
  doc.text('GST INVOICE', 105, 50, { align: 'center' });
  doc.setFontSize(8);
  doc.text('Invoice No.: A000100    Date: 23-11-2024', 195, 50, { align: 'right' });
  
  // Invoice table
 
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
    styles: { fontSize: 8, cellPadding: 1 },
    headStyles: { fillColor: [255, 255, 255], textColor: [0, 0, 0], fontStyle: 'bold' },
    theme: 'grid',
  });

  const finalY = doc.lastAutoTable.finalY || 150;

  // Footer
  doc.setFontSize(8);
  doc.text('** GET WELL SOON **', 15, finalY + 10);
  doc.text('Card Balance - 10', 15, finalY + 15);
  doc.text('Credit Amount - 25', 15, finalY + 20);
  doc.text('Debit Amount - 0', 15, finalY + 25);
  doc.text('TOTAL CARD BALANCE: 35', 15, finalY + 30);
  doc.setFont(undefined, 'italic');
  doc.text('Rs. Three Hundred Twelve Only', 15, finalY + 35);

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
  doc.setFont(undefined, 'normal');
  doc.text('Receiver', 15, finalY + 50);
  doc.text('For M/S RETAR MEDISERVE PRIVATE LIMITED', 195, finalY + 50, { align: 'right' });

  // Terms & Conditions
  doc.line(15, finalY + 55, 195, finalY + 55);
  doc.text('Terms & Conditions', 15, finalY + 60);

  doc.save('invoice.pdf');
};

