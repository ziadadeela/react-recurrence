import {
  KeyboardDatePicker,
  KeyboardDatePickerProps
} from '@material-ui/pickers'
import * as React from 'react'
import { withStyles } from '@material-ui/core'
import styles from './styles'

const DEFAULT_DATE_FORMAT = 'MM/dd/yyyy'

const DatePicker = ({
  name,
  label,
  value,
  onChange = () => {},
  disabled = false,
  disablePast = true,
  variant = 'inline',
  margin = 'normal',
  ...props
}: KeyboardDatePickerProps) => {
  return (
    <KeyboardDatePicker
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      disableToolbar
      variant={variant}
      format={DEFAULT_DATE_FORMAT}
      margin={margin}
      disablePast={disablePast}
      disabled={disabled}
      {...props}
    />
  )
}
export default withStyles(styles)(DatePicker)
