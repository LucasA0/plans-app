import React from 'react'
import { benefitsLoop } from '../../utils/steps/benefits'
import { Box, Typography, Stack } from '@mui/material'

function Benefits() {
  return (
    <Box sx={{width: {xs: '90%', sm: '80%', md: '80%'}, height: '100%', display: 'flex',
      alignItems: 'center', justifyContent: 'center'}}>
      <Stack sx={{width: '100%', height: {xs: '95%', sm: '100%', md: '65%'}, justifyContent: 'end', gap: '15%'}}>
        <Typography variant='h5' sx={{fontWeight: '500'}} >Os benefícios levados até você</Typography>
        <Stack sx={{width: '100%', height: '90%', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: {xs: 'no-wrap', sm: 'no-wrap', md: 'wrap'}, flexDirection: {xs: 'column', sm: 'column', md: 'row'}}}>
          {benefitsLoop.map(benefit => (
            <Box
              key={benefit.id}
              sx={{width: {sm: '100%', md: '49%'}, height: {xs: '23%', sm: '20%', md: '35%'},
                display: 'flex', alignItems: 'center', gap: '2%', justifyContent: 'center'}}
            >
              <Box sx={{width: '12%', height: '100%', display: {xs: 'none', sm: 'flex', md: 'flex'}}}>
                <img src={benefit.icon} style={{width: '50px', height: '50px'}} alt="" />
              </Box>
              <Stack sx={{width: '90%', height: '100%', gap: '8%'}}>
                <Typography variant='h5' sx={{fontWeight: '500'}}>{benefit.name}</Typography>
                <Typography variant='body2'>{benefit.description}</Typography>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Stack>
  </Box>
  )
}

export default Benefits
