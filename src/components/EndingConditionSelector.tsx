import * as React from 'react'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup/RadioGroup'
import { Grid } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel/FormControlLabel'
import Radio from '@material-ui/core/Radio/Radio'
import FormControl from '@material-ui/core/FormControl'
import { DatePicker } from './general/DatePicker'
import { NumberInput } from './general/NumberInput'

interface EndingConditionSelectorProps {
  endDate?: Date
  endingOccurrencesNumber?: number
  endingCondition: string
  onEndingConditionChange: (endingCondition: string) => void
  onEndingOccurrencesNumberChange: (occurrencesNumber: number) => void
  onEndDateChange: (endDate: Date) => void
}

export const EndingConditionSelector = ({
  endingCondition,
  endDate,
  endingOccurrencesNumber,
  onEndingConditionChange,
  onEndingOccurrencesNumberChange,
  onEndDateChange
}: EndingConditionSelectorProps) => {
  const handleEndingConditionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    onEndingConditionChange(event.target.value)
  }

  // const handleEndingOccurrencesNumberChange = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   onEndingOccurrencesNumberChange(
  //     // TODO: create custom number input and handle the parsing within
  //     // parseNumberInput(event.target.value)
  //     parseInt(event.target.value)
  //   )
  // }

  return (
    <div>
      <FormControl component='fieldset'>
        <FormLabel component='legend'>Ends</FormLabel>
        <RadioGroup
          aria-label='ends'
          name='ends'
          value={endingCondition}
          onChange={handleEndingConditionChange}
        >
          <Grid
            container
            spacing={1}
            direction='column'
            justify='space-between'
            alignItems='flex-start'
          >
            <Grid item sm={6}>
              <FormControlLabel
                value='none'
                control={<Radio color='primary' />}
                label='Never'
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid
              item
              sm={6}
              justify='flex-start'
              container
              alignItems='flex-start'
            >
              <FormControlLabel
                value='end_date'
                control={<Radio color='primary' />}
                label='On'
              />
            </Grid>
            <Grid item sm={6}>
              <DatePicker
                name='end-date'
                label='End'
                value={endDate}
                onChange={onEndDateChange}
                disabled={endingCondition !== 'end_date'}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item sm={6} container alignItems='flex-start'>
              <FormControlLabel
                value='occurrences_number'
                control={<Radio color='primary' />}
                label='After'
              />
            </Grid>
            <Grid item sm={6}>
              <NumberInput
                name='ending-ocurrences-number'
                value={endingOccurrencesNumber}
                onChange={onEndingOccurrencesNumberChange}
                adornmentLabel='occurrences'
                disabled={endingCondition !== 'occurrences_number'}
              />
            </Grid>
          </Grid>
        </RadioGroup>
      </FormControl>
    </div>
  )
}
