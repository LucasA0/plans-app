import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { checkboxGroup } from '../../utils/Menus/menuItems.'

function SmallFilterMenu({filterMenu, setFilterMenu}) {
  return (
    <Box sx={{width: '70%', height: '50%', position: 'fixed', right: '0', top: '10%',
      background: 'linear-gradient(180deg, #D5A595 0%, #F5E0D9 100%)', borderTopLeftRadius: '8px',
      borderBottomLeftRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center'}} id='test'>
      <button style={{width: '60px', height: '60px', position: 'absolute', top: '3%', right: '3%',
        background: 'transparent', border: 'none', outline: 'none', cursor: 'pointer'}}
      ><AiOutlineClose color="#D40066" fontSize="30px" onClick={() => setFilterMenu(!filterMenu)}/></button>

      <Stack sx={{ width: '80%', height: '50%',
        alignItems: 'center', justifyContent: 'space-evenly' }}>
        {checkboxGroup.map((check) => (
          <label
            style={{ display: 'flex', alignItems: 'center', width: '80%', height: '5%', justifyContent: 'space-evenly',
              cursor: 'pointer'
          }}
            key={check.id}
          >
            <input
              type="checkbox" name={check.name} id={check.name} value={check.value}
            />
            {check.name}
          </label>
        ))}
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '50%'}}>
          <img src="./assets/icons/Filter.png" alt="filtro" />
          <Typography variant="h7" fontWeight="bold" >Filtrar</Typography>
        </Box>
      </Stack>
    </Box>
  )
}

export default SmallFilterMenu
