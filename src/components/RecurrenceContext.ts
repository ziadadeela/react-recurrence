import React from 'react'
import { EndingCondition, RecurrenceType } from '../types'

interface RecurrenceContextType {
  recurrence: RecurrenceType
  onFieldChange: (key: string, value: any) => void
}

const contextInitValue: RecurrenceContextType = {
  recurrence: {
    startDate: new Date(),
    endDate: new Date(),
    isAllDay: false,
    frequency: 'weekly',
    numberOfRepetitions: 1,
    weekDaysRepetition: [],
    endingCondition: EndingCondition.NONE,
    endingOccurrencesNumber: 1
  },
  onFieldChange: () => {}
}

const RecurrenceContext = React.createContext<RecurrenceContextType>(
  contextInitValue
)

export default RecurrenceContext
