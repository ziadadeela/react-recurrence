import { EndingConditionType, FrequencyType, RecurrenceType } from '../types'

export const defaultStoryRecurrence: RecurrenceType = {
  startDate: new Date(),
  frequency: FrequencyType.None,
  numberOfRepetitions: null,
  weekDaysRepetition: [],
  endingCondition: EndingConditionType.None,
  endDate: null,
  endingOccurrencesNumber: null,
  isAllDay: null,
  startTime: null,
  endTime: null
}
