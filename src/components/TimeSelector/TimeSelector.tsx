import * as React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { KeyboardTimePicker } from '@material-ui/pickers'
import { Grid, withStyles } from '@material-ui/core'
import styles from '../WeekDaysSelector/styles'

interface TimeSelectorProps {
  isAllDay: boolean
  startTime?: Date
  endTime?: Date
  onAllDayChange: (isAllDay: boolean) => void
  onStartTimeChange: (startTime?: Date) => void
  onEndTimeChange: (endTime?: Date) => void
}

const TimeSelector = ({
  isAllDay,
  startTime,
  endTime,
  onAllDayChange,
  onStartTimeChange,
  onEndTimeChange
}: TimeSelectorProps) => {
  // TODO: how to clear start&end time if allDay is selected
  const handleAllDayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onAllDayChange(event.target.checked)
  }
  const handleStartTimeChange = (date?: Date) => {
    onStartTimeChange(date)
  }
  const handleEndTimeChange = (date?: Date) => {
    onEndTimeChange(date)
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
                checked={isAllDay}
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
            value={startTime}
            onChange={handleStartTimeChange}
            KeyboardButtonProps={{
              'aria-label': 'change time'
            }}
            disabled={isAllDay}
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
            value={endTime}
            onChange={handleEndTimeChange}
            KeyboardButtonProps={{
              'aria-label': 'change time'
            }}
            disabled={isAllDay}
          />
        </Grid>
      </Grid>
    </div>
  )
}
export default withStyles(styles)(TimeSelector)
