import { useState } from 'react'
import Sidebar from '../../components/Sidebar/index.'
import { Box, Stack, Typography } from '@mui/material'
import { SearchBar, SimplePlans } from '../../components'
import Planos from '../Planos'
import Clientes from '../Clientes'
import { RiMenu2Line } from 'react-icons/ri'
import AdminMenu from '../../components/AdminMenu'

function Dashboard() {
  const [selectedOption, setSelectedOption] = useState('Dashboard')
  const [adminMenu, setAdminMenu] = useState(false);

  return (
    <Box sx={{ width: '100%', height: '100vh', display: 'flex', gap: '5%'}}>
      <Sidebar selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
      <Stack sx={{ width: {xs: '90%', sm: '90%', md:'73%'}, height: '100vh', margin: {xs: '0 auto', sm: '0 auto', md: '0px'}}}>
        <Box sx={{ width: '100%', height: '10%', padding: '1%'}}>
          <Stack direction="row" sx={{ width: '100%', height: '100%',
            justifyContent: 'space-between', alignItems: 'center', position: 'relative'
          }}
          >
            <Box sx={{width: '50px', height: '50px', position: 'absolute', left: '0', top: '25%' , display: {xs: 'block', sm: 'block', md: 'none'}}}>
              <RiMenu2Line style={{width: '50px', height: '35px', cursor: 'pointer'}} onClick={() => setAdminMenu(!adminMenu)}/>
            </Box>
            {
              adminMenu && <AdminMenu adminMenu={adminMenu} setAdminMenu={setAdminMenu} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
            }
            <Stack sx={{width: {sm: '35%', md: '20%'}, height: '100%', alignItems: 'center', justifyContent: 'center'}}>
              <Typography variant='h5' fontWeight="bold" sx={{alignSelf: {sm: 'flex-end', md: 'flex-start'}}}>
                {selectedOption}
              </Typography>
            </Stack>
            <SearchBar />
          </Stack>
        </Box>
        { selectedOption === 'Dashboard' && <SimplePlans />}
        { selectedOption === 'Planos' && <Planos /> }
        { selectedOption === 'Clientes' && <Clientes /> }
      </Stack>
    </Box>
  )
}

export default Dashboard
