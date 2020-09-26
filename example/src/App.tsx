import React from 'react'

import { Recurrence } from 'react-recurrence'
import 'react-recurrence/dist/index.css'

const App = () => {
  const [startDate, setStartDate] = React.useState<Date>(new Date())
  const [endDate, setEndDate] = React.useState<Date>(new Date())
  const [frequency, setFrequency] = React.useState<string>('')

  const handleStartDateChange = (date: Date) => {
    setStartDate(date)
  }
  const handleEndDateChange = (date: Date) => {
    setEndDate(date)
  }
  const handleFrequencyChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFrequency(event.target.value)
  }
  return <Recurrence startDate={startDate}
                     endDate={endDate}
                     frequency={frequency}
                     onStartDateChange={handleStartDateChange}
                     onEndDateChange={handleEndDateChange}
                     onFrequencyChange={handleFrequencyChange}
  />
}

export default App
