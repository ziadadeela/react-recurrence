import * as React from 'react'
import { FrequencyType, Option } from '../../types'
import Grid from '@material-ui/core/Grid'
import Fade from '@material-ui/core/Fade'
import DropDown from '../general/DropDown'
import NumberInput from '../general/NumberInput'
import WeekDaysSelector from '../WeekDaysSelector'
import { WithStyles, withStyles } from '@material-ui/core'
import styles from './styles'
import { FunctionComponent, useContext, useEffect } from 'react'
import RecurrenceContext from '../RecurrenceContext'

const FREQUENCY_OPTIONS: Option[] = [
  {
    key: FrequencyType.None,
    title: 'Does not repeat'
  },
  {
    key: FrequencyType.Hourly,
    title: 'Hourly'
  },
  {
    key: FrequencyType.Daily,
    title: 'Daily'
  },
  {
    key: FrequencyType.Weekly,
    title: 'Weekly'
  },
  {
    key: FrequencyType.Monthly,
    title: 'Monthly'
  },
  {
    key: FrequencyType.Annually,
    title: 'Annually'
  }
]
const FrequencySelector: FunctionComponent<WithStyles<typeof styles>> = ({
  classes
}) => {
  const { recurrence, onFieldChange, onFieldsChange } = useContext(
    RecurrenceContext
  )

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
      case FrequencyType.Hourly:
        return 'hour'
      case FrequencyType.Daily:
        return 'day'
      case FrequencyType.Weekly:
        return 'week'
      case FrequencyType.Monthly:
        return 'month'
      case FrequencyType.Annually:
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

  useEffect(() => {
    let toClear = {}
    if (recurrence.frequency !== FrequencyType.Weekly) {
      toClear = {
        weekDaysRepetition: []
      }
    }
    if (recurrence.frequency === FrequencyType.None) {
      toClear = {
        ...toClear,
        numberOfRepetitions: undefined
      }
      onFieldsChange(toClear)
    }
  }, [recurrence.frequency])

  return (
    <div>
      <Grid item xs={12} className={classes.frequency}>
        <DropDown
          name='frequency'
          value={recurrence.frequency}
          onChange={handleFrequencyChange}
          label='Frequency'
          options={FREQUENCY_OPTIONS}
          className={classes.dropdown}
          data-testid='recurrence-frequency'
        />
      </Grid>
      {recurrence.frequency !== FrequencyType.None && (
        <Grid item xs={12}>
          <NumberInput
            name='number-of-repetition'
            value={recurrence.numberOfRepetitions}
            onChange={handleNumberOfRepetitionChange}
            adornmentLabel={getRepetitionsLabelByFrequency()}
            className={classes.numberOfRepetitionsInput}
            data-testid='recurrence-number-of-repetitions'
          />
        </Grid>
      )}

      {recurrence.frequency === FrequencyType.Weekly && (
        <Fade in={recurrence.frequency === FrequencyType.Weekly}>
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
