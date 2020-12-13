import { RecurrenceDay } from '../../types'
import Tooltip from '@material-ui/core/Tooltip/Tooltip'
import Button from '@material-ui/core/Button'
import * as React from 'react'
import { withStyles, WithStyles } from '@material-ui/core'
import styles from './styles'
import classNames from 'classnames'

interface WeekDaysSelectorProps {
  weekDaysRepetition: Array<number>
  onDayClicked: (days: Array<number>) => void
}

const DEFAULT_WEEK_DAYS: RecurrenceDay[] = [
  {
    // key: 'sun',
    key: 0,
    title: 'Sunday',
    symbol: 'S'
  },
  {
    // key: 'mon',
    key: 1,
    title: 'Monday',
    symbol: 'M'
  },
  {
    // key: 'tue',
    key: 2,
    title: 'Tuesday',
    symbol: 'T'
  },
  {
    // key: 'wed',
    key: 3,
    title: 'Wednesday',
    symbol: 'W'
  },
  {
    // key: 'thu',
    key: 4,
    title: 'Thursday',
    symbol: 'T'
  },
  {
    // key: 'fri',
    key: 5,
    title: 'Friday',
    symbol: 'F'
  },
  {
    // key: 'sat',
    key: 6,
    title: 'Saturday',
    symbol: 'S'
  }
]

const WeekDaysSelector = ({
  classes,
  weekDaysRepetition,
  onDayClicked
}: WeekDaysSelectorProps & WithStyles<typeof styles>) => {
  const handleDayClicked = (day: RecurrenceDay) => {
    // TODO: fix set&unset
    let newDaysList: Array<number> = weekDaysRepetition
    if (newDaysList.includes(day.key)) {
      newDaysList = newDaysList.filter((d) => d !== day.key)
    } else {
      newDaysList.push(day.key)
    }
    onDayClicked(newDaysList)
  }
  return (
    <div className={classes.daysContainer}>
      {
        // TODO: Clickable buttons to select, multi-select
        DEFAULT_WEEK_DAYS.map((day) => (
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
              // variant={
              //   weekDaysRepetition.includes(day.key) ? 'contained' : 'outlined'
              // }
              // color='primary'
              onClick={() => handleDayClicked(day)}
              classes={{ label: classes.dayButtonLabel }}
            >
              {day.symbol}
            </Button>
          </Tooltip>
        ))
      }
    </div>
  )
}

export default withStyles(styles)(WeekDaysSelector)
