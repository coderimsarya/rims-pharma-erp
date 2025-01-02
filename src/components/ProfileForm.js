'use client'

import React, { useState } from 'react'
import {
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Tooltip,
  Grid2,
  useMediaQuery,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { 
  Store as StoreIcon,
  Phone as PhoneIcon, 
  Home as HomeIcon,
  Edit as EditIcon,
  CloudUpload as CloudUploadIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
  Language as LanguageIcon,
  Email as EmailIcon,
  Smartphone as MobileIcon,
  Assignment as GstIcon,
  VerifiedUser as DlIcon,
  CreditCard as PanIcon,
  LocationOn as LocationOnIcon,
  Business as BusinessIcon,
} from '@mui/icons-material'
//import { Grid2 } from '@mui/material'

const ProfileSection = ({ title, icon, onEdit, children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card sx={{ 
      mb: { xs: 2, sm: 3 }, 
      position: 'relative',
      boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
      borderRadius: { xs: '10px', sm: '20px' },
      overflow: 'hidden',
      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 12px 40px rgba(0,0,0,0.2)',
      },
    }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'primary.main', width: { xs: 40, sm: 50 }, height: { xs: 40, sm: 50 } }}>
            {icon}
          </Avatar>
        }
        title={
          <Typography variant={isMobile ? "h6" : "h5"} color="primary" fontWeight="bold">
            {title}
          </Typography>
        }
        action={
          <Tooltip title="Edit">
            <IconButton onClick={onEdit} size={isMobile ? "medium" : "large"} sx={{ color: 'primary.main' }}>
              <EditIcon />
            </IconButton>
          </Tooltip>
        }
        sx={{
          bgcolor: 'background.paper',
          borderBottom: '2px solid',
          borderColor: 'primary.light',
          '& .MuiCardHeader-content': { flex: '1 1 auto' },
          '& .MuiCardHeader-action': { alignSelf: 'center', marginTop: 0, marginRight: 0 },
          p: { xs: 2, sm: 3 },
        }}
      />
      <CardContent sx={{ p: { xs: 2, sm: 3 } }}>{children}</CardContent>
    </Card>
  );
};

export default function ProfileForm() {
  const [profileImage, setProfileImage] = useState('/placeholder.svg')
  const [activeSection, setActiveSection] = useState(null)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'))
  const [displayData, setDisplayData] = useState({
    businessName: 'RIMS IND Pharmacy',
    typeOfBusiness: 'Pharmacy',
    gstNumber: '19521GSFR123',
    dlNumber: 'DL123456',
    panNumber: 'ABCDE1234F',
    mobileNumber: '9876543210',
    altMobileNumber: '9876543211',
    email: 'contact@rimsind.com',
    website: 'www.rimsind.com',
    addressLine1: 'Haldia, Purba Medinipur',
    landmark: 'Near City Center',
    district: 'Purba Medinipur',
    state: 'West Bengal',
    country: 'India',
    pincode: '721657',
    facebook: 'https://facebook.com/rimsindpharmacy',
    twitter: 'https://twitter.com/rimsindpharmacy',
    linkedin: 'https://linkedin.com/company/rimsindpharmacy',
    instagram: 'https://instagram.com/rimsindpharmacy',
  })

  const [formData, setFormData] = useState(displayData)

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfileImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSave = () => {
    setDisplayData(formData)
    setActiveSection(null)
  }

  const renderDialog = (section, title, fields) => (
    <Dialog 
      open={activeSection === section} 
      onClose={() => setActiveSection(null)}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        style: {
          borderRadius: isMobile ? '10px' : '20px',
          padding: isMobile ? '12px' : '16px',
        },
      }}
    >
      <DialogTitle sx={{ color: 'primary.main', fontWeight: 'bold', fontSize: isMobile ? '1.2rem' : '1.5rem' }}>{title}</DialogTitle>
      <DialogContent>
        <Box sx={{ pt: isMobile ? 1 : 2 }}>
          <Grid2 container spacing={isMobile ? 1 : 2}>
            {fields.map(field => (
              <Grid2 size={{ xs: 12}} key={field.name}>
                <TextField
                  fullWidth
                  label={field.label}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  variant="outlined"
                  InputProps2={{
                    startAdornment: field.icon,
                  }}
                  sx={{ '& .MuiInputLabel-root': { fontSize: isMobile ? '0.9rem' : '1rem' } }}
                />
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setActiveSection(null)} color="primary" size={isMobile ? "small" : "medium"}>Cancel</Button>
        <Button onClick={handleSave} variant="contained" color="primary" size={isMobile ? "small" : "medium"}>Save</Button>
      </DialogActions>
    </Dialog>
  )

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        {/* Header with Profile Picture */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          mb: { xs: 4, sm: 5, md: 6 }, 
          position: 'relative',
          width: '100%',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: { xs: '200px', sm: '225px', md: '250px' },
            background: 'linear-gradient(135deg,rgb(0, 30, 163) 0%,rgb(0, 150, 170) 100%)',
            zIndex: -1,
            borderRadius: '0 0 0 0 / 0 0 0 0',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          }
        }}>
          <Avatar
            src={profileImage}
            sx={{ 
              width: { xs: 120, sm: 150, md: 180 }, 
              height: { xs: 120, sm: 150, md: 180 }, 
              border: '6px solid white',
              boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
              marginTop: { xs: 2, sm: 3, md: 4 },
              marginBottom: { xs: 1, sm: 1.5, md: 2 },
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
              }
            }}
            alt="Profile Picture"
          />
          <IconButton
            component="label"
            sx={{
              position: 'absolute',
              top: { xs: 100, sm: 130, md: 160 },
              right: { xs: 'calc(50% - 60px)', sm: 'calc(50% - 75px)', md: 'calc(50% - 90px)' },
              bgcolor: 'primary.main',
              color: 'white',
              width: { xs: 36, sm: 40, md: 48 },
              height: { xs: 36, sm: 40, md: 48 },
              '&:hover': { 
                bgcolor: 'primary.dark', 
                transform: 'scale(1.1)'
              },
              transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out',
            }}
          >
            <input
              hidden
              accept="image/*"
              type="file"
              onChange={handleImageUpload}
            />
            <CloudUploadIcon sx={{ fontSize: { xs: 20, sm: 24, md: 28 } }} />
          </IconButton>
          <Typography 
            variant={isMobile ? "h4" : isTablet ? "h3" : "h2"} 
            color="#0085a9" 
            fontWeight="bold" 
            sx={{ 
              mt: { xs: 1, sm: 1.5, md: 2 }, 
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              textAlign: 'center',
              px: 2
            }}
          >
            {displayData.businessName}
          </Typography>
          <Typography 
            variant={isMobile ? "subtitle1" : "h6"} 
            color="#005c75" 
            sx={{ 
              mt: { xs: 0.5, sm: 0.75, md: 1 }, 
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
              textAlign: 'center',
              px: 2
            }}
          >
            {displayData.typeOfBusiness}
          </Typography>
        </Box>

        {/* Business Details Section */}
        <ProfileSection
          title="Business Details"
          icon={<StoreIcon fontSize={isMobile ? "medium" : "large"} />}
          onEdit={() => setActiveSection('business')}
        >
          <Grid2 container spacing={{ xs: 1, sm: 2 }}>
            <Grid2 size={{ xs: 12,  sm:6}}>
              <Box display="flex" alignItems="center" mb={1}>
                <BusinessIcon color="primary" sx={{ mr: 1, fontSize: { xs: '1.2rem', sm: '1.4rem' } }} />
                <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem' } }}><strong>Business Name:</strong> {displayData.businessName}</Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={1}>
                <StoreIcon color="primary" sx={{ mr: 1, fontSize: { xs: '1.2rem', sm: '1.4rem' } }} />
                <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem' } }}><strong>Type of Business:</strong> {displayData.typeOfBusiness}</Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={1}>
                <GstIcon color="primary" sx={{ mr: 1, fontSize: { xs: '1.2rem', sm: '1.4rem' } }} />
                <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem' } }}><strong>GST Number:</strong> {displayData.gstNumber}</Typography>
              </Box>
            </Grid2>
            <Grid2 size={{ xs: 12,  sm:6}}>
              <Box display="flex" alignItems="center" mb={1}>
                <DlIcon color="primary" sx={{ mr: 1, fontSize: { xs: '1.2rem', sm: '1.4rem' } }} />
                <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem' } }}><strong>DL Number:</strong> {displayData.dlNumber}</Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={1}>
                <PanIcon color="primary" sx={{ mr: 1, fontSize: { xs: '1.2rem', sm: '1.4rem' } }} />
                <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem' } }}><strong>PAN Number:</strong> {displayData.panNumber}</Typography>
              </Box>
            </Grid2>
          </Grid2>
        </ProfileSection>

        {/* Contact Information Section */}
        <ProfileSection
          title="Contact Information"
          icon={<PhoneIcon fontSize={isMobile ? "medium" : "large"} />}
          onEdit={() => setActiveSection('contact')}
        >
          <Grid2 container spacing={{ xs: 1, sm: 2 }}>
            <Grid2 size={{ xs: 12,  sm:6}}>
              <Box display="flex" alignItems="center" mb={1}>
                <MobileIcon color="primary" sx={{ mr: 1, fontSize: { xs: '1.2rem', sm: '1.4rem' } }} />
                <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem' } }}><strong>Mobile Number:</strong> {displayData.mobileNumber}</Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={1}>
                <PhoneIcon color="primary" sx={{ mr: 1, fontSize: { xs: '1.2rem', sm: '1.4rem' } }} />
                <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem' } }}><strong>Alt Mobile Number:</strong> {displayData.altMobileNumber}</Typography>
              </Box>
            </Grid2>
            <Grid2 size={{ xs: 12,  sm:6}}>
              <Box display="flex" alignItems="center" mb={1}>
                <EmailIcon color="primary" sx={{ mr: 1, fontSize: { xs: '1.2rem', sm: '1.4rem' } }} />
                <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem' } }}><strong>Email:</strong> {displayData.email}</Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={1}>
                <LanguageIcon color="primary" sx={{ mr: 1, fontSize: { xs: '1.2rem', sm: '1.4rem' } }} />
                <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem' } }}><strong>Website:</strong> {displayData.website}</Typography>
              </Box>
            </Grid2>
          </Grid2>
        </ProfileSection>

        {/* Address Section */}
        <ProfileSection
          title="Address"
          icon={<HomeIcon fontSize={isMobile ? "medium" : "large"} />}
          onEdit={() => setActiveSection('address')}
        >
          <Grid2 container spacing={{ xs: 1, sm: 2 }}>
            <Grid2 size={{ xs: 12}}>
              <Box display="flex" alignItems="flex-start" mb={1}>
                <LocationOnIcon color="primary" sx={{ mr: 1, mt: 0.5, fontSize: { xs: '1.2rem', sm: '1.4rem' } }} />
                <Box>
                  <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem' }, mb: 0.5 }}>
                    <strong>Address:</strong> {displayData.addressLine1}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem' }, mb: 0.5 }}>
                    <strong>Landmark:</strong> {displayData.landmark}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem' }, mb: 0.5 }}>
                    <strong>District:</strong> {displayData.district}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem' }, mb: 0.5 }}>
                    <strong>State:</strong> {displayData.state}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem' }, mb: 0.5 }}>
                    <strong>Country:</strong> {displayData.country}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>
                    <strong>Pincode:</strong> {displayData.pincode}
                  </Typography>
                </Box>
              </Box>
            </Grid2>
          </Grid2>
        </ProfileSection>

        {/* Social Media Section */}
        <ProfileSection
          title="Social Media"
          icon={<LanguageIcon fontSize={isMobile ? "medium" : "large"} />}
          onEdit={() => setActiveSection('social')}
        >
          <Grid2 container spacing={{ xs: 1, sm: 2 }}>
            <Grid2 size={{ xs: 12,  sm:6}}>
              <Box display="flex" alignItems="center" mb={1}>
                <FacebookIcon color="primary" sx={{ mr: 1, fontSize: { xs: '1.2rem', sm: '1.4rem' } }} />
                <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>{displayData.facebook}</Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={1}>
                <TwitterIcon color="primary" sx={{ mr: 1, fontSize: { xs: '1.2rem', sm: '1.4rem' } }} />
                <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>{displayData.twitter}</Typography>
              </Box>
            </Grid2>
            <Grid2 size={{ xs: 12,  sm:6}}>
              <Box display="flex" alignItems="center" mb={1}>
                <LinkedInIcon color="primary" sx={{ mr: 1, fontSize: { xs: '1.2rem', sm: '1.4rem' } }} />
                <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>{displayData.linkedin}</Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={1}>
                <InstagramIcon color="primary" sx={{ mr: 1, fontSize: { xs: '1.2rem', sm: '1.4rem' } }} />
                <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>{displayData.instagram}</Typography>
              </Box>
            </Grid2>
          </Grid2>
        </ProfileSection>

        {/* Edit Dialogs */}
        {renderDialog('business', 'Edit Business Details', [
          { name: 'businessName', label: 'Business Name', icon: <BusinessIcon color="primary" sx={{ mr: 1 }} /> },
          { name: 'typeOfBusiness', label: 'Type of Business', icon: <StoreIcon color="primary" sx={{ mr: 1 }} /> },
          { name: 'gstNumber', label: 'GST Number', icon: <GstIcon color="primary" sx={{ mr: 1 }} /> },
          { name: 'dlNumber', label: 'DL Number', icon: <DlIcon color="primary" sx={{ mr: 1 }} /> },
          { name: 'panNumber', label: 'PAN Number', icon: <PanIcon color="primary" sx={{ mr: 1 }} /> },
        ])}

        {renderDialog('contact', 'Edit Contact Information', [
          { name: 'mobileNumber', label: 'Mobile Number', icon: <MobileIcon color="primary" sx={{ mr: 1 }} /> },
          { name: 'altMobileNumber', label: 'Alternative Mobile Number', icon: <PhoneIcon color="primary" sx={{ mr: 1 }} /> },
          { name: 'email', label: 'Email', icon: <EmailIcon color="primary" sx={{ mr: 1 }} /> },
          { name: 'website', label: 'Website', icon: <LanguageIcon color="primary" sx={{ mr: 1 }} /> },
        ])}

        {renderDialog('address', 'Edit Address', [
          { name: 'addressLine1', label: 'Address Line 1', icon: <HomeIcon color="primary" sx={{ mr: 1 }} /> },
          { name: 'landmark', label: 'Landmark', icon: <LocationOnIcon color="primary" sx={{ mr: 1 }} /> },
          { name: 'district', label: 'District', icon: <LocationOnIcon color="primary" sx={{ mr: 1 }} /> },
          { name: 'state', label: 'State', icon: <LocationOnIcon color="primary" sx={{ mr: 1 }} /> },
          { name: 'country', label: 'Country', icon: <LocationOnIcon color="primary" sx={{ mr: 1 }} /> },
          { name: 'pincode', label: 'Pincode', icon: <LocationOnIcon color="primary" sx={{ mr: 1 }} /> },
        ])}
        {renderDialog('social', 'Edit Social Media Links', [
          { name: 'facebook', label: 'Facebook', icon: <FacebookIcon color="primary" sx={{ mr: 1 }} /> },
          { name: 'twitter', label: 'Twitter', icon: <TwitterIcon color="primary" sx={{ mr: 1 }} /> },
          { name: 'linkedin', label: 'LinkedIn', icon: <LinkedInIcon color="primary" sx={{ mr: 1 }} /> },
          { name: 'instagram', label: 'Instagram', icon: <InstagramIcon color="primary" sx={{ mr: 1 }} /> },
        ])}
      </Box>
    </Container>
  )
}

