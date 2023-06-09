/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { TextField, Button, Typography, Box } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos'

function Form() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('')

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, [])

  async function handleSignIn(e) {
    e.preventDefault();
    try {
      if(email && password) {
        const isLogged = await auth.signIn(email, password);
        if(isLogged) {
          navigate('/dashboard')
          return
        }
      }
    } catch(error) {
      setErrorMessage(error.response.data.message)
      setEmail(''),
      setPassword(''),
      setInterval(() => {
        setErrorMessage('');
      }, 4000)
    }
  }

  return (
    <form className="login-form" onSubmit={handleSignIn}>
        <Typography variant="h2" sx={{fontWeight: 'bold',}}>
          Bem Vindo
        </Typography>
        <Typography variant="span" sx={{color: '#9F9F9F',}}>
          Por favor insira suas credenciais
        </Typography>
      <Box>
        <TextField required label="Email" variant="outlined"
          value={email}
          sx={{ width: {xs: '340px', sm: '400px', md: '400px'}, height: '60px', }}
          helperText={errorMessage}
          error={errorMessage.length > 6}
          onChange={(e) => setEmail(e.target.value)}
          data-aos="fade-left"
          data-aos-duration="1000"
        />
      </Box>
      <Box style={{
        position: 'relative', height: '20%'
      }}
      >
        <TextField required label="Senha" variant="outlined" type={showPassword ? 'text' : 'password'}
          sx={{ width: {xs: '340px', sm: '400px', md: '400px'}, height: '60px', }}
          value={password}
          helperText={errorMessage}
          error={errorMessage.length > 6}
          onChange={(e) => setPassword(e.target.value)}
          data-aos="fade-right"
          data-aos-duration="1000"
        />
        <img src={showPassword ? './assets/icons/visible.png' : './assets/icons/visibility.png'}
          alt="icone de olho"
          onClick={() => setShowPassword(!showPassword)}
          style={{ cursor: 'pointer', position: 'absolute', top: '15px', right: '20px', }}
        />
      </Box>
      <Button variant="contained" type="submit"
        sx={{
          background: '#D40066', width: {xs: '340px', sm: '400px', md: '400px'}, height: '60px',
          borderRadius: '4px', fontSize: '18px', fontWeight: '500',
          '&:hover': { background: '#D40066', },
        }}
        disabled={email === '' || password.length < 5}
      >
        Entrar
      </Button>
      <Typography variant="span" sx={{ color: '#9F9F9F', cursor: 'pointer', }}
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        Esqueci minha senha
      </Typography>
    </form>
  );
}

export default Form;
