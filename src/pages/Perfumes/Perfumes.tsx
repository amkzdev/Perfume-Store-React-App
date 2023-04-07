import React from 'react'
import { Grid } from '@mui/material'
import { PerfumeListItem } from '@components'

const p = [{}, {}, {}, {}, {}, {}, {}]

export const Perfumes = () => {
  return (
    <Grid container direction={'column'} height={'100%'} spacing={4} sx={{ m: 1 }} maxWidth={'1024px'} overflow={'auto'}>
      {p.map(perfume => <PerfumeListItem {...perfume} />)}
    </Grid>
  )
}
