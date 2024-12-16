import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
} from '@mui/material';

const statsData = [
  { title: 'Total Sale', amount: '7000', color: '#00bcd4' },
  { title: 'Total Purches', amount: '12000', color: '#ff5722' },
  { title: 'Total Purches', amount: '7000', color: '#4caf50' },
  { title: 'Total Purches', amount: '7000', color: '#e91e63' },
];

const reportsData = [
  { title: 'Stock Report', color: '#ff5722' },
  { title: 'Sales Report', color: '#00bcd4' },
  { title: 'Purcher Report', color: '#e91e63' },
  { title: 'Vendor Report', color: '#4caf50' },
];

const Dashboard = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      {/* Pharmacy Info Card */}
      <Card sx={{ mb: 4, bgcolor: '#004d61', color: 'white' }}>
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={3}>
              <Box
                sx={{
                  width: 150,
                  height: 150,
                  bgcolor: 'white',
                  borderRadius: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                Profile Picture
              </Box>
            </Grid>
            <Grid item xs={12} md={9}>
              <Typography variant="h5" gutterBottom>
                Retar Mediserve Private Limited
              </Typography>
              <Typography variant="subtitle1">pharmacy</Typography>
              <Typography>DL - 0266446</Typography>
              <Typography>GST - 19XXRTC4G3</Typography>
              <Typography>Address: Medinipur, Mahatabpur</Typography>
              <Typography>Call: 9749431711</Typography>
              <Typography>Email: rimsmedipur@gmail.com</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Statistics Cards */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {statsData.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ bgcolor: stat.color, color: 'white' }}>
              <CardContent>
                <Typography variant="h4">{stat.amount}</Typography>
                <Typography>{stat.title}</Typography>
                <Typography variant="caption">This Month</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Report Cards */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {reportsData.map((report, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ border: `1px solid ${report.color}` }}>
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ color: report.color, textAlign: 'center' }}
                >
                  {report.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Create Invoice Button */}
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          sx={{
            bgcolor: '#1976d2',
            color: 'white',
            px: 4,
            py: 1,
            borderRadius: 8,
          }}
        >
          Create Invoice
        </Button>
      </Box>
    </Box>
  );
};

export default Dashboard;

