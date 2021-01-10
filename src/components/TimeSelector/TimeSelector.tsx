import * as React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { KeyboardTimePicker } from '@material-ui/pickers'
import { Grid, withStyles } from '@material-ui/core'
import styles from './styles'
import RecurrenceContext from '../RecurrenceContext'
import { useContext } from 'react'

interface TimeSelectorProps {}

const TimeSelector = ({}: TimeSelectorProps) => {
  const { recurrence, onFieldChange } = useContext(RecurrenceContext)

  const handleAllDayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onFieldChange('isAllDay', event.target.checked)
  }
  const handleStartTimeChange = (startTime?: Date) => {
    onFieldChange('startTime', startTime)
  }
  const handleEndTimeChange = (endTime?: Date) => {
    onFieldChange('endTime', endTime)
  }

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item sm={4} justify='flex-end' container alignItems='flex-end'>
          <FormControlLabel
            control={
              <Checkbox
                id='is-all-day'
                name='is-all-day'
                checked={recurrence.isAllDay}
                onChange={handleAllDayChange}
                color='primary'
              />
            }
            label='All day'
            labelPlacement='top'
          />
        </Grid>
        <Grid
          item
          sm={4}
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
          />
        </Grid>
        <Grid
          item
          sm={4}
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
          />
        </Grid>
      </Grid>
    </div>
  )
}
export default withStyles(styles)(TimeSelector)
