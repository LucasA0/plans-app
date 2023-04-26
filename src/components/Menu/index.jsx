import { Stack, Typography } from '@mui/material'
import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'

function MenuModdal({menu, setMenu}) {
  return (
    <Stack sx={{width: '50%', height: '100%', alignItems: 'center', justifyContent: 'center',
      background: 'rgba(0, 0, 0, 0.8)', position: 'absolute', top: '0px', right: '0px', backdropFilter: 'blur(10px)',}}>
      <button style={{width: '60px', height: '60px', position: 'absolute', top: '5%', right: '10%',
        background: 'transparent', border: 'none', outline: 'none', cursor: 'pointer'}}
        onClick={() => setMenu(!menu)}
      ><AiOutlineClose color="#D40066" fontSize="30px"  /></button>
      <Stack sx={{width: '60%', height: '50%', alignItems: 'center', justifyContent: 'center', gap: '10%'}}>
        <Typography variant="h7" fontWeight="medium" color="#fff">Como funciona</Typography>
        <Typography variant="h7" fontWeight="medium" color="#fff">Benefícios</Typography>
        <Typography variant="h7" fontWeight="medium" color="#fff">FAQ</Typography>
      </Stack>
    </Stack>
  )
}

export default MenuModdal
