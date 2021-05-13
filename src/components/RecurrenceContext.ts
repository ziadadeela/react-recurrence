import React from 'react'
import { EndingConditionType, FrequencyType, RecurrenceType } from '../types'

interface RecurrenceContextType {
  recurrence: RecurrenceType
  onFieldChange: (key: string, value: any) => void
  onFieldsChange: (object: any) => void
}
const today = new Date()
const contextInitValue: RecurrenceContextType = {
  recurrence: {
    startDate: today,
    endDate: today,
    isAllDay: false,
    frequency: FrequencyType.Weekly,
    numberOfRepetitions: 1,
    weekDaysRepetition: [],
    endingCondition: EndingConditionType.None,
    endingOccurrencesNumber: 1,
    startTime: today,
    endTime: today
  },
  onFieldChange: () => {},
  onFieldsChange: () => {}
}

const RecurrenceContext = React.createContext<RecurrenceContextType>(
  contextInitValue
)

export default RecurrenceContext
