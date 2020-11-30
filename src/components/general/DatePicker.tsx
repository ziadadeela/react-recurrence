import {
  KeyboardDatePicker,
  KeyboardDatePickerProps
} from '@material-ui/pickers'
import * as React from 'react'

const DEFAULT_DATE_FORMAT = 'MM/dd/yyyy'

// TODO: is this needed to assign default values?
interface DatePickerProps extends KeyboardDatePickerProps {
  name: string
  label: string
  value: KeyboardDatePickerProps['value']
  onChange: (date: Date) => void
  disabled?: boolean
  disablePast?: boolean
  variant?: KeyboardDatePickerProps['variant']
  margin?: KeyboardDatePickerProps['margin']
}

export const DatePicker = ({
  name,
  label,
  value,
  onChange = () => {},
  disabled = false,
  disablePast = true,
  variant = 'inline',
  margin = 'normal',
  ...props
}: DatePickerProps) => {
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
