import * as React from 'react'
import styles from './styles.module.css'
import { Grid } from '@material-ui/core'
import {
  MuiPickersUtilsProvider,
  // KeyboardDateTimePicker,
  KeyboardDatePicker,
  KeyboardTimePicker
} from '@material-ui/pickers'
import MenuItem from '@material-ui/core/MenuItem'
import DateFnsUtils from '@date-io/date-fns'
// import { useState } from 'react'
import TextField from '@material-ui/core/TextField/TextField'

import OutlinedInput from '@material-ui/core/OutlinedInput/OutlinedInput'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel/FormControlLabel'
import Radio from '@material-ui/core/Radio/Radio'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import { Option, RecurrenceDay, RecurrenceType } from './types'
import Fade from '@material-ui/core/Fade'
import Tooltip from '@material-ui/core/Tooltip'
import { useEffect, useState } from 'react'

interface Props2 {
  defaultRecurrence: RecurrenceType
  onChange: (recurrence: RecurrenceType) => void
  // startDate: Date
  // endDate: Date
  // frequency: string
  // onStartDateChange: (date: Date) => void
  // onEndDateChange: (date: Date) => void
  // onFrequencyChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Recurrence2 = ({ defaultRecurrence, onChange }: Props2) => {
  const [recurrence, setRecurrence] = useState<RecurrenceType>(
    defaultRecurrence
  )
  const FREQUENCY_OPTIONS: Option[] = [
    {
      key: 'none',
      title: 'Does not repeat'
    },
    {
      key: 'hourly',
      title: 'Hourly'
    },
    {
      key: 'daily',
      title: 'Daily'
    },
    {
      key: 'weekly',
      title: 'Weekly'
    },
    {
      key: 'monthly',
      title: 'Monthly'
    },
    {
      key: 'annually',
      title: 'Annually'
    },
    {
      key: 'every_weekday',
      title: 'Every weekday (Monday to Friday)'
    }
  ]
  // const DEFAULT_WEEK_DAYS: RecurrenceDay[] = [
  //   {
  //     key: 'sat',
  //     title: 'Saturday',
  //     symbol: 'S',
  //     isSelected: false
  //   },
  //   {
  //     key: 'sun',
  //     title: 'Sunday',
  //     symbol: 'S',
  //     isSelected: false
  //   },
  //   {
  //     key: 'mon',
  //     title: 'Monday',
  //     symbol: 'M',
  //     isSelected: false
  //   },
  //   {
  //     key: 'tue',
  //     title: 'Tuesday',
  //     symbol: 'T',
  //     isSelected: false
  //   },
  //   {
  //     key: 'wed',
  //     title: 'Wednesday',
  //     symbol: 'W',
  //     isSelected: false
  //   },
  //   {
  //     key: 'thu',
  //     title: 'Thursday',
  //     symbol: 'T',
  //     isSelected: false
  //   },
  //   {
  //     key: 'fri',
  //     title: 'Friday',
  //     symbol: 'F',
  //     isSelected: false
  //   }
  // ]
  // const defaultEndingOccurrencesNumber = 13
  // const defaultRecurrence = {
  //   startDate: new Date(),
  //   endDate: new Date(),
  //   isAllDay: false,
  //   frequency: 'weekly',
  //   numberOfRepetitions: 1,
  //   weekDaysRepetition: DEFAULT_WEEK_DAYS,
  //   monthlyRepetition: '',
  //   endingCondition: 'never',
  //   endingOccurrencesNumber: defaultEndingOccurrencesNumber
  // }
  // const [recurrence, setRecurrence] = useState<RecurrenceType>(
  //   value
  // )

  useEffect(() => {
    onChange(recurrence)
  }, [recurrence])

  const onFieldChange = (key: string, value: any) => {
    setRecurrence({
      ...recurrence,
      [key]: value
    })
  }

  const onStartDateChange = (date: Date) => {
    onFieldChange('startDate', date)
    // setRecurrence({
    //   ...recurrence,
    //   startDate: date
    // })
    // setEndingDate(date)
  }
  const onEndDateChange = (date: Date) => {
    onFieldChange('endDate', date)
  }

  const onNumberOfRepetitionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    onFieldChange('numberOfRepetitions', parseInt(event.target.value))
  }
  const onFrequencyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onFieldChange('frequency', event.target.value)
  }

  const onEndingConditionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    onFieldChange('endingCondition', event.target.value)
  }

  const onOccurrencesNumberEndingChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    onFieldChange('endingOccurrencesNumber', parseInt(event.target.value))
  }

  const onAllDayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onFieldChange('isAllDay', event.target.checked)
  }
  const handleDayClicked = (day: RecurrenceDay) => {
    const newDaysList: RecurrenceDay[] = recurrence.weekDaysRepetition.map(
      (d) => {
        // if (d.key === day.key) {
        //   d.isSelected = !d.isSelected
        // }
        return d
      }
    )
    onFieldChange('weekDaysRepetition', newDaysList)
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
            <KeyboardDatePicker
              disableToolbar
              variant='inline'
              format='MM/dd/yyyy'
              margin='normal'
              id='start-date'
              label='Start'
              value={recurrence.startDate}
              onChange={onStartDateChange}
              disablePast
              KeyboardButtonProps={{
                'aria-label': 'change date'
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='frequency-option-select'
              select
              value={recurrence.frequency}
              onChange={onFrequencyChange}
              label='Frequency'
            >
              {FREQUENCY_OPTIONS.map((frequency) => (
                <MenuItem key={frequency.key} value={frequency.key}>
                  {frequency.title}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          {recurrence.frequency !== 'none' && (
            <Grid item xs={12}>
              <FormControl variant='outlined'>
                <OutlinedInput
                  id='number-of-repetition'
                  type='number'
                  value={recurrence.numberOfRepetitions}
                  onChange={onNumberOfRepetitionChange}
                  endAdornment={
                    <InputAdornment position='end'>week(s)</InputAdornment>
                  }
                  aria-describedby='outlined-weight-helper-text'
                  inputProps={{
                    'aria-label': 'weight',
                    min: 1,
                    max: 1000,
                    'decimal-separator': 'false'
                  }}
                  labelWidth={0}
                />
              </FormControl>
            </Grid>
          )}

          {recurrence.frequency === 'weekly' && (
            <Fade in={recurrence.frequency === 'weekly'}>
              <Grid item sm={12}>
                {
                  // TODO: Clickable buttons to select, multi-select
                  recurrence.weekDaysRepetition.map((day) => (
                    <Tooltip key={`${day.key}-tooltip`} title={day.title} arrow>
                      <Button
                        key={`${day.key}-btn`}
                        // variant={day.isSelected ? 'contained' : 'outlined'}
                        color='primary'
                        onClick={() => handleDayClicked(day)}
                      >
                        {day.symbol}
                      </Button>
                    </Tooltip>
                  ))
                }
              </Grid>
            </Fade>
          )}

          <Grid item sm={12}>
            <FormControl component='fieldset'>
              <FormLabel component='legend'>Ends</FormLabel>
              <RadioGroup
                aria-label='ends'
                name='ends'
                value={recurrence.endingCondition}
                onChange={onEndingConditionChange}
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
                      value='never'
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
                      value='on'
                      control={<Radio color='primary' />}
                      label='On'
                    />
                  </Grid>
                  <Grid item sm={6}>
                    <KeyboardDatePicker
                      disableToolbar
                      variant='inline'
                      format='MM/dd/yyyy'
                      margin='normal'
                      id='end-date'
                      label='End'
                      value={recurrence.endDate}
                      onChange={onEndDateChange}
                      disablePast
                      minDate={recurrence.startDate}
                      KeyboardButtonProps={{
                        'aria-label': 'change date'
                      }}
                      disabled={recurrence.endingCondition !== 'on'}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={1}>
                  <Grid item sm={6} container alignItems='flex-start'>
                    <FormControlLabel
                      value='after'
                      control={<Radio color='primary' />}
                      label='After'
                    />
                  </Grid>
                  <Grid item sm={6}>
                    <FormControl variant='outlined'>
                      <OutlinedInput
                        id='outlined-adornment-weight'
                        type='number'
                        value={recurrence.endingOccurrencesNumber}
                        onChange={onOccurrencesNumberEndingChange}
                        endAdornment={
                          <InputAdornment position='end'>
                            occurrences
                          </InputAdornment>
                        }
                        aria-describedby='outlined-weight-helper-text'
                        inputProps={{
                          'aria-label': 'weight',
                          min: 1,
                          max: 1000,
                          'decimal-separator': 'false'
                        }}
                        labelWidth={0}
                        disabled={recurrence.endingCondition !== 'after'}
                      />
                    </FormControl>
                  </Grid>
                </Grid>
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item sm={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={recurrence.isAllDay}
                  onChange={onAllDayChange}
                  name='all-day'
                  color='primary'
                />
              }
              label='All day'
              labelPlacement='top'
            />
            <KeyboardTimePicker
              margin='normal'
              id='start-time'
              label='Start'
              value={recurrence.startDate}
              onChange={onStartDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change time'
              }}
              disabled={recurrence.isAllDay}
            />
            <KeyboardTimePicker
              margin='normal'
              id='end-time'
              label='End'
              value={recurrence.endDate}
              onChange={onEndDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change time'
              }}
              disabled={recurrence.isAllDay}
            />
          </Grid>
        </Grid>
      </MuiPickersUtilsProvider>
    </div>
  )
}
