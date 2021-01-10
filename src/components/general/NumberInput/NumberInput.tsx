import * as React from 'react'
import OutlinedInput from '@material-ui/core/OutlinedInput/OutlinedInput'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import { withStyles } from '@material-ui/core'
import styles from './styles'

// TODO: is this needed to assign default values?
interface NumberInputProps {
  name: string
  label?: string
  value?: number // TODO: is it correct?
  onChange: (value: number) => void
  disabled?: boolean
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
  max = 1000
}: NumberInputProps) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: problem when emptying the number field: The specified value "NaN" cannot be parsed, or is out of range
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
      />
    </FormControl>
  )
}
export default withStyles(styles)(NumberInput)
