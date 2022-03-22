import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Select, MenuItem, TextField, InputAdornment } from '@mui/material'
import { setRent } from '../../../store/rentSlice'
import { setRoommate } from '../../../store/roommateSlice'

export default function RoommateDetails(props) {
  const dispatch = useDispatch()
  const rent = useSelector((state) => state.rent)
  const roommate = useSelector((state) => state.roommate)

  const handleRentChange = (event) => {
    dispatch(setRent(event.target.value))
  }

  const handleRoommateChange = (event) => {
    dispatch(setRoommate(event.target.value))
  }

  return (
    <div>
      Rent will cost{' '}
      <TextField
        id='standard-basic'
        value={rent}
        onChange={handleRentChange}
        type='number'
        variant='standard'
        InputProps={{
          startAdornment: <InputAdornment position='start'>$</InputAdornment>,
        }}
      />
      monthly, and I'll be sharing it between{' '}
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={roommate}
        variant='standard'
        onChange={handleRoommateChange}
      >
        {props.options.map((item) => {
          return (
            <MenuItem key={item.key} value={item.key}>
              {item.value}
            </MenuItem>
          )
        })}
      </Select>
      people.
    </div>
  )
}
