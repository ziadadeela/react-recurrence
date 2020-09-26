import * as React from 'react'
import { Grid } from '@material-ui/core'
import TextField from '@material-ui/core/TextField/TextField'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel/FormControlLabel'
import Radio from '@material-ui/core/Radio/Radio'
import { KeyboardDatePicker } from '@material-ui/pickers'
import OutlinedInput from '@material-ui/core/OutlinedInput/OutlinedInput'
import InputAdornment from '@material-ui/core/InputAdornment'
import Button from '@material-ui/core/Button'
import { useState } from 'react'
import { CustomRecurrenceType } from '../types'

interface Props {
  customRecurrence: CustomRecurrenceType
  onDoneBtnClick: (customRecurrence: CustomRecurrenceType) => void
}

export const CustomRecurrence = ({
  customRecurrence: defaultCustomRecurrence,
  onDoneBtnClick
}: Props) => {
  const WEEK_DAYS = ['S', 'S', 'M', 'T', 'W', 'T', 'F']
  const REPEAT_EVERY_OPTIONS = {
    day: 'Day',
    week: 'Week',
    month: 'Month',
    year: 'Year'
  }
  const [customRecurrence, setCustomRecurrence] = useState<
    CustomRecurrenceType
  >(defaultCustomRecurrence)

  const onNumberOfRepetitionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCustomRecurrence({
      ...customRecurrence,
      numberOfRepetition: parseInt(event.target.value)
    })
  }
  const onRepeatOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomRecurrence({
      ...customRecurrence,
      repeatOption: event.target.value
    })
    // setRepeatOption(event.target.value)
  }
  const onRepeatMonthlySelectChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCustomRecurrence({
      ...customRecurrence,
      monthlyRepetition: event.target.value
    })
    // setRepeatMonthlyOption(event.target.value)
  }
  const onEndingConditionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCustomRecurrence({
      ...customRecurrence,
      endingCondition: event.target.value
    })
    // setEndingConditionType(event.target.value)
  }
  const onEndingDateChange = (date: Date) => {
    setCustomRecurrence({
      ...customRecurrence,
      endingDate: date
    })
    // setEndingDate(date)
  }
  const onOccurrencesNumberEndingChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCustomRecurrence({
      ...customRecurrence,
      endingOccurrencesNumber: parseInt(event.target.value)
    })
    // setOccurrencesNumberEnding(parseInt(event.target.value))
  }
  return (
    <Grid container spacing={3}>
      <Grid item sm={12}>
        <h4>Custom recurrence</h4>
      </Grid>
      <Grid item sm={12}>
        <TextField
          id='number-of-repetition'
          // label='Repeat every'
          type='number'
          value={customRecurrence.numberOfRepetition}
          onChange={onNumberOfRepetitionChange}
          InputLabelProps={{
            shrink: true
          }}
          InputProps={{
            inputProps: {
              min: 1,
              max: 100,
              'decimal-separator': 'false'
            }
          }}
        />
        <TextField
          id='repeat-option-select'
          // label='Repeat Option'
          select
          value={customRecurrence.repeatOption}
          onChange={onRepeatOptionChange}
        >
          {Object.entries(REPEAT_EVERY_OPTIONS).map(([key, value]) => (
            <MenuItem key={key} value={key}>
              {value}
            </MenuItem>
          ))}
        </TextField>
        {/* TODO: OnChange show */}
      </Grid>
      {customRecurrence.repeatOption === 'week' && (
        <Grid item sm={12}>
          <h4>Repeat on</h4>
          {
            // TODO: Clickable buttons to select, multi-select
            WEEK_DAYS.map((day, index) => (
              <Button
                key={`${day}-${index}-btn`}
                variant='outlined'
                color='primary'
              >
                {day}
              </Button>
            ))
          }
        </Grid>
      )}
      {customRecurrence.repeatOption === 'month' && (
        <Grid item sm={12}>
          <TextField
            id='repeat-monthly-option-select'
            // label='Monthly repeat'
            select
            value={customRecurrence.monthlyRepetition}
            onChange={onRepeatMonthlySelectChange}
          >
            <MenuItem value='monthly_by_day_number'>Monthly on day 12</MenuItem>
            <MenuItem value='monthly_by_day_week'>
              Monthly on second saturday
            </MenuItem>
          </TextField>
        </Grid>
      )}
      <Grid item sm={12}>
        <FormControl component='fieldset'>
          <FormLabel component='legend'>Ends</FormLabel>
          <RadioGroup
            aria-label='ends'
            name='ends'
            value={customRecurrence.endingCondition}
            onChange={onEndingConditionChange}
          >
            <Grid container spacing={1}>
              <Grid item sm={6}>
                <FormControlLabel
                  value='never'
                  control={<Radio color='primary' />}
                  label='Never'
                />
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item sm={6}>
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
                  id='ending-date'
                  label='On'
                  value={customRecurrence.endingDate}
                  onChange={onEndingDateChange}
                  disablePast
                  KeyboardButtonProps={{
                    'aria-label': 'change date'
                  }}
                  disabled={customRecurrence.endingCondition !== 'on'}
                />
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item sm={6}>
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
                    value={customRecurrence.endingOccurrencesNumber}
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
                    disabled={customRecurrence.endingCondition !== 'after'}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item sm={12}>
        <Button key='done-btn' color='primary' onClick={()=>onDoneBtnClick(customRecurrence)}>
          Done
        </Button>
      </Grid>
    </Grid>
  )
}
