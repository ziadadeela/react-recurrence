import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import React from 'react'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: ['General', 'Internals',],
    },
  },
}
export const decorators = [
  (Story) => (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Story />
    </MuiPickersUtilsProvider>
  ),
];
