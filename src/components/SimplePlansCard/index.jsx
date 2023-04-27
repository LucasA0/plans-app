import { Box, Stack, Typography } from "@mui/material"
import { useContext, useState } from "react";
import { PlansContext } from "../../contexts/Plans/PlansContext";

function SimplePlansCard() {
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);

  const {allPlans, search, loading} = useContext(PlansContext);

  let unarchivedPlans = allPlans?.filter(plano => !plano.archived)

  const pages = Math.ceil(unarchivedPlans?.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = unarchivedPlans?.slice(startIndex, endIndex)

  let filteredPlans = search.length > 0 ? allPlans?.filter(plan => plan.title.includes(search)) : [];

  return (
    <>
      {search.length > 0 ? (
        filteredPlans?.map((plano) => (
          <Box
            key={plano.title}
            sx={{
              width: '100%', height: {xs: '319px', sm: '100px', md: '100px'}, borderBottom: '1px solid lightGray',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{ display: 'flex', width: '50%', height: '100%',
              alignItems: {xs: 'start', sm: 'center', md: 'center'}, justifyContent: {xs: 'center', sm: 'start', md: 'start'}, gap: {xs: '10%', sm: '5%', md: '5%'}, flexDirection: {xs: 'column', sm: 'row', md: 'row'}
              }}
            >
              <img src={`https://planos-backend.onrender.com/assets/${plano.providerLogo}`} alt={plano.provider}/>
              <Typography variant="subtitle1" fontWeight="bold">
                {plano.title}
              </Typography>
            </Box>
            <Box
              sx={{
                width: '48%', height: '100%',
                alignItems: 'center', justifyContent: 'space-evenly', display: 'flex',
                flexDirection: {xs: 'column', sm: 'row', md: 'row'}
              }}
            >
              <Stack
                direction={{xs: 'row-reverse', sm: 'column', md: 'column'}}
                sx={{
                  width: {xs: '100%', sm: '25%', md: '25%'}, height: '100%',
                  alignItems: 'start', justifyContent: {xs: 'space-evenly', sm: 'center', md: 'center'}
                }}
              >
                <Typography variant="body1" sx={{fontWeight: '500'}}>
                  {plano.contacts}
                </Typography>
                <Typography variant="body2" sx={{color: 'lightGray'}}>
                  Contatos
                </Typography>
              </Stack>
              <Stack
                direction={{xs: 'row-reverse', sm: 'column', md: 'column'}}
                sx={{ width: {xs: '100%', sm: '25%', md: '25%'}, height: '100%',
                  alignItems: 'start', justifyContent: {xs: 'space-evenly', sm: 'center', md: 'center'}
                  }}
              >
                <Typography variant="body1" sx={{fontWeight: '500'}}>
                  R$ {plano.cost.toFixed(2)}
                </Typography>
                <Typography variant="body2" sx={{color: 'lightGray'}}>
                  Total
                </Typography>
              </Stack>
              <Stack
                direction={{xs: 'row-reverse', sm: 'column', md: 'column'}}
                sx={{ width: {xs: '100%', sm: '25%', md: '25%'}, height: '100%',
                alignItems: 'start', justifyContent: {xs: 'space-evenly', sm: 'center', md: 'center'}
                }}
              >
                <Typography variant="body1" sx={{fontWeight: '500'}}>
                  {plano.createdAt.slice(0, 10).split('-').reverse().join('/')}
                </Typography>
                <Typography variant="body2" sx={{color: 'lightGray'}}>
                  Criado em
                </Typography>
              </Stack>
            </Box>
          </Box>
        ))
      ) : (currentItems?.map((plano) => (
        <Box
          key={plano.title}
          sx={{
            width: '100%', height: {xs: '250px', sm: '100px', md: '100px'}, borderBottom: '1px solid lightGray',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{ display: 'flex', width: '50%', height: '100%',
              alignItems: {xs: 'start', sm: 'center', md: 'center'}, justifyContent: {xs: 'center', sm: 'start', md: 'start'}, gap: {xs: '10%', sm: '5%', md: '5%'}, flexDirection: {xs: 'column', sm: 'row', md: 'row'}
            }}
          >
            <img src={`https://planos-backend.onrender.com/assets/${plano.providerLogo}`} alt={plano.provider}/>
            <Typography variant="subtitle1" fontWeight="bold">
              {plano.title}
            </Typography>
          </Box>
          <Box
            sx={{
              width: '48%', height: '100%',
              alignItems: 'center', justifyContent: 'space-evenly', display: 'flex',
              flexDirection: {xs: 'column', sm: 'row', md: 'row'}
            }}
          >
            <Stack
              direction={{xs: 'row-reverse', sm: 'column', md: 'column'}}
              sx={{
                width: {xs: '100%', sm: '25%', md: '25%'}, height: '100%',
                alignItems: 'start', justifyContent: {xs: 'space-evenly', sm: 'center', md: 'center'}
              }}
            >
              <Typography variant="body1" sx={{fontWeight: '500'}}>
                {plano.contacts}
              </Typography>
              <Typography variant="body2" sx={{color: 'lightGray'}}>
                Contatos
              </Typography>
            </Stack>
            <Stack
              direction={{xs: 'row-reverse', sm: 'column', md: 'column'}}
            sx={{ width: {xs: '100%', sm: '25%', md: '25%'}, height: '100%',
              alignItems: 'start', justifyContent: {xs: 'space-evenly', sm: 'center', md: 'center'}
              }}
            >
              <Typography variant="body1" sx={{fontWeight: '500'}}>
                R$ {plano.cost.toFixed(2)}
              </Typography>
              <Typography variant="body2" sx={{color: 'lightGray'}}>
                Total
              </Typography>
            </Stack>
            <Stack
              direction={{xs: 'row-reverse', sm: 'column', md: 'column'}}
              sx={{ width: {xs: '100%', sm: '25%', md: '25%'}, height: '100%',
              alignItems: 'start', justifyContent: {xs: 'space-evenly', sm: 'center', md: 'center'}
              }}
            >
              <Typography variant="body1" sx={{fontWeight: '500'}}>
                {plano.createdAt.slice(0, 10).split('-').reverse().join('/')}
              </Typography>
              <Typography variant="body2" sx={{color: 'lightGray'}}>
                Criado em
              </Typography>
            </Stack>
          </Box>
        </Box>
      )))}
      {search.length > 0 ? <Box></Box> : (<Box sx={{width: '100%', height: {xs: '100px', sm: '50px', md: '50px'}, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1%'}}>
        {Array.from(Array(pages), (item, index) => {
          return <button value={index}
            key={index}
            onClick={(e) => setCurrentPage(Number(e.target.value))}
            style={{
              width: '30px', height: '30px', cursor: 'pointer', border: 'none', color: '#fff', background: '#D40066',
              borderRadius: '8px'
            }}
          >{index + 1}</button>
        })}
      </Box>)}
    </>
  )
}

export default SimplePlansCard
