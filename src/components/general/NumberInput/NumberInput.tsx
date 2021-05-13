import * as React from 'react'
import OutlinedInput from '@material-ui/core/OutlinedInput/OutlinedInput'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import { InputBaseProps, withStyles } from '@material-ui/core'
import styles from './styles'

type NumberInputProps = Omit<InputBaseProps, 'onChange'> & {
  name: string
  label?: string
  value?: number
  onChange: (value: number) => void
  adornmentLabel?: string
  min?: number
  max?: number
}

const NumberInput = ({
  name,
  label = '',
  value = 0,
  onChange = () => {},
  disabled = false,
  adornmentLabel = '',
  min = 1,
  max = 1000,
  ...others
}: NumberInputProps) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value)
    if (isNaN(value)) return
    onChange(value)
  }
  return (
    <FormControl variant='outlined'>
      <OutlinedInput
        name={name}
        label={label}
        type='number'
        value={value}
        onChange={handleOnChange}
        disabled={disabled}
        endAdornment={
          <InputAdornment position='end'>{adornmentLabel}</InputAdornment>
        }
        aria-describedby='outlined-weight-helper-text'
        inputProps={{
          'aria-label': 'weight',
          min: min,
          max: max,
          'decimal-separator': 'false'
        }}
        labelWidth={0}
        {...others}
      />
    </FormControl>
  )
}
export default withStyles(styles)(NumberInput)
