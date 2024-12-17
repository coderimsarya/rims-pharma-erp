import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  Collapse,
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
  Vaccines as VaccinesIcon,
  ShoppingCart as OrderIcon,
  ExpandLess,
  ExpandMore,
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
    subItems: [
      { text: '> List of Medicine', icon:<VaccinesIcon/>, page: 'medicinelist' },
      { text: '> List Non Medicine', page: 'nonmedicinelist' },
    ] 
  },
  { text: 'Order', icon: <OrderIcon />, page: 'order' },
  { text: 'Sales', icon: <SalesIcon />, page: 'sales' },
  { text: 'Purchase', icon: <PurchasesIcon />, page: 'purchase' },
  { text: 'Invoice', icon: <InvoiceIcon />, page: 'invoice' },
  { text: 'Stock', icon: <StockIcon />, page: 'stock' },
  { text: 'Profile', icon: <ProfileIcon />, page: 'profile' },
];

const Sidebar = ({ onPageChange }) => {
  const [openInventory, setOpenInventory] = React.useState(false);

  const handleInventoryClick = () => {
    setOpenInventory(!openInventory);
  };

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
        <img src="https://res.cloudinary.com/dyju8awcu/image/upload/v1734348727/White-Rims-Logo_de6dus.png" alt="RIMS IND Logo" width={45} height={40} />
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
              button
              onClick={item.subItems ? handleInventoryClick : () => onPageChange(item.page)}
              sx={{ 
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.08)',
                },
              }}
            >
              <ListItemIcon sx={{ color: 'white' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
              {item.subItems && (openInventory ? <ExpandLess /> : <ExpandMore />)}
            </ListItem>
            {item.subItems && (
              <Collapse in={openInventory} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subItems.map((subItem) => (
                    <ListItem 
                      button
                      key={subItem.text}
                      onClick={() => onPageChange(subItem.page)}
                      sx={{ 
                        pl: 4,
                        '&:hover': {
                          bgcolor: 'rgba(255, 255, 255, 0.08)',
                        },
                      }}
                    >
                      <ListItemText 
                        primary={subItem.text}
                        primaryTypographyProps={{
                          fontSize: '0.875rem',
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;

