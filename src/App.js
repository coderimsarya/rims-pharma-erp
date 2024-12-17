import React, { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProfileForm from './components/ProfileForm';
import CustomerList from './components/Customer/CustomerList';
import HSNList from './components/HSN/HSNList';
import VendorList from './components/Vendor/VendorList';
import PurchaseList from './components/Purchase/PurchaseList';
import Sidebar from './components/Sidebar';
import SalesReport from './components/SalesReport';
//import Inventory from './components/Inventory';
import MedicineList from './components/Inventory/MedicineList';
import NonMedicineList from './components/Inventory/NonMedicineList';
import OrderList from './components/Order/OrderList';
import { Box } from '@mui/material';

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
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'profile':
        return <ProfileForm />;
        case 'customers':
        return <CustomerList />;
        case 'vendor':
        return <VendorList />;
        case 'purchase':
          return <PurchaseList />;
        case 'hsn':
          return <HSNList />;
        case'invoice':
          return <SalesReport />;
          case 'medicinelist':
            return <MedicineList />;
        case 'nonmedicinelist':
          return <NonMedicineList />;
          case 'order':
            return <OrderList />;
            
      default:
        return <Dashboard />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <Sidebar onPageChange={handlePageChange} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {renderPage()}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
