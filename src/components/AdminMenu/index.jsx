import { Stack, Box } from "@mui/system"
import { AiOutlineClose } from "react-icons/ai"

function AdminMenu({adminMenu, setAdminMenu}) {
  return (
    <Stack sx={{width: {xs: '70%', sm: '50%'}, height: '550px', alignItems: 'center', justifyContent: 'center',
      background: 'linear-gradient(180deg, #D5A595 0%, #F5E0D9 100%);', position: 'absolute', top: '-10px', left: '-50px',
      zIndex: '999999', borderRadius: '8px'}}
      id='admin-menu'
      >
      <button style={{width: '60px', height: '60px', position: 'absolute', top: '5%', right: '10%',
        background: 'transparent', border: 'none', outline: 'none', cursor: 'pointer'}}
      ><AiOutlineClose color="#D40066" fontSize="30px" onClick={() => setAdminMenu(!adminMenu)}/></button>
      <Stack sx={{width: '60%', height: '50%', alignItems: 'center', justifyContent: 'center', gap: '10%'}}>
      </Stack>
    </Stack>
  )
}

export default AdminMenu
