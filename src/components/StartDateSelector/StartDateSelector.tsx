import * as React from 'react'
import { WithStyles, withStyles } from '@material-ui/core'
import DatePicker from '../general/DatePicker'
import styles from './styles'
import RecurrenceContext from '../RecurrenceContext'
import { FunctionComponent, useContext } from 'react'

const StartDateSelector: FunctionComponent<WithStyles<typeof styles>> = () => {
  const { recurrence, onFieldChange } = useContext(RecurrenceContext)

  const handleStartDateChange = (date: Date) => {
    onFieldChange('startDate', date)
  }

  return (
    <DatePicker
      name='start-date'
      label='Start'
      value={recurrence.startDate}
      onChange={handleStartDateChange}
      data-testid='recurrence-start-date'
    />
  )
}
export default withStyles(styles)(StartDateSelector)
