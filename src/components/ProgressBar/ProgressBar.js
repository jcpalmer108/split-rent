import React from 'react'
import { LinearProgress } from '@mui/material'
import './ProgressBar.scss'

/*

TODO:
- fill out value functionality later
- add theme so it matches scheme

*/

export default function ProgressBar() {
  return (
    <div className='progress-bar'>
      <LinearProgress variant='determinate' value={1} />
    </div>
  )
}
