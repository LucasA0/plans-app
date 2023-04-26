import React, { useContext } from 'react';
import { Box, Stack } from '@mui/material';
import { About, Benefits, Footer, Header, Steps } from './components';
import { PlansContext } from './contexts/Plans/PlansContext';

function App() {

  const {searchPlans} = useContext(PlansContext)

  return (
    <Stack sx={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
      <Header />
      <Stack sx={{width: {xs: '90%', sm: '80%', md: '80%'}, height: {xs: '700px', sm: '900px', md: '300px'},
        position: 'relative', alignItems: 'center', justifyContent: 'center', filter: searchPlans && 'blur(10px)'}}>
        <img src="./assets/images/XMLID_1124_.png" alt="bolinhas" style={{position: 'absolute', left: '-100px', top: '-150px', width: '300px', height: '300px'}} />
        <Steps />
      </Stack>
      <Box sx={{width: '100%', height: {xs: '850px', sm: '700px', md: '650px'}, backgroundImage: 'url(./assets/images/main-bg.png)',
        backgroundRepeat: 'no-repeat', backgroundSize: 'cover', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Benefits />
      </Box>
      <Box sx={{width: '100%', height: {xs: '750px', sm: '600px',md: '600px'},
        background: {xs: 'linear-gradient(180deg, rgba(255,254,254,1) 0%, rgba(255,255,255,1) 53%)', sm: 'linear-gradient(180deg, rgba(255,253,253,1) 0%, rgba(255,255,255,1) 53%)', md: 'linear-gradient(180deg, rgba(255,250,249,1) 0%, rgba(255,255,255,1) 53%)'},
        alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
        <About />
      </Box>
      <Footer />
    </Stack>
  );
}

export default App;
