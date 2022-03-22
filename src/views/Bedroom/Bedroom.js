import React, { useState, useEffect } from 'react'
import { Select, MenuItem, Button, TextField } from '@mui/material'

// component calls
import AreaChoiceField from './components/AreaChoiceField.js'

// redux calls
import { useSelector, useDispatch } from 'react-redux'
import { updateDetail } from '../../store/bedroomSlice'

export default function Bedroom(props) {
  const dispatch = useDispatch()
  const bedroom = useSelector((state) => state.bedroom.details)
  const [index, setIndex] = useState(0)
  const [isBackDisabled, setIsBackDisabled] = useState(true)

  useEffect(() => {
    evaluateIsBackDisabled()
  })

  function handleChange (value, key, attribute) {
    dispatch(updateDetail({ value: value, key: key, attribute: attribute }))
  }

  function evaluateIsBackDisabled() {
    if (index <= 0) {
      setIsBackDisabled(true)
    } else {
      setIsBackDisabled(false)
    }
  }

  function incrementIndex() {
    setIndex(index + 1)
  }

  function decrementIndex() {
    setIndex(index - 1)
  }

  return (
    <div>
      <h2>Let's talk about the rooms...</h2>
      <h3>
        {index + 1} out of {bedroom.length}
      </h3>
      <div>
        The{' '}
        <TextField
          id="label"
          variant='standard'
          value={bedroom[index].label}
          onChange={(event) =>
            handleChange(event.target.value, bedroom[index].key, 'label')
          }
        />{' '}
        is{' '}
        <AreaChoiceField
          item={bedroom[index]}
          areaChoice={props.areaChoice}
          handleChange={handleChange}
          index={index}
        />{' '}
        It also{' '}
        <Select
          id="attached"
          value={bedroom[index].attachedBath}
          variant='standard'
          onChange={(event) =>
            handleChange(event.target.value, bedroom[index].key, 'attachedBath')
          }
        >
          <MenuItem value={true}>does</MenuItem>
          <MenuItem value={false}>does not</MenuItem>
        </Select>{' '}
        have an attached bathroom.
      </div>
      <div>
        <Button
          disabled={isBackDisabled}
          onClick={() => {
            if (index > 0) decrementIndex()
          }}
        >
          Back
        </Button>

        <Button
          onClick={() => {
            if (index < bedroom.length - 1) incrementIndex()
          }}
        >
          Continue
        </Button>
      </div>
    </div>
  )
}

/*

      {
        bedroom.map((item, index) => {
          return (<div key={index}>
            <TextField variant="standard" value={item.label} onChange={(e) => handleLabelChange(e, item.key, "label")} />}
            { item.label } is{' '}
            <AreaChoiceField item={item} areaChoice={props.areaChoice} handleChange={handleChange} index={index} />
            {' '}It also{' '}
            <Select
              value={item.attachedBath}
              variant="standard"
              onChange={(event) => handleChange(event.target.value, item.key, "attachedBath")}
            >
              <MenuItem value={true}>does</MenuItem>
              <MenuItem value={false}>does not</MenuItem>
            </Select>
            {' '}have an attached bathroom.
          </div>)
        })
      }

*/
