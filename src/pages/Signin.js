import React from 'react'
import Box from '@mui/material/Box';
import { Container, Stack } from '@mui/system';
import {  Typography } from '@mui/material';
import { LoginForm } from '../components/LoginForm';
import Divider from '@mui/material/Divider';
import Google from '@mui/icons-material/Google';
import Facebook from '@mui/icons-material/Facebook';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Twitter from '@mui/icons-material/Twitter';


function Signup() {
  return (
<Container >
    <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="center" alignItems="center"   height={"100vh"}>
      
      <Box flex={1} >
        <Typography variant="h3">Sign In </Typography>
        <Typography variant="h6" sx={{ mt: 1 }}>New user? <Typography variant="span" color={"primary"}>Create an account </Typography></Typography>
         <Box width={"300px"} sx={{ mt: 2 }}><LoginForm />
         <Divider sx={{mt: 3}}  color="default" >Or Sign In With</Divider>
         <Stack direction={"row"} justifyContent="space-between" alignItems="center" sx={{mt:4}} >
            <Google />
            <Facebook />
            <LinkedIn />
            <Twitter/>
         </Stack>
         </Box>
         
      </Box>
      <Box flex={1} sx={{ display: { xs: 'none', sm: 'block' } }}><img src='../../images/login.png' alt='Login'/></Box>
     
    </Stack>
    </Container>

  )
}

export default Signup