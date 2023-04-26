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
            justifyContent: 'center', alignItems: 'center', gap: '10%', position: 'relative'
          }}
          >
            <Box sx={{width: '50px', height: '50px', position: 'absolute', left: '5px', display: {xs: 'block', sm: 'block', md: 'none'}}}>
              <RiMenu2Line style={{width: '50px', height: '35px', cursor: 'pointer'}} onClick={() => setAdminMenu(!adminMenu)}/>
            </Box>
            {
              adminMenu && <AdminMenu adminMenu={adminMenu} setAdminMenu={setAdminMenu} />
            }
            <Typography variant='h5' sx={{ fontWeight: '600', alignSelf: 'flex-end'}}>
              {selectedOption}
            </Typography>
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
