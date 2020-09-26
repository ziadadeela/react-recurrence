export interface CustomRecurrenceType {
  numberOfRepetition: number
  repeatOption: string
  weekDaysRepetition: Array<number>
  monthlyRepetition: string
  endingCondition: string
  endingDate: Date
  endingOccurrencesNumber: number
}
