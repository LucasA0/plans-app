import { Box, Typography, Stack } from "@mui/material"
import { checkboxGroup } from "../../utils/Menus/menuItems."
import { useContext, useEffect, useState } from "react"
import { useApi } from "../../hooks/useApi"
import { AuthContext } from "../../contexts/Auth/AuthContext"
import { ClientsCard } from "../../components"
import { PlansContext } from "../../contexts/Plans/PlansContext"
import Loading from "../../components/Loading"
import { RiMenu3Fill } from "react-icons/ri"
import SmallFilterMenu from "../../components/SmallFilterMenu"

function Clientes() {
  const [clients, setClients] = useState([])
  const [filterMenu, setFilterMenu] = useState(false)

  const auth = useContext(AuthContext)
  const {loading, setLoading} = useContext(PlansContext)
  const api = useApi();


  useEffect(() => {
    const handleGetClients = async () => {
      if(auth.user) {
        setLoading(true)
        const data = await api.getClients();
        setClients(data)
        setLoading(false)
      }
    }
    handleGetClients();
  }, [])

  return (
    <>
      <Box
        sx={{ width: '100%', height: '700px', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly',
        alignItems: 'center', paddingX: {md: '1%'}}}
      >
        <Stack direction="row"
          sx={{
            width: '100%', height: '30px',
            marginTop: '3%', alignItems: 'center', justifyContent: 'space-between',
          }}
        >
          <Typography>
            Clientes ativos: {clients.length}
          </Typography>
          <Stack sx={{ width: {xs: '0px', sm: '60%', md: '60%'}, height: '100%', flexDirection: 'row',
            alignItems: 'center', justifyContent: 'space-evenly', display: {xs: 'none', sm: 'flex', md: 'flex'} }}>
            {checkboxGroup.map((check) => (
              <label
                style={{ display: 'flex', alignItems: 'center', width: '14%', height: '100%', justifyContent: 'space-evenly',
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
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '20%'}}>
              <img src="./assets/icons/Filter.png" alt="filtro" />
              <Typography variant="h7" fontWeight="bold" >Filtrar</Typography>
            </Box>
          </Stack>
          <Box sx={{width: {xs: '25%', sm: '0px', md: '0px'}, height: {xs: '100%', sm: '100%', md: '0px'},
            display: {xs: 'flex', sm: 'none', md: 'none'}, alignItems: 'center', justifyContent: 'flex-end'}}
            >
            <RiMenu3Fill style={{width: '50px', height: '35px', cursor: 'pointer'}} onClick={() => setFilterMenu(!filterMenu)}/>
          </Box>
          {
            filterMenu && <SmallFilterMenu filterMenu={filterMenu} setFilterMenu={setFilterMenu} />
          }
        </Stack>
        <Box sx={{width: '100%', height: '500px'}}>
          {loading === true ? <Loading /> : <ClientsCard clients={clients}/>}
        </Box>
      </Box>
    </>
  )
}

export default Clientes
