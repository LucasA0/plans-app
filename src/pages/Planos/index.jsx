import { Box, Stack, Typography } from "@mui/material"
import { CompletePlansCard, ArchivedPlansCard } from "../../components"
import { checkboxGroup } from "../../utils/Menus/menuItems."
import { useContext, useState } from "react";
import { PlansContext } from "../../contexts/Plans/PlansContext";
import Loading from "../../components/Loading";

function Planos() {
  const [hide, setHide] = useState(false);
  const {allPlans, loading} = useContext(PlansContext);

  return (
    <>
      <Box
        sx={{ width: '100%', height: '1200px', display: 'flex', flexDirection: 'column',
          paddingX: {md: '1.2%'}, justifyContent: 'center', alignItems: 'center'}}
      >
        <Stack direction="row"
          sx={{
            width: '100%', height: '30px',
            marginTop: '3%', alignItems: 'center', justifyContent: 'space-between',
          }}
        >
          <Typography>
            Planos ativos: {allPlans?.filter(plans => !plans.archived).length}
          </Typography>
          <Stack sx={{ width: '60%', height: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
            {checkboxGroup.map((check) => (
              <label
                style={{ display: 'flex', alignItems: 'center', width: '14%', height: '100%', justifyContent: 'space-evenly',
                  cursor: 'pointer'
              }}
                key={check.id}
              >
                <input
                  type="checkbox" name={check.name} id={check.name} value={check.value}
                  style={{accentColor: '#D40066'}}
                />
                {check.name}
              </label>
            ))}
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '20%'}}>
              <img src="./assets/icons/Filter.png" alt="filtro" />
              <Typography variant="h7" fontWeight="bold" >Filtrar</Typography>
            </Box>
          </Stack>
        </Stack>
        {loading === true ? <Loading /> : <Box sx={{width: '100%', height: '500px', overflowY: 'auto'}}>
          <CompletePlansCard />
        </Box>}

        <Stack direction="row"
          sx={{
            width: '100%', height: '30px',
            marginTop: '3%', alignItems: 'center', justifyContent: 'space-between',
          }}
        >
          <Typography>
            Planos arquivados: {allPlans?.filter(plans => plans.archived  ).length}
          </Typography>
          <Stack sx={{ width: '40%', height: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'end', cursor: 'pointer'}}
          >
            <Typography variant="h7" onClick={() => setHide(!hide)}>
              {hide === true ? 'Esconder' : 'Mostrar'}
            </Typography>
          </Stack>
        </Stack>
        {loading === true ? <Loading /> : <Box sx={{width: '100%', height: '350px', display: hide === true ? 'block' : 'none', overflowY: 'auto'}}>
          <ArchivedPlansCard />
        </Box>}
      </Box>
    </>
  )
}

export default Planos
