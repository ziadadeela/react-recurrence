import * as React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { KeyboardTimePicker } from '@material-ui/pickers'
import { Grid, withStyles } from '@material-ui/core'
import styles from './styles'
import RecurrenceContext from '../RecurrenceContext'
import { useContext, useEffect } from 'react'

const TimeSelector = () => {
  const { recurrence, onFieldChange, onFieldsChange } = useContext(
    RecurrenceContext
  )

  const handleAllDayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onFieldChange('isAllDay', event.target.checked)
  }
  const handleStartTimeChange = (startTime?: Date) => {
    onFieldChange('startTime', startTime)
  }
  const handleEndTimeChange = (endTime?: Date) => {
    onFieldChange('endTime', endTime)
  }
  useEffect(() => {
    if (recurrence.isAllDay) {
      onFieldsChange({
        startTime: null,
        endTime: null
      })
    }
  }, [recurrence.isAllDay])

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item sm={2} justify='flex-end' container alignItems='flex-end'>
          <FormControlLabel
            control={
              <Checkbox
                id='is-all-day'
                name='is-all-day'
                checked={recurrence.isAllDay}
                onChange={handleAllDayChange}
                color='primary'
                data-testid='recurrence-all-day'
              />
            }
            label='All day'
            labelPlacement='top'
          />
        </Grid>
        <Grid
          item
          sm={5}
          justify='flex-start'
          container
          alignItems='flex-start'
        >
          <KeyboardTimePicker
            margin='normal'
            id='start-time'
            label='Start'
            value={recurrence.startTime}
            onChange={handleStartTimeChange}
            KeyboardButtonProps={{
              'aria-label': 'change time'
            }}
            disabled={recurrence.isAllDay}
            inputProps={{
              'data-testid': 'recurrence-start-time'
            }}
          />
        </Grid>
        <Grid
          item
          sm={5}
          justify='flex-start'
          container
          alignItems='flex-start'
        >
          <KeyboardTimePicker
            margin='normal'
            id='end-time'
            label='End'
            value={recurrence.endTime}
            onChange={handleEndTimeChange}
            KeyboardButtonProps={{
              'aria-label': 'change time'
            }}
            disabled={recurrence.isAllDay}
            inputProps={{
              'data-testid': 'recurrence-end-time'
            }}
          />
        </Grid>
      </Grid>
    </div>
  )
}
export default withStyles(styles)(TimeSelector)
