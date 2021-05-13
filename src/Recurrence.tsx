import * as React from 'react'
import styles from './styles'
import { Grid, WithStyles, withStyles } from '@material-ui/core'
import { RecurrenceType } from './types'
import RecurrenceProvider from './components/RecurrenceProvider'
import StartDateSelector from './components/StartDateSelector/StartDateSelector'
import FrequencySelector from './components/FrequencySelector'
import EndingConditionSelector from './components/EndingConditionSelector'
import TimeSelector from './components/TimeSelector'

export interface RecurrenceProps {
  recurrence: RecurrenceType
  onChange: (recurrence: RecurrenceType) => void
  children?: React.ReactNode
}

const Recurrence = ({
  recurrence,
  onChange,
  classes,
  children
}: RecurrenceProps & WithStyles<typeof styles>) => {
  const handleFieldChange = (key: string, value: any) => {
    const newRecurrence = {
      ...recurrence,
      [key]: value
    }
    onChange(newRecurrence)
  }

  const handleFieldsChange = (object: any) => {
    const newRecurrence = {
      ...recurrence,
      ...object
    }
    onChange(newRecurrence)
  }
  const defaultChildren = (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      spacing={3}
    >
      <Grid item xs={12}>
        <StartDateSelector />
      </Grid>
      <Grid item xs={12}>
        <FrequencySelector />
      </Grid>
      <Grid item sm={12}>
        <EndingConditionSelector />
      </Grid>
      <Grid item sm={12}>
        <TimeSelector />
      </Grid>
    </Grid>
  )

  return (
    <RecurrenceProvider
      recurrence={recurrence}
      onFieldChange={handleFieldChange}
      onFieldsChange={handleFieldsChange}
    >
      <div className={classes.root}>
        {children !== undefined ? children : defaultChildren}
      </div>
    </RecurrenceProvider>
  )
}
export default Object.assign(withStyles(styles)(Recurrence), {
  StartDateSelector: StartDateSelector,
  FrequencySelector: FrequencySelector,
  EndingConditionSelector: EndingConditionSelector,
  TimeSelector: TimeSelector
})
