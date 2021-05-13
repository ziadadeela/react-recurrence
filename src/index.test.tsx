import { Recurrence } from './index'
import React from 'react'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { render } from '@testing-library/react'
import { EndingConditionType, FrequencyType, RecurrenceType } from './types'
import '@testing-library/jest-dom/extend-expect'

const defaultRecurrence: RecurrenceType = {
  startDate: new Date(),
  frequency: FrequencyType.None,
  numberOfRepetitions: undefined,
  weekDaysRepetition: [],
  endingCondition: EndingConditionType.None,
  endDate: null,
  endingOccurrencesNumber: undefined,
  isAllDay: null,
  startTime: null,
  endTime: null
}

const renderWithContext = (recurrence: RecurrenceType) => {
  return render(
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Recurrence recurrence={recurrence} onChange={() => {}} />
    </MuiPickersUtilsProvider>
  )
}

describe('FrequencySelector', () => {
  test('Hourly recurrence should have number of repetitions visible', () => {
    const recurrence = {
      ...defaultRecurrence,
      frequency: FrequencyType.Hourly
    }
    const { queryByTestId } = renderWithContext(recurrence)
    expect(queryByTestId('recurrence-number-of-repetitions')).toBeTruthy()
  })

  test('Hourly recurrence should have weekdays selector invisible', () => {
    const recurrence = {
      ...defaultRecurrence,
      frequency: FrequencyType.Hourly
    }
    const { queryByTestId } = renderWithContext(recurrence)
    expect(queryByTestId('recurrence-week-days-selector')).toBeFalsy()
  })

  test('Weekly recurrence should have weekdays selector visible', () => {
    const recurrence = {
      ...defaultRecurrence,
      frequency: FrequencyType.Weekly
    }
    const { queryByTestId } = renderWithContext(recurrence)
    expect(queryByTestId('recurrence-week-days-selector')).toBeTruthy()
  })
})

describe('EndingConditionSelector', () => {
  test('No ending condition should disable end date and occurrences number input', () => {
    const recurrence = {
      ...defaultRecurrence,
      endingCondition: EndingConditionType.None
    }
    const { getByTestId } = renderWithContext(recurrence)
    expect(getByTestId('recurrence-ending-condition-end-date')).toBeDisabled()
    expect(
      getByTestId('recurrence-ending-condition-occurrences-number')
    ).toBeDisabled()
  })

  test('End Date ending condition should enable end date and disable occurrences number input', () => {
    const recurrence = {
      ...defaultRecurrence,
      endingCondition: EndingConditionType.EndDate
    }
    const { getByTestId } = renderWithContext(recurrence)
    expect(getByTestId('recurrence-ending-condition-end-date')).toBeEnabled()
    expect(
      getByTestId('recurrence-ending-condition-occurrences-number')
    ).toBeDisabled()
  })

  test('Number of occurrences ending condition should disable end date and enable occurrences number input', () => {
    const recurrence = {
      ...defaultRecurrence,
      endingCondition: EndingConditionType.OccurrencesNumber
    }
    const { getByTestId } = renderWithContext(recurrence)
    expect(getByTestId('recurrence-ending-condition-end-date')).toBeDisabled()
    expect(
      getByTestId('recurrence-ending-condition-occurrences-number')
    ).toBeEnabled()
  })
})

describe('TimeSelector', () => {
  test('Start and End time should be disabled when all day is checked', () => {
    const recurrence = {
      ...defaultRecurrence,
      isAllDay: true
    }
    const { getByTestId } = renderWithContext(recurrence)
    expect(getByTestId('recurrence-start-time')).toBeDisabled()
    expect(getByTestId('recurrence-end-time')).toBeDisabled()
  })

  test('Start and End time should be enabled when all day is unchecked', () => {
    const recurrence = {
      ...defaultRecurrence,
      isAllDay: false
    }
    const { getByTestId } = renderWithContext(recurrence)
    expect(getByTestId('recurrence-start-time')).toBeEnabled()
    expect(getByTestId('recurrence-end-time')).toBeEnabled()
  })
})
