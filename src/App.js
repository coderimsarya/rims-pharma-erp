import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ProfileForm from './components/ProfileForm';
import CustomerList from './components/Customer/CustomerList';
import HSNList from './components/HSN/HSNList';
import VendorList from './components/Vendor/VendorList';
import PurchaseList from './components/Purchase/PurchaseList';
import SalesReport from './components/SalesReport';
import MedicineList from './components/Inventory/MedicineList';
import NonMedicineList from './components/Inventory/NonMedicineList';
import OrderList from './components/Order/OrderList';
import PrintInvoice from './components/Invoice/PrintInvoice';
//import exportToPDF from './components/Invoice/exportToPDF';

const theme = createTheme({
  palette: {
    primary: {
      main: '#005B7F',
    },
    secondary: {
      main: '#00B0F0',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex' }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/profile" element={<ProfileForm />} />
              <Route path="/customers" element={<CustomerList />} />
              <Route path="/vendor" element={<VendorList />} />
              <Route path="/purchase" element={<PurchaseList />} />
              <Route path="/hsn" element={<HSNList />} />
              <Route path="/invoice" element={<SalesReport />} />
              <Route path="/medicinelist" element={<MedicineList />} />
              <Route path="/nonmedicinelist" element={<NonMedicineList />} />
              <Route path="/order" element={<OrderList />} />
              <Route path="/print-invoice" element={<PrintInvoice />} />
              <Route path="/pdf-export" element={<exportToPDF />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;

