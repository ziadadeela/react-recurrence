import * as React from 'react'
import styles from './styles.module.css'
import { Grid } from '@material-ui/core'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

import { RecurrenceType } from './types'
import { TimeSelector } from './components/TimeSelector'
import { EndingConditionSelector } from './components/EndingConditionSelector'
import { FrequencySelector } from './components/FrequencySelector'
import { DatePicker } from './components/general/DatePicker'

interface RecurrenceProps {
  recurrence: RecurrenceType
  onChange: (recurrence: RecurrenceType) => void
}

export const Recurrence = ({ recurrence, onChange }: RecurrenceProps) => {
  const handleFieldChange = (key: string, value: any) => {
    const newRecurrence = {
      ...recurrence,
      [key]: value
    }
    onChange(newRecurrence)
  }

  const handleStartDateChange = (date: Date) => {
    handleFieldChange('startDate', date)
  }

  const handleFrequencyChange = (frequency: string) => {
    handleFieldChange('frequency', frequency)
  }
  const handleNumberOfRepetitionChange = (numberOfRepetitions: number) => {
    handleFieldChange('numberOfRepetitions', numberOfRepetitions)
  }
  const handleWeekDaysChange = (days: Array<number>) => {
    handleFieldChange('weekDaysRepetition', days)
  }
  const handleEndingConditionChange = (endingCondition: string) => {
    handleFieldChange('endingCondition', endingCondition)
  }
  const handleEndingOccurrencesNumberChange = (
    endingOccurrencesNumber: number
  ) => {
    handleFieldChange('endingOccurrencesNumber', endingOccurrencesNumber)
  }
  const handleEndDateChange = (date: Date) => {
    handleFieldChange('endDate', date)
  }

  const handleAllDayChange = (isAllDay: boolean) => {
    handleFieldChange('isAllDay', isAllDay)
  }
  const handleStartTimeChange = (startTime: Date) => {
    handleFieldChange('startTime', startTime)
  }
  const handleEndTimeChange = (endTime: Date) => {
    handleFieldChange('endTime', endTime)
  }
  return (
    <div className={styles.test}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid
          container
          direction='column'
          justify='center'
          alignItems='center'
          spacing={3}
        >
          <Grid item xs={12}>
            <DatePicker
              name='start-date'
              label='Start'
              value={recurrence.startDate}
              onChange={handleStartDateChange}
            />
          </Grid>
          <FrequencySelector
            frequency={recurrence.frequency}
            numberOfRepetitions={recurrence.numberOfRepetitions}
            weekDaysRepetition={recurrence.weekDaysRepetition}
            onFrequencyChange={handleFrequencyChange}
            onNumberOfRepetitionsChange={handleNumberOfRepetitionChange}
            onWeekDaysChange={handleWeekDaysChange}
          />
          <Grid item sm={12}>
            <EndingConditionSelector
              endingCondition={recurrence.endingCondition}
              endDate={recurrence.endDate}
              endingOccurrencesNumber={recurrence.endingOccurrencesNumber}
              onEndingConditionChange={handleEndingConditionChange}
              onEndDateChange={handleEndDateChange}
              onEndingOccurrencesNumberChange={
                handleEndingOccurrencesNumberChange
              }
            />
          </Grid>
          <Grid item sm={12}>
            <TimeSelector
              isAllDay={recurrence.isAllDay}
              startTime={recurrence.startTime}
              endTime={recurrence.endTime}
              onAllDayChange={handleAllDayChange}
              onStartTimeChange={handleStartTimeChange}
              onEndTimeChange={handleEndTimeChange}
            />
          </Grid>
        </Grid>
      </MuiPickersUtilsProvider>
    </div>
  )
}
