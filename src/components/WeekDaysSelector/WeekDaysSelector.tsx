import { RecurrenceDay } from '../../types'
import Tooltip from '@material-ui/core/Tooltip/Tooltip'
import Button from '@material-ui/core/Button'
import * as React from 'react'
import { withStyles, WithStyles } from '@material-ui/core'
import styles from './styles'
import classNames from 'classnames'

export interface WeekDaysSelectorProps {
  weekDaysRepetition: Array<number>
  onDayClicked: (days: Array<number>) => void
}

const DEFAULT_WEEK_DAYS: RecurrenceDay[] = [
  {
    key: 0,
    title: 'Sunday',
    symbol: 'S'
  },
  {
    key: 1,
    title: 'Monday',
    symbol: 'M'
  },
  {
    key: 2,
    title: 'Tuesday',
    symbol: 'T'
  },
  {
    key: 3,
    title: 'Wednesday',
    symbol: 'W'
  },
  {
    key: 4,
    title: 'Thursday',
    symbol: 'T'
  },
  {
    key: 5,
    title: 'Friday',
    symbol: 'F'
  },
  {
    key: 6,
    title: 'Saturday',
    symbol: 'S'
  }
]

const WeekDaysSelector = ({
  classes,
  weekDaysRepetition = [],
  onDayClicked
}: WeekDaysSelectorProps & WithStyles<typeof styles>) => {
  const handleDayClicked = (day: RecurrenceDay) => {
    let newDaysList: Array<number> = weekDaysRepetition
    if (newDaysList.includes(day.key)) {
      newDaysList = newDaysList.filter((d) => d !== day.key)
    } else {
      newDaysList.push(day.key)
    }
    onDayClicked(newDaysList)
  }
  return (
    <div
      className={classes.daysContainer}
      data-testid='recurrence-week-days-selector'
    >
      {DEFAULT_WEEK_DAYS.map((day) => (
        <Tooltip
          key={`${day.title}-${day.key}-tooltip`}
          title={day.title}
          arrow
        >
          <Button
            className={classNames(classes.dayButton, {
              [classes.selected]: weekDaysRepetition.includes(day.key)
            })}
            key={`${day.key}-btn`}
            onClick={() => handleDayClicked(day)}
            classes={{ label: classes.dayButtonLabel }}
            data-testid={`weekdays-${day.key}`}
          >
            {day.symbol}
          </Button>
        </Tooltip>
      ))}
    </div>
  )
}

export default withStyles(styles)(WeekDaysSelector)
