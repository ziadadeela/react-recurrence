import * as React from 'react'
import styles from './styles.module.css'
import { Grid } from '@material-ui/core'
import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker
} from '@material-ui/pickers'
import MenuItem from '@material-ui/core/MenuItem'
import DateFnsUtils from '@date-io/date-fns'
import { CustomRecurrence } from './components/CustomRecurrence'
import Modal from '@material-ui/core/Modal'
import Fade from '@material-ui/core/Fade'
import Backdrop from '@material-ui/core/Backdrop'
import { useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField/TextField'

import { CustomRecurrenceType } from './types'

interface Props {
  startDate: Date
  endDate: Date
  frequency: string
  onStartDateChange: (date: Date) => void
  onEndDateChange: (date: Date) => void
  onFrequencyChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Recurrence = ({
  startDate,
  endDate,
  frequency = 'none',
  onStartDateChange,
  onEndDateChange,
  onFrequencyChange
}: Props) => {
  const FREQUENCY_OPTIONS = {
    none: 'Does not repeat',
    daily: 'Daily',
    weekly: 'Weekly',
    monthly: 'Monthly',
    annually: 'Annually',
    every_weekday: 'Every weekday (Monday to Friday)',
    custom: 'Custom'
  }
  const defaultCustomRecurrence = {
    numberOfRepetition: 1,
    repeatOption: 'week',
    weekDaysRepetition: [],
    monthlyRepetition: '',
    endingCondition: 'never',
    endingDate: new Date(),
    endingOccurrencesNumber: 13
  }
  const [customRecurrence, setCustomRecurrenceType] = useState<
    CustomRecurrenceType
  >(defaultCustomRecurrence)

  const [open, setOpen] = React.useState(frequency === 'custom')
  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const handleOnFrequencyChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    onFrequencyChange(event)
  }

  const onDoneBtnClick = (customRecurrence: CustomRecurrenceType) => {
    setCustomRecurrenceType(customRecurrence)
  }

  useEffect(() => {
    if (frequency === 'custom') {
      handleOpen()
    } else {
      handleClose()
    }
  }, [frequency])
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
            <KeyboardDateTimePicker
              disableToolbar
              variant='inline'
              format='yyyy/MM/dd HH:mm'
              margin='normal'
              id='start_date'
              name='start_date'
              label='Start Date'
              value={startDate}
              onChange={onStartDateChange}
              disablePast
              KeyboardButtonProps={{
                'aria-label': 'change date'
              }}
            />
            <KeyboardDateTimePicker
              disableToolbar
              variant='inline'
              format='yyyy/MM/dd HH:mm'
              margin='normal'
              id='end_date'
              name='end_date'
              label='End Date'
              value={endDate}
              onChange={onEndDateChange}
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
              value={frequency}
              onChange={handleOnFrequencyChange}
              label='Frequency'
            >
              {Object.entries(FREQUENCY_OPTIONS).map(([key, value]) => (
                <MenuItem key={key} value={key}>
                  {value}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <CustomRecurrence
          customRecurrence={customRecurrence}
          onDoneBtnClick={onDoneBtnClick}
        />

        <Modal
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          aria-labelledby='transition-modal-title'
          aria-describedby='transition-modal-description'
          open={false}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open}>
            <div>{/* <CustomRecurrence /> */}</div>
          </Fade>
        </Modal>
      </MuiPickersUtilsProvider>
    </div>
  )
}
