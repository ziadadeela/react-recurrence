import * as React from 'react'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup/RadioGroup'
import { Grid, withStyles } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel/FormControlLabel'
import Radio from '@material-ui/core/Radio/Radio'
import FormControl from '@material-ui/core/FormControl'
import { DatePicker } from '../general/DatePicker'
import { NumberInput } from '../general/NumberInput'
import { EndingCondition } from '../../types'
import styles from '../WeekDaysSelector/styles'

interface EndingConditionSelectorProps {
  endDate?: Date
  endingOccurrencesNumber?: number
  endingCondition: string
  onEndingConditionChange: (endingCondition: string) => void
  onEndingOccurrencesNumberChange: (occurrencesNumber: number) => void
  onEndDateChange: (endDate: Date) => void
}

const EndingConditionSelector = ({
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
                value={EndingCondition.NONE}
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
                value={EndingCondition.END_DATE}
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
                disabled={endingCondition !== EndingCondition.END_DATE}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item sm={6} container alignItems='flex-start'>
              <FormControlLabel
                value={EndingCondition.OCCURRENCES_NUMBER}
                control={<Radio color='primary' />}
                label='After'
              />
            </Grid>
            <Grid item sm={6}>
              <NumberInput
                name='ending-occurrences-number'
                value={endingOccurrencesNumber}
                onChange={onEndingOccurrencesNumberChange}
                adornmentLabel='occurrences'
                disabled={
                  endingCondition !== EndingCondition.OCCURRENCES_NUMBER
                }
              />
            </Grid>
          </Grid>
        </RadioGroup>
      </FormControl>
    </div>
  )
}
export default withStyles(styles)(EndingConditionSelector)
