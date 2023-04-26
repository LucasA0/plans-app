import { Stack, Typography } from '@mui/material'
import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'

function MenuModdal({menu, setMenu}) {
  return (
    <Stack sx={{width: {xs: '70%', sm: '50%'}, height: '100%', alignItems: 'center', justifyContent: 'center',
      background: 'rgba(0, 0, 0, 0.8)', position: 'absolute', top: '0px', right: '0px', backdropFilter: 'blur(10px)', zIndex: '999999'}}
      id='test'
      >
      <button style={{width: '60px', height: '60px', position: 'absolute', top: '5%', right: '10%',
        background: 'transparent', border: 'none', outline: 'none', cursor: 'pointer'}}
      ><AiOutlineClose color="#D40066" fontSize="30px" onClick={() => setMenu(!menu)} /></button>
      <Stack sx={{width: '60%', height: '50%', alignItems: 'center', justifyContent: 'center', gap: '10%'}}>
        <a href="#steps" style={{textDecoration: 'none', color: '#fff'}}>
          <Typography variant="h7" fontWeight="bold" onClick={() => setMenu(!menu)}>Como funciona</Typography>
        </a>

        <a href="#benefits" style={{textDecoration: 'none', color: '#fff'}}>
          <Typography variant="h7" fontWeight="bold" onClick={() => setMenu(!menu)}>Benefícios</Typography>
        </a>

        <a href="#faq" style={{textDecoration: 'none', color: '#fff'}}>
          <Typography variant="h7" fontWeight="bold" onClick={() => setMenu(!menu)}>FAQ</Typography>
        </a>
      </Stack>
    </Stack>
  )
}

export default MenuModdal
