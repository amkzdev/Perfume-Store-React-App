import React from 'react'
import { Grid } from '@mui/material'
import { PerfumeListItem } from '@components'

const p = [{}, {}, {}, {}, {}, {}]

export const Perfumes = () => {
  return (
    <Grid container direction={'column'} height={'100%'} spacing={2}>
      {p.map(perfume => <PerfumeListItem {...perfume} />)}
    </Grid>
  )
}
