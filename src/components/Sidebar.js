import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  Collapse,
  useTheme,
  IconButton,
  Tooltip,
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
  ChevronLeft,
  ChevronRight,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const drawerWidth = 240;
const collapsedDrawerWidth = 64;

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
  const [openInventory, setOpenInventory] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  const handleInventoryClick = () => {
    if (isCollapsed) {
      setIsCollapsed(false);
    }
    setOpenInventory(!openInventory);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  const toggleDrawer = () => {
    setIsCollapsed(!isCollapsed);
    setOpenInventory(false);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: isCollapsed ? collapsedDrawerWidth : drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: isCollapsed ? collapsedDrawerWidth : drawerWidth,
          boxSizing: 'border-box',
          background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          color: 'white',
          borderRight: 'none',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
          overflowX: 'hidden',
        },
      }}
    >
      <Box sx={{ 
        position: 'absolute', 
        top: 16, 
        right: 16, 
        zIndex: 1200 
      }}>
        <IconButton onClick={toggleDrawer} sx={{ color: 'white' }}>
          {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
        </IconButton>
      </Box>
      <Box sx={{ 
        p: isCollapsed ? 1 : 3, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: 1,
        mt: 5 
      }}>
        <Box
          sx={{
            width: isCollapsed ? 40 : 60,
            height: isCollapsed ? 40 : 60,
            borderRadius: '50%',
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          }}
        >
          <img 
            src="https://res.cloudinary.com/dyju8awcu/image/upload/v1734598826/RIMS-LOGO-2024_hokuvq.png" 
            alt="RIMS IND Logo" 
            width={isCollapsed ? 30 : 40} 
            height={isCollapsed ? 30 : 40} 
          />
        </Box>
        {!isCollapsed && (
          <>
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', letterSpacing: 1 }}>
              RIMS IND
            </Typography>
            <Typography variant="caption" sx={{ opacity: 0.8 }}>
              Pharmacy Dashboard
            </Typography>
          </>
        )}
      </Box>
      
      <List sx={{ mt: 2 }}>
        {menuItems.map((item) => (
          <React.Fragment key={item.text}>
            <Tooltip title={isCollapsed ? item.text : ''} placement="right" arrow>
              <ListItem 
                button
                onClick={item.subItems ? handleInventoryClick : () => handleNavigation(item.path)}
                sx={{ 
                  mb: 0.5,
                  borderRadius: '0 20px 20px 0',
                  mr: isCollapsed ? 0 : 2,
                  position: 'relative',
                  overflow: 'hidden',
                  justifyContent: isCollapsed ? 'center' : 'flex-start',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'currentColor',
                    opacity: location.pathname === item.path ? 0.15 : 0,
                    transition: 'opacity 0.3s ease',
                  },
                }}
              >
                <ListItemIcon sx={{ color: 'white', minWidth: isCollapsed ? 0 : 40 }}>
                  {item.icon}
                </ListItemIcon>
                {!isCollapsed && (
                  <ListItemText 
                    primary={item.text} 
                    primaryTypographyProps={{
                      fontSize: '0.9rem',
                      fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                    }}
                  />
                )}
                {!isCollapsed && item.subItems && (openInventory ? <ExpandLess /> : <ExpandMore />)}
              </ListItem>
            </Tooltip>
            {!isCollapsed && item.subItems && (
              <Collapse in={openInventory} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subItems.map((subItem) => (
                    <ListItem 
                      button
                      key={subItem.text}
                      onClick={() => handleNavigation(subItem.path)}
                      sx={{ 
                        pl: 6,
                        py: 0.5,
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        },
                      }}
                    >
                      <ListItemText 
                        primary={subItem.text}
                        primaryTypographyProps={{
                          fontSize: '0.8rem',
                          fontWeight: location.pathname === subItem.path ? 'bold' : 'normal',
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

