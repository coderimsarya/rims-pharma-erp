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
  ExpandLess,
  Edit,
  ExpandMore,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


const drawerWidth = 240;

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
  { text: 'Customers', icon: <CustomersIcon />, path: '/customers' },
  { text: 'Vendor', icon: <VendorIcon />, path: '/vendor' },
  { text: 'HSN', icon: <VendorIcon />, path: '/hsn' },
  { 
    text: 'Inventory', 
    icon: <InventoryIcon />, 
    subItems: [
      { text: 'List of Medicine', path: '/medicinelist' },
      { text: 'List Non Medicine', path: '/nonmedicinelist' }
    ] 
  },
  { text: 'Sales', icon: <SalesIcon />, path: '/sales' },
  { text: 'Order', icon: <Edit />, path: '/order' },
  { text: 'Purchase', icon: <PurchasesIcon />, path: '/purchase' },
  { text: 'Invoice', icon: <InvoiceIcon />, path: '/invoice' },
  { text: 'Stock', icon: <StockIcon />, path: '/stock' },
  { text: 'Profile', icon: <ProfileIcon />, path: '/profile' },
];

const Sidebar = () => {
  const [openInventory, setOpenInventory] = React.useState(false);
  const navigate = useNavigate();

  const handleInventoryClick = () => {
    setOpenInventory(!openInventory);
  };

  const handleNavigation = (path) => {
    navigate(path);
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
              button
              onClick={item.subItems ? handleInventoryClick : () => handleNavigation(item.path)}
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
                      onClick={() => handleNavigation(subItem.path)}
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

