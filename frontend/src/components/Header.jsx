import {
  AppBar,
  Box,
  Container,
  styled,
  Toolbar,
  Typography,
} from '@mui/material'
import { Menu, ContentCut } from '@mui/icons-material'
import React from 'react'

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
})

const Icons = styled(Box)(({ theme }) => ({
  // backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center',
  gap: '30px',
  // [theme.breakpoints.up('sm')]: {
  //   display: 'flex',
  // },
}))
function header() {
  return (
    <AppBar position='sticky'>
      <Container maxWidth='xl' sx={{ bgcolor: '#141010', py: 1 }}>
        <StyledToolbar>
          <Menu sx={{ width: 40, height: 40 }} />
          <ContentCut sx={{ width: 30, height: 30 }} />
          <Icons>
            <Typography
              variant='h6'
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              Login
            </Typography>
            <Typography
              variant='h6'
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              SignUp
            </Typography>
          </Icons>
        </StyledToolbar>
      </Container>
    </AppBar>
  )
}

export default header
