import React, { useState } from 'react'
import { Recurrence, RecurrenceType, FrequencyType, EndingConditionType } from 'react-recurrence'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { Grid, withStyles, WithStyles } from '@material-ui/core'
import styles from './styles'

const App = ({ classes }: WithStyles<typeof styles>) => {
  const defaultEndingOccurrencesNumber = 13

  const today = new Date()
  const defaultRecurrence = {
    startDate: today,
    endDate: today,
    frequency: FrequencyType.Weekly,
    numberOfRepetitions: 1,
    weekDaysRepetition: [],
    endingCondition: EndingConditionType.None,
    endingOccurrencesNumber: defaultEndingOccurrencesNumber,
    isAllDay: false,
    startTime: today,
    endTime: today
  }
  const [recurrence, setRecurrence] = useState<RecurrenceType>(
    defaultRecurrence
  )

  const handleRecurrenceChange = (updatedRecurrence: RecurrenceType) => {
    setRecurrence(updatedRecurrence)
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Recurrence
        recurrence={recurrence}
        onChange={handleRecurrenceChange}
        classes={classes}
      >
        <Grid
          container
          direction='column'
          justify='center'
          alignItems='center'
          spacing={3}
        >
          <Grid item xs={12}>
            <Recurrence.StartDateSelector/>
          </Grid>
          <Grid item xs={12}>
            <Recurrence.FrequencySelector/>
          </Grid>
          <Grid item sm={12}>
            <Recurrence.EndingConditionSelector/>
          </Grid>
          <Grid item sm={12}>
            <Recurrence.TimeSelector/>
          </Grid>
        </Grid>
      </Recurrence>
    </MuiPickersUtilsProvider>
  )
}

export default withStyles(styles)(App)
