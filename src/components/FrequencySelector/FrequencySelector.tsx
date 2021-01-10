import * as React from 'react'
import { FrequencyType, Option } from '../../types'
import Grid from '@material-ui/core/Grid'
import Fade from '@material-ui/core/Fade'
import DropDown from '../general/DropDown'
import NumberInput from '../general/NumberInput'
import WeekDaysSelector from '../WeekDaysSelector'
import { withStyles } from '@material-ui/core'
import styles from './styles'
import { useContext } from 'react'
import RecurrenceContext from '../RecurrenceContext'

interface FrequencySelectorProps {}
const FREQUENCY_OPTIONS: Option[] = [
  {
    key: FrequencyType.NONE,
    title: 'Does not repeat'
  },
  {
    key: FrequencyType.HOURLY,
    title: 'Hourly'
  },
  {
    key: FrequencyType.DAILY,
    title: 'Daily'
  },
  {
    key: FrequencyType.WEEKLY,
    title: 'Weekly'
  },
  {
    key: FrequencyType.MONTHLY,
    title: 'Monthly'
  },
  {
    key: FrequencyType.ANNUALLY,
    title: 'Annually'
  }
]
const FrequencySelector = ({}: FrequencySelectorProps) => {
  const { recurrence, onFieldChange } = useContext(RecurrenceContext)

  const handleFrequencyChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    onFieldChange('frequency', event.target.value)
  }
  const handleNumberOfRepetitionChange = (numberOfRepetitions: number) => {
    onFieldChange('numberOfRepetitions', numberOfRepetitions)
  }
  const handleWeekDaysChange = (days: Array<number>) => {
    onFieldChange('weekDaysRepetition', days)
  }

  const getFrequencyLabel = () => {
    switch (recurrence.frequency) {
      case FrequencyType.HOURLY:
        return 'hour'
      case FrequencyType.DAILY:
        return 'day'
      case FrequencyType.WEEKLY:
        return 'week'
      case FrequencyType.MONTHLY:
        return 'month'
      case FrequencyType.ANNUALLY:
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
          value={recurrence.frequency}
          onChange={handleFrequencyChange}
          label='Frequency'
          options={FREQUENCY_OPTIONS}
        />
      </Grid>
      {recurrence.frequency !== FrequencyType.NONE && (
        <Grid item xs={12}>
          <NumberInput
            name='number-of-repetition'
            value={recurrence.numberOfRepetitions}
            onChange={handleNumberOfRepetitionChange}
            adornmentLabel={getRepetitionsLabelByFrequency()}
          />
        </Grid>
      )}

      {recurrence.frequency === FrequencyType.WEEKLY && (
        <Fade in={recurrence.frequency === FrequencyType.WEEKLY}>
          <Grid item sm={12}>
            <WeekDaysSelector
              weekDaysRepetition={recurrence.weekDaysRepetition}
              onDayClicked={handleWeekDaysChange}
            />
          </Grid>
        </Fade>
      )}
    </div>
  )
}
export default withStyles(styles)(FrequencySelector)
