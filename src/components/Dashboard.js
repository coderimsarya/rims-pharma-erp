import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid2,
  Typography,
  Button,
  useTheme,
  useMediaQuery, 
  Dialog,
} from '@mui/material';
import {
  Receipt as ReceiptIcon,
  Add as AddIcon,
  AttachMoney as AttachMoneyIcon,
  ShoppingCart as ShoppingCartIcon,
  LocalMall as LocalMallIcon,
  MonetizationOn as MonetizationOnIcon,
  TrendingUp as TrendingUpIcon,
  
} from '@mui/icons-material';
import AddVendor from './Vendor/AddVendor';
import CreateInvoice from './Invoice/CreateInvoice';


const statsData = [
  { title: 'Total Sale', amount: '7000', color: '#00bcd4',  icon: <AttachMoneyIcon /> },
  { title: 'Total Purches', amount: '12000', color: '#ff5722', icon: <ShoppingCartIcon /> },
  { title: 'Total Order', amount: '7000', color: '#4caf50',  icon: <LocalMallIcon /> },
  { title: 'Total Revenue', amount: '7000', color: '#e91e63', icon: <MonetizationOnIcon /> },
];

const reportsData = [
  { title: 'Stock Report', color: '#ff5722' },
  { title: 'Sales Report', color: '#00bcd4' },
  { title: 'Purcher Report', color: '#e91e63' },
  { title: 'Vendor Report', color: '#4caf50' },
];


const Dashboard = () => {
  const [isAddVendorOpen, setIsAddVendorOpen] = React.useState(false);
  const [isCreateInvoiceOpen, setIsCreateInvoiceOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      {/* Pharmacy Info Card */}
      <Card sx={{ mb: 3, bgcolor: '#004d61', color: 'white' }}>
        <CardContent>
          <Grid2 container spacing={2} alignItems="center">
            <Grid2 size={{ xs: 12, md: 2 }}>
              <Box
                sx={{
                  width: 200,
                  height: 200,
                  bgcolor: 'white',
                  borderRadius: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                Profile Picture
              </Box>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Typography variant="h5" gutterBottom>
                Retar Mediserve Private Limited
              </Typography>
              <Typography variant="subtitle1">pharmacy</Typography>
              <Typography>DL - 0266446</Typography>
              <Typography>GST - 19XXRTC4G3</Typography>
              <Typography>Address: Medinipur, Mahatabpur</Typography>
              <Typography>Call: 9749431711</Typography>
              <Typography>Email: rimsmedipur@gmail.com</Typography>
            </Grid2>
          </Grid2>
        </CardContent>
      </Card>

      {/* Statistics Cards */}
      <Grid2 container spacing={3} sx={{ mb: 4 }}>
        {statsData.map((stat, index) => (
          <Grid2 size={{ xs: 12, sm:6, md: 3 }} key={index}>
            <Card
          key={index}
          sx={{
            p: 2,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                bgcolor: stat.color,
                color: 'white',
                borderRadius: 2,
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
                },
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6">{stat.title}</Typography>
                {stat.icon}
              </Box>
              <Typography variant="h4" fontWeight="bold">{stat.amount}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                <TrendingUpIcon sx={{ mr: 1 }} />
                <Typography variant="body2">This Month</Typography>
              </Box>
            </Card>
          </Grid2>
        ))}
      </Grid2>

      {/* Report Cards */}
      <Grid2 container spacing={2} sx={{ mb: 4 }}>
        {reportsData.map((report, index) => (
          <Grid2 size={{ xs: 12, sm:6, md: 3 }} key={index}>
            <Card 
              sx={{ 
                border: `2px solid ${report.color}`,
                borderRadius: 2,
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
                }, 
                }}>
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ color: report.color, textAlign: 'center', fontWeight: 'bold' }}
                >
                  {report.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>

      {/* Create Invoice Button */}
      
      <Box sx={{ display: 'flex', justifyContent: 'center',gap:2 }}>
        <Button
          variant="contained"
          startIcon={<ReceiptIcon />}
          sx={{
            bgcolor: '#1976d2',
            color: 'white',
            px: 4,
            py: 2,
            borderRadius: 2,
            fontSize: isMobile ? '1rem' : '1.2rem',
            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
            '&:hover': {
              bgcolor: '#1565c0',
              transform: 'translateY(-3px)',
              boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
            },
          }}
          onClick={() => setIsCreateInvoiceOpen(true)}
        >
          Create Invoice
        </Button>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            bgcolor: '#4caf50',
            color: 'white',
            px: 4,
            py: 2,
            borderRadius: 2,
            fontSize: isMobile ? '1rem' : '1.2rem',
            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
            '&:hover': {
              bgcolor: '#45a049',
              transform: 'translateY(-3px)',
              boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
            },
          }}
          onClick={() => setIsAddVendorOpen(true)}
        >
          Add Vendor
        </Button>
      
      </Box>
      
      
      <Dialog open={isCreateInvoiceOpen} onClose={() => setIsCreateInvoiceOpen(false)} maxWidth="md" fullWidth>
        <CreateInvoice onClose={() => setIsCreateInvoiceOpen(false)} />
      </Dialog>
      <Dialog open={isAddVendorOpen} onClose={() => setIsAddVendorOpen(false)} maxWidth="md" fullWidth>
        <AddVendor onClose={() => setIsAddVendorOpen(false)} />
      </Dialog>
      
    </Box>
  );
};

export default Dashboard;

