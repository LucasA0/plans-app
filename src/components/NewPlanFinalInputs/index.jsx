import { Box, Typography } from '@mui/material'
import React from 'react'
import { planTypes } from '../../utils/PlanTypes/planTypes'
import { priority } from '../../utils/Priority/piority'

function NewPlanFinalInputs() {
  return (
    <>
      <Box sx={{width: '100%', height: '10%', display: 'flex', alignItems: 'center'}}>
        <label style={{width: '20%', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
          <input type="radio" name="unlimited-calls" id="sim" value="sim"/>
          Sim
        </label>
        <label style={{width: '20%', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
          <input type="radio" name="unlimited-calls" id="nao" value="nao"/>
          Não
        </label>
      </Box>
      <Box sx={{width: '100%', height: '80%', display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: '3%'}}>
        <label>
          <Typography variant='h7' fontWeight='bold'>Tipo do plano</Typography>
        </label>
        <select name="planType" id="planType"
          style={{width: '100%', height: '45px', border: '2px solid #000',
            background: 'transparent', borderRadius: '10px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer'}}>
          {planTypes.map((plan) => (
            <option
              value={plan.name}
              key={plan.id}
              style={{fontSize: '16px', fontWeight: 'bold'}}
            >{plan.name}</option>
          ))}
        </select>
        <label>
          <Typography variant='h7' fontWeight='bold'>Prioridade</Typography>
        </label>
        <select name="priority" id="priority"
          style={{width: '100%', height: '45px', border: '2px solid #000',
            background: 'transparent', borderRadius: '10px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer'}}>
          {priority.map((priority) => (
            <option
              value={priority.name}
              key={priority.id}
              style={{fontSize: '16px', fontWeight: 'bold'}}
            >{priority.name}</option>
          ))}
        </select>
        <label>
          <Typography variant='h7' fontWeight='bold'>Descrição:</Typography>
        </label>
        <textarea style={{width: '100%', height: '40%', borderRadius: '10px',
          resize: 'none', border: '2px solid #000', fontSize: '18px', paddingLeft: '10px', paddingTop: '10px'}}/>
      </Box>
    </>
  )
}

export default NewPlanFinalInputs