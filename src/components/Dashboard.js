import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid2,
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
      <Grid2 container spacing={2} sx={{ mb: 4 }}>
        {statsData.map((stat, index) => (
          <Grid2 size={{ xs: 12, sm:6, md: 3 }} key={index}>
            <Card sx={{ bgcolor: stat.color, color: 'white' }}>
              <CardContent>
                <Typography variant="h4">{stat.amount}</Typography>
                <Typography>{stat.title}</Typography>
                <Typography variant="caption">This Month</Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>

      {/* Report Cards */}
      <Grid2 container spacing={2} sx={{ mb: 4 }}>
        {reportsData.map((report, index) => (
          <Grid2 size={{ xs: 12, sm:6, md: 3 }} key={index}>
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
          </Grid2>
        ))}
      </Grid2>

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

