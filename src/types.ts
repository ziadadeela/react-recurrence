export interface CustomRecurrenceType {
  numberOfRepetitions: number
  repeatOption: string
  weekDaysRepetition: Array<RecurrenceDay>
  monthlyRepetition: string
  endingCondition: string
  endingDate: Date
  endingOccurrencesNumber: number
}

export interface RecurrenceType {
  startDate: Date
  isAllDay: boolean
  frequency: string
  numberOfRepetitions?: number
  weekDaysRepetition: Array<number>
  endingCondition: string
  endingOccurrencesNumber?: number
  endDate?: Date
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
