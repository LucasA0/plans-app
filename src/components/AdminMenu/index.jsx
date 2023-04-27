import { Stack, Box, Typography } from "@mui/material"
import { AiOutlineClose } from "react-icons/ai"
import { menuItems } from "../../utils/Menus/menuItems."
import { useContext } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext"
import { useNavigate } from "react-router-dom"

function AdminMenu({adminMenu, setAdminMenu, selectedOption, setSelectedOption}) {

  const navigate = useNavigate();
  const auth = useContext(AuthContext)

  const handleAdminMenu = (item) => {
    setSelectedOption(item.name)
    setAdminMenu(!adminMenu)
  }

  function handleSignOut() {
    auth.signOut();
    navigate('/')
  }

  return (
    <Stack sx={{width: {xs: '70%', sm: '50%'}, height: '650px', alignItems: 'center', justifyContent: 'space-between',
      background: 'linear-gradient(180deg, #D5A595 0%, #F5E0D9 100%);', position: 'fixed', top: '-10px', left: '-50px',
      zIndex: '999999', borderRadius: '8px',boxShadow: '0px 1px 10px rgba(0, 0, 0, 0.3)' }}
      id='admin-menu'
      >
      <button style={{width: '60px', height: '60px', position: 'absolute', top: '3%', right: '3%',
        background: 'transparent', border: 'none', outline: 'none', cursor: 'pointer'}}
      ><AiOutlineClose color="#D40066" fontSize="30px" onClick={() => setAdminMenu(!adminMenu)}/></button>
      <Stack sx={{width: '70%', height: '100%', alignItems: 'center', justifyContent: 'center', gap: '10%'}}>
        <Stack sx={{width: '100%', height: '10%', alignItems: 'center', justifyContent: 'center'}}>
          <img src="./assets/images/logo.svg" alt="Logo" />
        </Stack>
        <Stack sx={{width: '100%', height: '40%', alignItems: 'center', justifyContent: 'space-evenly'}}>
          {
            menuItems.map((item) => (
              <Box
                sx={{
                  width: '70%', paddingLeft: '10%', height: '18%',
                  display: 'flex', alignItems: 'center', justifyContent: 'start',
                  gap: '10px', cursor: 'pointer', background: item.name === selectedOption ? '#000' : '',
                  borderRadius: '8px',
                }}
                onClick={() => handleAdminMenu(item)}
                key={item.id}
              >
                {item.name === selectedOption ? item.icon : item.blackIcon}
                <Typography sx={{color: item.name === selectedOption ? '#fff' : ''}}>
                  {item.name}
                </Typography>
              </Box>
            ))
          }
        </Stack>
        <Box sx={{
            width: '100%', height: '10%', display: 'flex',
            alignItems: 'center', justifyContent: 'start',
            paddingLeft: '25%'
          }}>
            <Box
              sx={{
                width: '100%', height: '100%', display: 'flex',
                justifyContent: 'start', alignItems: 'center',
              }}
            >
              <Box sx={{display: 'flex', gap: '10px', cursor: 'pointer'}} onClick={handleSignOut}>
                <img src="./assets/icons/sign-out.png" alt="" />
                <Typography sx={{fontWeight: '600'}}>
                  Sair
                </Typography>
              </Box>
            </Box>
          </Box>
      </Stack>
    </Stack>
  )
}

export default AdminMenu
