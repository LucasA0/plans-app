import React, {useState} from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { aboutLoop } from '../../utils/About/about'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

function About() {
  const [aboutOn, setAboutOn] = useState(false);
  const [aboutId, setAboutId] = useState('');

  const handleMoreAbout = (about) => {
    setAboutId(about.id)
    setAboutOn(!aboutOn)
    if(aboutOn) {
      setAboutId('')
    }
  }

  return (
    <Box sx={{ width: {xs: '90%', sm: '90%', md: '80%'}, height: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
          <Stack sx={{gap: '12%', height: {xs: '25%', sm: '15%', md: '25%'}}}>
            <Typography variant='h5' fontWeight="semiBold">Um pouco mais sobre (Nome da empresa)</Typography>
            <Typography variant='h7'>Somos um comparador de ofertas de serviços financeiros e de telecom. Utilizando nossa ferramenta, você encontra planos de celular.</Typography>
          </Stack>
          <Stack sx={{width: '100%' , height: {xs: '75%', sm: '80%', md: '50%'}, gap: '10%', justifyContent: 'center'}}>
            {aboutLoop.map(item => (
              <Stack key={item.id} sx={{ width: '100%', height: aboutId === item.id ? '35%' : '30%', borderBottom: '2px solid lightGray', justifyContent: 'space-evenly'}}
              >
                <Box sx={{width: '100%', height: '35%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                  <Box sx={{height: '100%', display: 'flex', alignItems: 'center', width: '90%'}}>
                    <Typography variant='h7'>{item.name}</Typography>
                  </Box>
                  <Box
                    sx={{height: '100%', display: 'flex', alignItems: 'center', width: '3%', justifyContent: 'center', cursor: 'pointer'}}
                    onClick={() => handleMoreAbout(item)}
                  >
                    {
                      aboutOn && aboutId === item.id ? <IoIosArrowUp color='#D40066' /> : <IoIosArrowDown color='#D40066' />
                    }
                  </Box>
                </Box>
                <Stack direction="row" sx={{width: '100%', height: aboutId === item.id ? {xs: '70%', sm: '60%', md: '60%'} : '0px', alignItems: 'center', paddingLeft: '2%', display: 'flex'}}
                >
                  <Box sx={{width: '100%', height: '100%', borderLeft: '2px solid #D40066', paddingLeft: {xs: '5%', sm: '3%', md: '2%'}, display: aboutId === item.id ? 'flex' : 'none', alignItems: 'center', marginBottom: '0px'}}
                  >
                    <Typography variant='subtitle2'>{item.description}</Typography>
                  </Box>
                </Stack>
              </Stack>
            ))}
          </Stack>
        </Box>
  )
}

export default About
