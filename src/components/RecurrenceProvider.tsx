import React, { FC } from 'react'
import { RecurrenceType } from '../types'
import RecurrenceContext from './RecurrenceContext'

export interface RecurrenceProviderProps {
  recurrence: RecurrenceType
  onFieldChange: (key: string, value: any) => void
}

const RecurrenceProvider: FC<RecurrenceProviderProps> = ({
  recurrence,
  onFieldChange,
  children
}) => {
  return (
    <RecurrenceContext.Provider value={{ recurrence, onFieldChange }}>
      {children}
    </RecurrenceContext.Provider>
  )
}

export default RecurrenceProvider
