## TODO

- Documentation like material ui
- keyboard navigation
- storybook
- useReducer/context?
- styling option

## Questions
https://www.notion.so/Questions-1a4582c4f9a44b8eaaa6adf48991364d

- Nullable values? what should be default values?
- **how to clear values**
- Grids issues & some components styling [radios, inlines, selects]
- controlled vs uncontrolled
- buttons style
- when deleting numeric input => nan value error

# react-recurrence

> This package is responsible of providing the recurrence functionality. For example, if there's an event and you need to specify how frequent it will be repeated along with the start and end conditions, this component will do the job!


[![NPM](https://img.shields.io/npm/v/react-recurrence.svg)](https://www.npmjs.com/package/react-recurrence) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-recurrence
```
## Design Document
https://www.notion.so/Design-Document-df584a50ba5e47d58e9bf7850383972a

## Usage

```tsx
import React, { Component } from 'react'

import {Recurrence} from 'react-recurrence'
import 'react-recurrence/dist/index.css'

const App = () => {

    const defaultRecurrence = {
        startDate: new Date(),
        endDate: new Date(),
        isAllDay: false,
        frequency: 'weekly',
        numberOfRepetitions: 1,
        weekDaysRepetition: [],
        endingCondition: 'never',
        endingOccurrencesNumber: 10
      }
      const [recurrence, setRecurrence] = useState<RecurrenceType>(
        defaultRecurrence
      )
    
      const handleRecurrenceChange = (newRecurrence: RecurrenceType) => {
        setRecurrence(newRecurrence)
      }
    
      return <Recurrence
        recurrence={recurrence}
        onChange={handleRecurrenceChange}
      />
}
```
##To run Locally
- npm run start
- cd example -> npm run start

## License

MIT © [ziadadeela](https://github.com/ziadadeela)
