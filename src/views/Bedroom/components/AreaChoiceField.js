import React, { useState, useEffect } from 'react'
import { TextField, InputAdornment } from '@mui/material'
import { useSelector } from 'react-redux'
import "./AreaChoiceField.scss"

export default function AreaChoiceField(props) {
  const bedroomDetails = useSelector((state) => state.bedroom.details)
  const [length, setLength] = useState(0)
  const [width, setWidth] = useState(0)
  const [areaVals, setAreaVals] = useState(bedroomDetails.map(item => ({ l: 0, w: 0 })))

  console.log(areaVals)

  useEffect(() => {
    props.handleChange(areaVals[props.index].l * areaVals[props.index].w, props.item.key, 'squarefootage')
  }, [areaVals])

  if (props.areaChoice === 'length-width') {
    return (
      <>
        <TextField
          className="length-width-field"
          value={areaVals[props.index].l}
          type='number'
          onChange={(event) => {
            setAreaVals(oldArray => {
              let newArray = [...oldArray]
              newArray[props.index].l = event.target.value
              return newArray
            })
          }}
          variant='standard'
          InputProps={{
            endAdornment: <InputAdornment position='end'>ft</InputAdornment>,
          }}
        />{' '}
        long and{' '}
        <TextField
          className="length-width-field"
          value={areaVals[props.index].w}
          type='number'
          onChange={(event) => {
            setAreaVals(oldArray => {
              let newArray = [...oldArray]
              newArray[props.index].w = event.target.value
              return newArray
            })
          }}
          variant='standard'
          InputProps={{
            endAdornment: <InputAdornment position='end'>ft</InputAdornment>,
          }}
        />{' '}
        wide, or {bedroomDetails[props.index].squarefootage} square feet.
      </>
    )
  } else {
    return (
      <>
        <TextField
          value={props.item.squarefootage}
          type='number'
          onChange={(event) => {
            props.handleChange(
              event.target.value,
              props.item.key,
              'squarefootage'
            )
          }}
          variant='standard'
          InputProps={{
            endAdornment: <InputAdornment position='end'>sqft</InputAdornment>,
          }}
        />{' '}
        room.
      </>
    )
  }
}