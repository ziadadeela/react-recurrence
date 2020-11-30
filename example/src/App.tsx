import React, { useState } from 'react'

import { Recurrence } from 'react-recurrence'
import 'react-recurrence/dist/index.css'
import { RecurrenceType } from '../../src/types'

const App = () => {
  const defaultEndingOccurrencesNumber = 13


  const defaultRecurrence = {
    startDate: new Date(),
    endDate: new Date(),
    isAllDay: false,
    frequency: 'weekly',
    numberOfRepetitions: 1,
    weekDaysRepetition: [],
    endingCondition: 'never',
    endingOccurrencesNumber: defaultEndingOccurrencesNumber
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

export default App
