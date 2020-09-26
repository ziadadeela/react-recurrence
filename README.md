## TODO

- Add all day checkbox => [DatePicker/DateTimePicker] 
- Documentation like material ui
- keyboard navigation
- storybook
- material ui => dialog/modal: keepMounted = false
- useReducer
- styling option
- provide default values object asa a prop
- add summary of occurrence
## Questions

- Nullable values? what should be default values?
- how to clear values 
- Custom Occurrences component props? how to pass them from parents
- redux/saga required ? NO
- Modal
- Grids issues & some components styling [radios, inlines, selects]
- utc?
- repeat on days

# react-recurrence

> This package is responsible for generating basic recurrences along with custom ones.

[![NPM](https://img.shields.io/npm/v/react-recurrence.svg)](https://www.npmjs.com/package/react-recurrence) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-recurrence
```

## Usage

```tsx
import React, { Component } from 'react'

import MyComponent from 'react-recurrence'
import 'react-recurrence/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

## License

MIT © [ziadadeela](https://github.com/ziadadeela)
