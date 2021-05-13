import React from 'react'
import { Recurrence } from '../index'
import { Meta, Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { EndingConditionType, FrequencyType } from '../types'
import { defaultStoryRecurrence } from './constants'
import { RecurrenceProps } from '../Recurrence'

export default {
  title: 'General/Recurrence',
  component: Recurrence
} as Meta

const Template: Story<RecurrenceProps> = (args) => (
  <Recurrence {...args} onChange={action('Field changed')} />
)

export const Empty = Template.bind({})
Empty.args = {
  recurrence: defaultStoryRecurrence
}

export const NoFrequency = Template.bind({})
NoFrequency.args = {
  recurrence: {
    ...defaultStoryRecurrence,
    frequency: FrequencyType.None
  }
}

export const hourlyFrequency = Template.bind({})
hourlyFrequency.args = {
  recurrence: {
    ...defaultStoryRecurrence,
    frequency: FrequencyType.Hourly
  }
}

export const DailyFrequency = Template.bind({})
DailyFrequency.args = {
  recurrence: {
    ...defaultStoryRecurrence,
    frequency: FrequencyType.Daily
  }
}

export const WeeklyFrequency = Template.bind({})
WeeklyFrequency.args = {
  recurrence: {
    ...defaultStoryRecurrence,
    frequency: FrequencyType.Weekly
  }
}

export const WeeklyFrequencyWithDaysSelected = Template.bind({})
WeeklyFrequencyWithDaysSelected.args = {
  recurrence: {
    ...defaultStoryRecurrence,
    frequency: FrequencyType.Weekly,
    weekDaysRepetition: [0, 1, 2]
  }
}

export const MonthlyFrequency = Template.bind({})
MonthlyFrequency.args = {
  recurrence: {
    ...defaultStoryRecurrence,
    frequency: FrequencyType.Monthly
  }
}

export const AnnuallyFrequency = Template.bind({})
AnnuallyFrequency.args = {
  recurrence: {
    ...defaultStoryRecurrence,
    frequency: FrequencyType.Annually
  }
}

export const RecurrenceEndsAtSpecificDate = Template.bind({})
RecurrenceEndsAtSpecificDate.args = {
  recurrence: {
    ...defaultStoryRecurrence,
    frequency: FrequencyType.Monthly,
    endingCondition: EndingConditionType.EndDate,
    endDate: new Date()
  }
}

const today = new Date()
const plusFiveDays = new Date(today)
plusFiveDays.setDate(today.getDate() + 5)
export const RecurrenceEndsAtSpecificDateWithValidation = Template.bind({})
RecurrenceEndsAtSpecificDateWithValidation.args = {
  recurrence: {
    ...defaultStoryRecurrence,
    frequency: FrequencyType.Monthly,
    endingCondition: EndingConditionType.EndDate,
    startDate: plusFiveDays,
    endDate: today
  }
}

export const RecurrenceEndsAfterSpecificNumberOfOccurrences = Template.bind({})
RecurrenceEndsAfterSpecificNumberOfOccurrences.args = {
  recurrence: {
    ...defaultStoryRecurrence,
    frequency: FrequencyType.Monthly,
    endingCondition: EndingConditionType.OccurrencesNumber,
    endingOccurrencesNumber: 5
  }
}

export const AllDay = Template.bind({})
AllDay.args = {
  recurrence: {
    ...defaultStoryRecurrence,
    isAllDay: true
  }
}

export const WithStartAndEndTime = Template.bind({})
WithStartAndEndTime.args = {
  recurrence: {
    ...defaultStoryRecurrence,
    startTime: new Date(0, 0, 0, 5, 30),
    endTime: new Date(0, 0, 0, 6, 30)
  }
}
