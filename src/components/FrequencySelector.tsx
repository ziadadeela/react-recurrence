import * as React from 'react'
import { Option } from '../types'
import { WeekDaysSelector } from './WeekDaysSelector'
import Grid from '@material-ui/core/Grid'
import Fade from '@material-ui/core/Fade'
import { DropDown } from './general/DropDown'
import { NumberInput } from './general/NumberInput'

interface FrequencySelectorProps {
  frequency: string
  numberOfRepetitions?: number
  weekDaysRepetition: Array<number>
  onFrequencyChange: (frequency: string) => void
  onNumberOfRepetitionsChange: (numberOfRepetitions: number) => void
  onWeekDaysChange: (weekDays: Array<number>) => void
}
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
  }
]
export const FrequencySelector = ({
  frequency,
  numberOfRepetitions,
  weekDaysRepetition,
  onFrequencyChange,
  onNumberOfRepetitionsChange,
  onWeekDaysChange
}: FrequencySelectorProps) => {
  const handleFrequencyChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    onFrequencyChange(event.target.value)
  }

  const getFrequencyLabel = () => {
    switch (frequency) {
      case 'hourly':
        return 'hour'
      case 'daily':
        return 'day'
      case 'weekly':
        return 'week'
      case 'monthly':
        return 'month'
      case 'annually':
        return 'year'
      default:
        return ''
    }
  }
  const getRepetitionsLabelByFrequency = () => {
    const frequencyLabel = getFrequencyLabel()
    if (frequencyLabel === '') {
      return ''
    }
    return `${frequencyLabel}(s)`
  }
  return (
    <div>
      <Grid item xs={12}>
        <DropDown
          name='frequency'
          value={frequency}
          onChange={handleFrequencyChange}
          label='Frequency'
          options={FREQUENCY_OPTIONS}
        />
      </Grid>
      {frequency !== 'none' && (
        <Grid item xs={12}>
          <NumberInput
            name='number-of-repetition'
            value={numberOfRepetitions}
            onChange={onNumberOfRepetitionsChange}
            adornmentLabel={getRepetitionsLabelByFrequency()}
          />
        </Grid>
      )}

      {frequency === 'weekly' && (
        <Fade in={frequency === 'weekly'}>
          <Grid item sm={12}>
            <WeekDaysSelector
              weekDaysRepetition={weekDaysRepetition}
              onDayClicked={onWeekDaysChange}
            />
          </Grid>
        </Fade>
      )}
    </div>
  )
}
