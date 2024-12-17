import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  TextField,
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import AddOrder from './AddOrder';
import * as XLSX from 'xlsx';
import { jsPDF } from "jspdf";
import "jspdf-autotable";

const initialOrders = [
  { id: 1, date: '2024-12-01', quantity: 100, productName: 'Aspirin', strength: '500mg', size: '100 tablets' },
  { id: 2, date: '2024-12-02', quantity: 50, productName: 'Ibuprofen', strength: '400mg', size: '30 tablets' },
];

export default function OrderList() {
  const [orders, setOrders] = useState(initialOrders);
  const [filteredOrders, setFilteredOrders] = useState(orders);
  const [isAddOrderOpen, setIsAddOrderOpen] = useState(false);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  useEffect(() => {
    const filtered = orders.filter(order => {
      const orderDate = new Date(order.date);
      const filterFromDate = fromDate ? new Date(fromDate) : null;
      const filterToDate = toDate ? new Date(toDate) : null;

      if (filterFromDate && filterToDate) {
        return orderDate >= filterFromDate && orderDate <= filterToDate;
      } else if (filterFromDate) {
        return orderDate >= filterFromDate;
      } else if (filterToDate) {
        return orderDate <= filterToDate;
      }
      return true;
    });
    setFilteredOrders(filtered);
  }, [orders, fromDate, toDate]);

  const handleAddOrder = (newOrder) => {
    const updatedOrders = [...orders, { ...newOrder, id: Date.now() }];
    setOrders(updatedOrders);
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredOrders);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Orders");
    XLSX.writeFile(workbook, "OrderList.xlsx");
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [['Sl.No.', 'Date', 'Quantity', 'Product Name', 'Strength', 'Size']],
      body: filteredOrders.map((order, index) => [
        index + 1,
        order.date,
        order.quantity,
        order.productName,
        order.strength,
        order.size
      ]),
    });
    doc.save("OrderList.pdf");
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Order List</Typography>
      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setIsAddOrderOpen(true)}
        >
          Add Order
        </Button>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <TextField
            label="From Date"
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            InputLabelProps2={{ shrink: true }}
          />
          <TextField
            label="To Date"
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            InputLabelProps2={{ shrink: true }}
          />
          <Button variant="outlined" onClick={exportToExcel} sx={{ mr: 1 }}>
            Export to Excel
          </Button>
          <Button variant="outlined" onClick={exportToPDF}>
            Export to PDF
          </Button>
        </Box>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: '#428BCA', '& > *': { color: '#FFFFFF' } }}>
              <TableCell>Sl.No.</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Strength</TableCell>
              <TableCell>Size</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredOrders.map((order, index) => (
              <TableRow key={order.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.quantity}</TableCell>
                <TableCell>{order.productName}</TableCell>
                <TableCell>{order.strength}</TableCell>
                <TableCell>{order.size}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={isAddOrderOpen} onClose={() => setIsAddOrderOpen(false)}>
        <AddOrder onClose={() => setIsAddOrderOpen(false)} onAdd={handleAddOrder} />
      </Dialog>
    </Box>
  );
}

