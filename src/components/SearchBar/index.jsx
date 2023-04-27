import {OutlinedInput, InputAdornment, FormControl} from '@mui/material'
import { useContext } from 'react'
import { PlansContext } from '../../contexts/Plans/PlansContext'

function SearchBar() {

  const {setSearch} = useContext(PlansContext);

  return (
    <>
      <FormControl variant="outlined" sx={{width: {xs: '45%', sm:'50%', md: '50%'}}}>
        <OutlinedInput id="input-with-icon-adornment" onChange={(e) => setSearch(e.target.value)} placeholder="Pesquisar" sx={{borderRadius: '20px'}}
          startAdornment={
            <InputAdornment position="start"
              sx={{ cursor: 'pointer', marginRight: '15px', }}
            >
              <img src="./assets/icons/lupa.png" alt="lupa" />
            </InputAdornment>
          }
        />
        </FormControl>
    </>
  )
}

export default SearchBar
