import * as React from 'react'
import { MenuItem } from '@material-ui/core'
import TextField from '@material-ui/core/TextField/TextField'
import { Option } from '../../types'

// TODO: is this needed to assign default values?
interface DropDownProps {
  name: string
  label: string
  value: any // TODO: is it correct?
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  options: Array<Option>
}

export const DropDown = ({
  name,
  label,
  value,
  onChange = () => {},
  options = []
}: DropDownProps) => {
  return (
    <TextField
      name={name}
      select
      value={value}
      onChange={onChange}
      label={label}
    >
      {options.map((option) => (
        <MenuItem key={option.key} value={option.key}>
          {option.title}
        </MenuItem>
      ))}
    </TextField>
  )
}
