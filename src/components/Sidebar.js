import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  People as CustomersIcon,
  Business as VendorIcon,
  Inventory as InventoryIcon,
  ShoppingCart as SalesIcon,
  Receipt as PurchasesIcon,
  Description as InvoiceIcon,
  Assessment as StockIcon,
  Person as ProfileIcon,
} from '@mui/icons-material';

const drawerWidth = 240;

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, page: 'dashboard' },
  { text: 'Customers', icon: <CustomersIcon />, page: 'customers' },
  { text: 'Vendor', icon: <VendorIcon />, page: 'vendor' },
  { text: 'HSN', icon: <VendorIcon />, page: 'hsn' },
  { 
    text: 'Inventory', 
    icon: <InventoryIcon />, 
    page: 'inventory',
    subItems: ['List of Medicine', 'List Non Medicine'] 
  },
  { text: 'Sales', icon: <SalesIcon />, page: 'sales' },
  { text: 'Purchase', icon: <PurchasesIcon />, page: 'purchase' },
  { text: 'Invoice', icon: <InvoiceIcon />, page: 'invoice' },
  { text: 'Stock', icon: <StockIcon />, page: 'stock' },
  { text: 'Profile', icon: <ProfileIcon />, page: 'profile' },
];

const Sidebar = ({ onPageChange }) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          bgcolor: '#004d61',
          color: 'white',
        },
      }}
    >
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
        <img src="/placeholder.svg" alt="RIMS IND Logo" width={40} height={40} />
        <Box>
          <Typography variant="h6" component="div">
            RIMS IND
          </Typography>
          <Typography variant="caption">
            Pharmacy Dashboard
          </Typography>
        </Box>
      </Box>
      
      <List>
        {menuItems.map((item) => (
          <React.Fragment key={item.text}>
            <ListItem 
              component="a" 
              onClick={() => onPageChange(item.page)}
              sx={{ 
                cursor: 'pointer',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.08)',
                },
              }}
            >
              <ListItemIcon sx={{ color: 'white' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
            {item.subItems?.map((subItem) => (
              <ListItem 
                key={subItem}
                sx={{ 
                  pl: 4,
                  cursor: 'pointer',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.08)',
                  },
                }}
              >
                <ListItemText 
                  primary={subItem}
                  primaryTypographyProps={{
                    fontSize: '0.875rem',
                  }}
                />
              </ListItem>
            ))}
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;

