import * as React from 'react'
import { MenuItem, TextFieldProps, withStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField/TextField'
import { Option } from '../../../types'
import styles from './styles'

type DropDownProps = TextFieldProps & { options: Array<Option> }

const DropDown = ({
  name,
  label,
  value,
  onChange = () => {},
  options = [],
  ...others
}: DropDownProps) => {
  return (
    <TextField
      name={name}
      select
      value={value}
      onChange={onChange}
      label={label}
      {...others}
    >
      {options.map((option) => (
        <MenuItem key={option.key} value={option.key}>
          {option.title}
        </MenuItem>
      ))}
    </TextField>
  )
}
export default withStyles(styles)(DropDown)
