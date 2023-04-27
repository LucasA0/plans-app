import React, { useContext } from 'react'
import { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material'
import { PlansContext } from '../../contexts/Plans/PlansContext';

function ClientsCard({clients}) {
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);
  const [planData, setPlanData] = useState([]);
  const [showMore, setShowMore] = useState(false)
  const [clientId, setClientId] = useState('');

  const {allPlans, search} = useContext(PlansContext);

  const pages = Math.ceil(clients.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = clients.slice(startIndex, endIndex)

  let filteredClients = search.length > 0 ? clients?.filter(client => client.name.includes(search)) : [];

  const handleShowMore = (client) => {
    setShowMore(!showMore)
    setClientId(client._id)
    setPlanData(allPlans.filter(plan => plan._id.includes(client.plan)))
    if(showMore) {
      setClientId('')
    }
  }

  const insertMaskInCpf = (cpf) => {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
  }

  return (
    <>
      {search.length > 0 ? filteredClients?.map(client => (
        <Stack sx={{
          width: '100%', height: {xs: '250px', sm: '150px', md: '150px'}, borderBottom: '1px solid lightGray',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          overflowY: 'auto', gap: '5%'
        }}
        key={client.name}
        >
          <Box sx={{display: 'flex', width: '100%', height: '40%'}}>
            <Stack sx={{flexDirection: 'row', width: '35%', height: '100%', alignItems: 'center', justifyContent: 'start', gap: '10%'}}>
              <Stack sx={{width: '70%', height: '100%', gap: '5%', justifyContent: 'center'}}>
                <Typography variant='body1' fontWeight='medium'>{client.name}</Typography>
                <Typography variant='subtitle2' color="lightgray">Nome</Typography>
              </Stack>
            </Stack>
            <Stack sx={{flexDirection: 'row', width: '65%', height: '100%', alignItems: 'center', justifyContent: 'start', gap: '2%'}}>
              <Stack sx={{width: '40%', height: '100%', gap: '5%', justifyContent: 'center'}}>
                <Typography variant='body1' fontWeight='medium'>{client.cel}</Typography>
                <Typography variant='subtitle2' color="lightgray">Celular</Typography>
              </Stack>
              <Stack sx={{width: '40%', height: '100%', gap: '5%', justifyContent: 'center'}}>
                <Typography variant='body1' fontWeight='medium'>{insertMaskInCpf(client.cpf)}</Typography>
                <Typography variant='subtitle2' color="lightgray">Cpf</Typography>
              </Stack>
              <Stack sx={{width: '45%', height: '100%', gap: '5%', justifyContent: 'center'}}>
                <Typography variant='body1' fontWeight='medium'>{client.dateOfBirth}</Typography>
                <Typography variant='subtitle2' color="lightgray">Data de nascimento</Typography>
              </Stack>
              <Stack sx={{width: '10%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                <button style={{width: '30px', height: '30px',
                  background: '#D40066', border: 'none', borderRadius: '4px',
                  color: '#fff', cursor: 'pointer', fontSize: '18px', fontWeight: 'bold'}}
                  onClick={() => handleShowMore(client)}
                >{showMore && clientId === client._id ? '-' : '+'}</button>
              </Stack>
            </Stack>
          </Box>
          <Box sx={{display: clientId === client._id ? 'flex' : 'none', width: '100%', height: '40%'}}>
            <Stack sx={{width: '40%', height: '100%', gap: '5%', justifyContent: 'center', alignItems: 'center'}}>
              <Typography variant='body1' fontWeight='medium'>{planData[0]?.title}</Typography>
              <Typography variant='subtitle2' color="lightgray">Plano</Typography>
            </Stack>
            <Stack sx={{width: '40%', height: '100%', gap: '5%', justifyContent: 'center', alignItems: 'center'}}>
              <Typography variant='body1' fontWeight='medium'>{client.dateOfBirth}</Typography>
              <Typography variant='subtitle2' color="lightgray">Data de Contato</Typography>
            </Stack>
          </Box>
        </Stack>
      )) : (
        currentItems.map((client) => (
          <Stack sx={{
            width: '100%', height: {xs: '200px', sm: '150px', md: '150px'}, borderBottom: '1px solid lightGray',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            overflowY: 'auto', gap: '5%'
          }}
          key={client.name}
          >
            <Box sx={{display: 'flex', width: '100%', height: {xs: '90%', sm: '40%', md: '40%'}}}>
              <Stack sx={{flexDirection: {xs: 'column', sm: 'row', md: 'row'}, width: '30%', height: '100%', alignItems: 'center', justifyContent: 'start', gap: '10%'}}>
                <Stack sx={{width: '90%', height: '100%', gap: '5%', justifyContent: 'center'}}>
                  <Typography variant='body1' fontWeight='medium'>{client.name}</Typography>
                  <Typography variant='subtitle2' color="lightgray">Nome</Typography>
                </Stack>
              </Stack>
              <Stack sx={{flexDirection: {xs: 'row', sm: 'row', md: 'row'}, width: '80%', height: '100%', alignItems: 'center', justifyContent: 'start', gap: '2%'}}>
                <Stack
                  direction={{xs: 'column', sm: 'row', md: 'row'}}
                  sx={{width: {xs: '50%', sm: '55%', md: '55%'}, height: '100%', alignItems: 'center', justifyContent: 'center'}}
                >
                  <Stack sx={{width: {xs: '100%', sm: '50%', md: '40%'}, height: '40%', justifyContent: 'center', alignItems: 'center'}}>
                    <Typography variant='body1' fontWeight='medium'>{client.cel}</Typography>
                    <Typography variant='subtitle2' color="lightgray">Celular</Typography>
                  </Stack>
                  <Stack sx={{width: {xs: '100%', sm: '50%', md: '40%'}, height: '40%', justifyContent: 'center', alignItems: 'center'}}>
                    <Typography variant='body1' fontWeight='medium'>{insertMaskInCpf(client.cpf)}</Typography>
                    <Typography variant='subtitle2' color="lightgray">Cpf</Typography>
                  </Stack>
                </Stack>
                <Stack sx={{width: {xs: '30%', sm: '30%', md: '45%'}, height: '100%', gap: '5%', justifyContent: 'center'}}>
                  <Typography variant='body1' fontWeight='medium'>{client.dateOfBirth}</Typography>
                  <Typography variant='subtitle2' color="lightgray">Data de nascimento</Typography>
                </Stack>
                <Stack sx={{width: '10%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                  <button style={{width: '30px', height: '30px',
                    background: '#D40066', border: 'none', borderRadius: '4px',
                    color: '#fff', cursor: 'pointer', fontSize: '18px', fontWeight: 'bold'}}
                    onClick={() => handleShowMore(client)}
                  >{showMore && clientId === client._id ? '-' : '+'}</button>
                </Stack>
              </Stack>
            </Box>
            <Box sx={{display: clientId === client._id ? 'flex' : 'none', width: '100%', height: '40%'}}>
              <Stack sx={{width: {xs: '50%', sm: '40%', md: '40%'}, height: '100%', gap: '5%', justifyContent: 'center', alignItems: 'center'}}>
                <Typography variant='body1' fontWeight='medium'>{planData[0]?.title}</Typography>
                <Typography variant='subtitle2' color="lightgray">Plano</Typography>
              </Stack>
              <Stack sx={{width: {xs: '50%', sm: '40%', md: '40%'}, height: '100%', gap: '5%', justifyContent: 'center', alignItems: 'center'}}>
                <Typography variant='body1' fontWeight='medium'>{client.dateOfBirth}</Typography>
                <Typography variant='subtitle2' color="lightgray">Data de Contato</Typography>
              </Stack>
            </Box>
          </Stack>
        ))
      )}
      <Box sx={{width: '100%', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1%'}}>
        {Array.from(Array(pages), (item, index) => {
          return <button value={index}
            onClick={(e) => setCurrentPage(Number(e.target.value))}
            style={{
              width: '30px', height: '30px', cursor: 'pointer', border: 'none', color: '#fff', background: '#D40066',
              borderRadius: '8px'
            }}
            key={index}
          >{index + 1}</button>
        })}
      </Box>
    </>
  )
}

export default ClientsCard
