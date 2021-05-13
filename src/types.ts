export enum EndingConditionType {
  None = 'none',
  EndDate = 'end_date',
  OccurrencesNumber = 'occurrences_number'
}

export enum FrequencyType {
  None = 'none',
  Hourly = 'hourly',
  Daily = 'daily',
  Weekly = 'weekly',
  Monthly = 'monthly',
  Annually = 'annually'
}

export interface RecurrenceType {
  startDate: Date
  frequency: FrequencyType
  numberOfRepetitions?: number
  weekDaysRepetition: Array<number>
  endingCondition: EndingConditionType
  endingOccurrencesNumber?: number
  endDate?: Date
  isAllDay: boolean
  startTime?: Date
  endTime?: Date
}

export interface RecurrenceDay {
  key: number
  title: string
  symbol: string
}

export interface Option {
  key: string
  title: string
}
