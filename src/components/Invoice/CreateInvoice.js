import React, { useState } from 'react'
import {
  Box,
  Button,
  Container,
  Grid2,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Dialog,
} from '@mui/material'
import AddCustomer from '../Customer/AddCustomer'

function CreateInvoice() {
  const [customerDetails, setCustomerDetails] = useState({
    phone: '',
    name: 'Arya Jana',
    mobile: '9038443073',
    gstNo: '19HGSTXX5456',
  })

  const [billingDetails, setBillingDetails] = useState({
    product: '',
    qty: '',
    mrp: '',
  })

  const [items, setItems] = useState([
    {
      sn: 1,
      qty: '1.0',
      pack: '15T',
      product: 'ROSUVAS 10 TAB',
      batch: 'S1E0409B',
      exp: '7/25',
      hsn: '3004',
      mrp: '312.00',
      rate: '312.00',
      dis: '0.00',
      sgst: '6.00',
      cgst: '6.00',
      amount: '312.00',
    },
  ])

  const [cardDetails, setCardDetails] = useState({
    discount: '',
    discountValue: '',
    cardValue: '25',
    lessValue: '',
  })

  const [doctorName, setDoctorName] = useState('')
  const [paymentStatus, setPaymentStatus] = useState('')
  const [isAddCustomerOpen, setIsAddCustomerOpen] = useState(false)

  const handleAddItem = () => {
    if (billingDetails.product && billingDetails.qty && billingDetails.mrp) {
      const newItem = {
        sn: items.length + 1,
        qty: billingDetails.qty,
        pack: '15T',
        product: billingDetails.product,
        batch: 'S1E0409B',
        exp: '7/25',
        hsn: '3004',
        mrp: billingDetails.mrp,
        rate: billingDetails.mrp,
        dis: '0.00',
        sgst: '6.00',
        cgst: '6.00',
        amount: billingDetails.mrp,
      }
      setItems([...items, newItem])
      setBillingDetails({ product: '', qty: '', mrp: '' })
    }
  }

  const calculateTotals = () => {
    const subTotal = items.reduce((sum, item) => sum + parseFloat(item.amount), 0)
    const sgst = subTotal * 0.06
    const cgst = subTotal * 0.06
    return {
      subTotal: subTotal.toFixed(2),
      sgst: sgst.toFixed(2),
      cgst: cgst.toFixed(2),
      grandTotal: (subTotal + sgst + cgst).toFixed(2),
    }
  }

  const totals = calculateTotals()

  const handleAddCustomerClick = () => {
    setIsAddCustomerOpen(true)
  }

  const handleAddCustomerClose = () => {
    setIsAddCustomerOpen(false)
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant="h4" sx={{ color: '#33B6E6' }}>
            Create Invoice
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: '#33B6E6',
              '&:hover': { bgcolor: '#2DA6D3' },
            }}
          >
            Submit
          </Button>
        </Box>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Grid2 container spacing={2} alignItems="center">
            <Grid2 size={{ xs: 12, md: 4 }}>
              <TextField
                fullWidth
                label="Phone No"
                value={customerDetails.phone}
                onChange={(e) =>
                  setCustomerDetails({ ...customerDetails, phone: e.target.value })
                }
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 2 }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#33B6E6',
                  '&:hover': { bgcolor: '#2DA6D3' },
                }}
              >
                Add
              </Button>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <Button
                variant="contained"
                onClick={handleAddCustomerClick}
                sx={{
                  bgcolor: '#33B6E6',
                  '&:hover': { bgcolor: '#2DA6D3' },
                }}
              >
                Add Customer
              </Button>
            </Grid2>
          </Grid2>

          <Box sx={{ mt: 2 }}>
            <Typography>Name - {customerDetails.name}</Typography>
            <Typography>Mobile - {customerDetails.mobile}</Typography>
            <Typography>GST No - {customerDetails.gstNo}</Typography>
          </Box>
        </Paper>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Billing Details
          </Typography>
          <Grid2 container spacing={2} sx={{ mb: 3 }}>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <TextField
                fullWidth
                label="Product"
                value={billingDetails.product}
                onChange={(e) =>
                  setBillingDetails({
                    ...billingDetails,
                    product: e.target.value,
                  })
                }
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <TextField
                fullWidth
                label="Qty"
                type="number"
                value={billingDetails.qty}
                onChange={(e) =>
                  setBillingDetails({ ...billingDetails, qty: e.target.value })
                }
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <TextField
                fullWidth
                label="MRP"
                type="number"
                value={billingDetails.mrp}
                onChange={(e) =>
                  setBillingDetails({ ...billingDetails, mrp: e.target.value })
                }
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 2 }}>
              <Button
                fullWidth
                variant="contained"
                onClick={handleAddItem}
                sx={{
                  bgcolor: '#33B6E6',
                  '&:hover': { bgcolor: '#2DA6D3' },
                }}
              >
                Add Items
              </Button>
            </Grid2>
          </Grid2>

          <TableContainer component={Paper} sx={{ mb: 3 }}>
            <Table size="small">
              <TableHead>
                <TableRow sx={{ bgcolor: '#f5f5f5' }}>
                  <TableCell>Sn.</TableCell>
                  <TableCell>Qty</TableCell>
                  <TableCell>Pack</TableCell>
                  <TableCell>Product</TableCell>
                  <TableCell>Batch</TableCell>
                  <TableCell>Exp.</TableCell>
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
                {items.map((item) => (
                  <TableRow key={item.sn}>
                    <TableCell>{item.sn}</TableCell>
                    <TableCell>{item.qty}</TableCell>
                    <TableCell>{item.pack}</TableCell>
                    <TableCell>{item.product}</TableCell>
                    <TableCell>{item.batch}</TableCell>
                    <TableCell>{item.exp}</TableCell>
                    <TableCell>{item.hsn}</TableCell>
                    <TableCell>{item.mrp}</TableCell>
                    <TableCell>{item.rate}</TableCell>
                    <TableCell>{item.dis}</TableCell>
                    <TableCell>{item.sgst}</TableCell>
                    <TableCell>{item.cgst}</TableCell>
                    <TableCell>{item.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Grid2 container spacing={3}>
            <Grid2 size={{ xs: 12, md: 8 }}>
              <Paper
                sx={{ p: 2, bgcolor: '#FFF3E0', mb: { xs: 2, md: 0 } }}
                elevation={0}
              >
                <Grid2 container spacing={2}>
                  <Grid2 size={{ xs: 12, md: 4 }}>
                    <TextField
                      fullWidth
                      label="Discount"
                      value={cardDetails.discount}
                      onChange={(e) =>
                        setCardDetails({
                          ...cardDetails,
                          discount: e.target.value,
                        })
                      }
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 12, md: 4 }}>
                    <TextField
                      fullWidth
                      label="Discount Value"
                      value={cardDetails.discountValue}
                      onChange={(e) =>
                        setCardDetails({
                          ...cardDetails,
                          discountValue: e.target.value,
                        })
                      }
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 12, md: 4 }}>
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{
                        bgcolor: '#33B6E6',
                        '&:hover': { bgcolor: '#2DA6D3' },
                      }}
                    >
                      Add to Card
                    </Button>
                  </Grid2>
                  <Grid2 size={{ xs: 12 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        mt: 2,
                      }}
                    >
                      <Typography>Card Value</Typography>
                      <Box sx={{ bgcolor: '#E0E0E0', px: 2, py: 1 }}>
                        {cardDetails.cardValue}
                      </Box>
                      <TextField
                        label="Less Value"
                        size="small"
                        value={cardDetails.lessValue}
                        onChange={(e) =>
                          setCardDetails({
                            ...cardDetails,
                            lessValue: e.target.value,
                          })
                        }
                      />
                    </Box>
                  </Grid2>
                </Grid2>
              </Paper>
            </Grid2>

            <Grid2 size={{ xs: 12, md: 4 }}>
              <Grid2 container spacing={2}>
                <Grid2 size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Doctor Name"
                    value={doctorName}
                    onChange={(e) => setDoctorName(e.target.value)}
                  />
                </Grid2>
                <Grid2 size={{ xs: 12 }}>
                  <FormControl fullWidth>
                    <InputLabel>Payment Status</InputLabel>
                    <Select
                      value={paymentStatus}
                      label="Payment Status"
                      onChange={(e) => setPaymentStatus(e.target.value)}
                    >
                      <MenuItem value="paid">Paid</MenuItem>
                      <MenuItem value="pending">Pending</MenuItem>
                    </Select>
                  </FormControl>
                </Grid2>
              </Grid2>
            </Grid2>
          </Grid2>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              mt: 3,
              borderTop: '1px solid #e0e0e0',
              pt: 2,
            }}
          >
            <Box sx={{ textAlign: 'right' }}>
              <Typography>SUB TOTAL: {totals.subTotal}</Typography>
              <Typography>SGST PAYBLE: {totals.sgst}</Typography>
              <Typography>CGST PAYBLE: {totals.cgst}</Typography>
              <Typography>ADD/LESS: 0.00</Typography>
              <Typography>CR/DR NOTE: 0.00</Typography>
              <Typography>Card LESS: 0.00</Typography>
              <Typography variant="h6" sx={{ mt: 1 }}>
                GRAND TOTAL: {totals.grandTotal}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>

      <Dialog
        open={isAddCustomerOpen}
        onClose={handleAddCustomerClose}
        maxWidth="md"
        fullWidth
      >
        <AddCustomer onClose={handleAddCustomerClose} />
      </Dialog>
    </Container>
  )
}

export default CreateInvoice

