import React from 'react'
import { Select, MenuItem } from '@mui/material'

// redux calls
import { useSelector, useDispatch } from 'react-redux'
import { setBedroom } from '../../../store/bedroomSlice'
import { setBathroom } from '../../../store/bathroomSlice'

export default function Apartment(props) {
  const dispatch = useDispatch()
  const bedroom = useSelector((state) => state.bedroom.count)
  const bathroom = useSelector((state) => state.bathroom)

  function handleBedroomChange(event) {
    dispatch(setBedroom(event.target.value))
  }

  function handleBathroomChange(event) {
    dispatch(setBathroom(event.target.value))
  }

  return (
    <div>
      I am renting a place with{' '}
      <Select
        id='bedrooms'
        value={bedroom}
        variant='standard'
        onChange={handleBedroomChange}
      >
        {props.options.map((item) => {
          return (
            <MenuItem key={item.key} value={item.key}>
              {item.value}
            </MenuItem>
          )
        })}
      </Select>{' '}
      bedrooms, and{' '}
      <Select
        id='bathrooms'
        value={bathroom}
        variant='standard'
        onChange={handleBathroomChange}
      >
        {props.options.map((item) => {
          return (
            <MenuItem key={item.key} value={item.key}>
              {item.value}
            </MenuItem>
          )
        })}
      </Select>{' '}
      bathrooms.
    </div>
  )
}
