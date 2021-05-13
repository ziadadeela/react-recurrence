import * as React from 'react'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup/RadioGroup'
import { Grid, WithStyles, withStyles } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel/FormControlLabel'
import Radio from '@material-ui/core/Radio/Radio'
import FormControl from '@material-ui/core/FormControl'
import DatePicker from '../general/DatePicker'
import NumberInput from '../general/NumberInput'
import { EndingConditionType } from '../../types'
import styles from './styles'
import RecurrenceContext from '../RecurrenceContext'
import { FunctionComponent, useContext, useEffect } from 'react'

const EndingConditionSelector: FunctionComponent<WithStyles<typeof styles>> = ({
  classes
}) => {
  const { recurrence, onFieldChange, onFieldsChange } = useContext(
    RecurrenceContext
  )

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
  useEffect(() => {
    switch (recurrence.endingCondition) {
      case EndingConditionType.None:
        onFieldsChange({
          endDate: null,
          endingOccurrencesNumber: undefined
        })
        break
      case EndingConditionType.EndDate:
        onFieldChange('endingOccurrencesNumber', undefined)
        break
      case EndingConditionType.OccurrencesNumber:
        onFieldChange('endDate', null)
        break
    }
  }, [recurrence.endingCondition])

  return (
    <div>
      <FormControl component='fieldset'>
        <FormLabel component='legend'>Ends</FormLabel>
        <RadioGroup
          aria-label='ends'
          name='ends'
          value={recurrence.endingCondition}
          onChange={handleEndingConditionChange}
          className={classes.radioGroup}
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
                value={EndingConditionType.None}
                control={
                  <Radio
                    color='primary'
                    className={classes.radio}
                    data-testid='recurrence-ending-condition-none-choice'
                  />
                }
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
                value={EndingConditionType.EndDate}
                control={
                  <Radio
                    color='primary'
                    className={classes.radio}
                    data-testid='recurrence-ending-condition-end-date-choice'
                  />
                }
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
                  recurrence.endingCondition !== EndingConditionType.EndDate
                }
                minDate={recurrence.startDate}
                minDateMessage='End Date must be equal or after Start Date'
                className={classes.endDate}
                inputProps={{
                  'data-testid': 'recurrence-ending-condition-end-date'
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item sm={6} container alignItems='flex-start'>
              <FormControlLabel
                value={EndingConditionType.OccurrencesNumber}
                control={
                  <Radio
                    color='primary'
                    className={classes.radio}
                    data-testid='recurrence-ending-condition-occurrences-number-choice'
                  />
                }
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
                  EndingConditionType.OccurrencesNumber
                }
                inputProps={{
                  'data-testid':
                    'recurrence-ending-condition-occurrences-number'
                }}
                className={classes.occurrencesNumber}
              />
            </Grid>
          </Grid>
        </RadioGroup>
      </FormControl>
    </div>
  )
}
export default withStyles(styles)(EndingConditionSelector)
