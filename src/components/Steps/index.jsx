import { Box, Stack, Typography } from "@mui/material"
import { stepsLoop } from "../../utils/steps/steps"
import AOS from 'aos'
import { useEffect } from "react"

function Steps() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <Box sx={{width: '100%', height: '90%', zIndex: '99999', display: 'flex', justifyContent: 'center',
      flexDirection: 'column', gap: '5%'}}>
      <Typography variant='h5' fontWeight="semiBold">Seu plano em apenas 3 passos</Typography>
      <Stack sx={{width: '100%', height: '80%', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: {sm: 'column', md: 'row'}}}>
        {stepsLoop.map(step => (
          <Stack direction="row" sx={{width: {xs: '90%', sm: '70%', md: '30%'}, height: {xs: '25%', sm: '25%',md: '70%'}, border: '2px solid #D40066',
            borderRadius: '10px', position: 'relative', justifyContent: 'center', alignItems: 'center', background: '#fff',
            boxShadow: '5px 5px 10px #Aaa', '&:nth-of-type(1)': {alignSelf: {xs: 'center', sm: 'flex-start', md: 'center'}},
            '&:nth-of-type(2)': {alignSelf: {xs: 'center', sm: 'center', md: 'center'}},
            '&:nth-of-type(3)': {alignSelf: {xs: 'center', sm: 'flex-end', md: 'center'}}}}
            key={step.id}
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <Box sx={{width: '35px', height: '35px', background: '#D40066',
              left: '-2px', position: 'absolute', top: '-2px', display: 'flex',
              alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: '8px', borderBottomRightRadius: '8px'}}>
              <Typography variant='subtitle1' fontWeight="bold" sx={{color: '#fff'}}>{step.id}</Typography>
            </Box>
            <Box sx={{width: '90%', height: '90%', display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexDirection: 'column', textAlign: 'center'}}>
              <Box sx={{width: '100%', height: '40%', textAlign: 'center'}}>
                <Typography variant='h5'>{step.name}</Typography>
              </Box>
              <Typography variant='subtitle2' fontWeight="400">{step.description}</Typography>
            </Box>
          </Stack>
        ))}
      </Stack>
    </Box>
  )
}

export default Steps
