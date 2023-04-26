import { Box, Stack } from '@mui/material';
import Form from '../../components/Form';
import AOS from 'aos';
import { useEffect } from 'react';

function Admin() {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Box sx={{width: '100%', height: '100vh', display: 'flex', flexFlow: {xs: 'column-reverse', sm: 'column-reverse', md: 'row-reverse wrap-reverse'}}}>
      <Stack
        sx={{ justifyContent: 'center', alignItems: 'center', width: {lg:'45%', md: '100%'},
          background: 'linear-gradient(180deg, #D5A595 0%, #F5E0D9 100%);',
        }}
      >
        <Box sx={{ width: {xs: '340px', sm: '400px', md: '400px'}, height: {xs: '250px', sm: '450px', md: '300px'}}}
        >
          <img src="./assets/images/Login-main-image.png" style={{width: '100%', height: '100%'}} alt="imagem de um computador" />
        </Box>
      </Stack>
      <Stack
        sx={{ width: {lg:'55%', md: '100%'}, height: '100%', display: 'flex',
          alignItems: 'center', justifyContent: 'center', flexFlow: 'column',
        }}
      >
        <Box sx={{width: '100%', height: '8%', display: {xs: 'none', sm: 'flex', md: 'flex'}, alignItems: 'center', justifyContent: 'center'}}
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img src="./assets/images/logo.svg" style={{width: '100%', height: '100%'}} alt="Logo" />
        </Box>
        <Form />
      </Stack>
    </Box>
  )
}

export default Admin
