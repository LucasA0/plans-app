import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Form from './components/Form';

function App() {
  return (
    <Box className="container">
      <Stack
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          width: {lg:'45%', md: '100%'},
          background: 'linear-gradient(180deg, #D5A595 0%, #F5E0D9 100%);',
        }}
      >
        <Box sx={{
          width: '400px',
          height: {lg:'500px', md: '300px'},
        }}>
          <img
            src="./assets/images/Login-main-image.png"
            className="main-image"
            alt="imagem de um computador"
          />
        </Box>
      </Stack>
      <Stack
        sx={{
          width: {lg:'55%', md: '100%'},
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexFlow: 'column',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 'bold',
          }}
        >
          Bem Vindo
        </Typography>
        <Typography
          variant="span"
          sx={{
            color: '#9F9F9F',
          }}
        >
          Por favor insira suas credenciais
        </Typography>
        <Form />
      </Stack>
    </Box>
  );
}

export default App;
