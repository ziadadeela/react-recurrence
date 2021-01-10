import * as React from 'react'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup/RadioGroup'
import { Grid, withStyles } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel/FormControlLabel'
import Radio from '@material-ui/core/Radio/Radio'
import FormControl from '@material-ui/core/FormControl'
import DatePicker from '../general/DatePicker'
import NumberInput from '../general/NumberInput'
import { EndingCondition } from '../../types'
import styles from './styles'
import { useContext } from 'react'
import RecurrenceContext from '../RecurrenceContext'

interface EndingConditionSelectorProps {}

const EndingConditionSelector = ({}: EndingConditionSelectorProps) => {
  const { recurrence, onFieldChange } = useContext(RecurrenceContext)

  const handleEndingConditionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    onFieldChange('endingCondition', event.target.value)
  }
  const handleEndingOccurrencesNumberChange = (
    endingOccurrencesNumber: number
  ) => {
    onFieldChange('endingOccurrencesNumber', endingOccurrencesNumber)
  }
  const handleEndDateChange = (date: Date) => {
    onFieldChange('endDate', date)
  }

  return (
    <div>
      <FormControl component='fieldset'>
        <FormLabel component='legend'>Ends</FormLabel>
        <RadioGroup
          aria-label='ends'
          name='ends'
          value={recurrence.endingCondition}
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
                value={recurrence.endDate}
                onChange={handleEndDateChange}
                disabled={
                  recurrence.endingCondition !== EndingCondition.END_DATE
                }
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
                value={recurrence.endingOccurrencesNumber}
                onChange={handleEndingOccurrencesNumberChange}
                adornmentLabel='occurrences'
                disabled={
                  recurrence.endingCondition !==
                  EndingCondition.OCCURRENCES_NUMBER
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
