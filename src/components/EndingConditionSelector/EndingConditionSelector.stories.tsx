import { Meta, Story } from '@storybook/react'
import React from 'react'
import Recurrence from '../../index'
import RecurrenceProvider from '../RecurrenceProvider'
import { action } from '@storybook/addon-actions'
import { EndingConditionType } from '../../types'
import { defaultStoryRecurrence } from '../../stories/constants'
import EndingConditionSelector from './EndingConditionSelector'

export default {
  title: 'Internals/EndingConditionSelector',
  component: Recurrence
} as Meta

const Template: Story = (args) => <EndingConditionSelector {...args} />

export const NoEndingCondition = Template.bind({})
NoEndingCondition.decorators = [
  (Story) => (
    <RecurrenceProvider
      recurrence={{
        ...defaultStoryRecurrence,
        endingCondition: EndingConditionType.None
      }}
      onFieldChange={action('field changed')}
      onFieldsChange={action('fields changed')}
    >
      <Story />
    </RecurrenceProvider>
  )
]

export const EndingDate = Template.bind({})
EndingDate.decorators = [
  (Story) => (
    <RecurrenceProvider
      recurrence={{
        ...defaultStoryRecurrence,
        endingCondition: EndingConditionType.EndDate,
        endDate: new Date()
      }}
      onFieldChange={action('field changed')}
      onFieldsChange={action('fields changed')}
    >
      <Story />
    </RecurrenceProvider>
  )
]

export const EndingAfterNumberOfOccurences = Template.bind({})
EndingAfterNumberOfOccurences.decorators = [
  (Story) => (
    <RecurrenceProvider
      recurrence={{
        ...defaultStoryRecurrence,
        endingCondition: EndingConditionType.OccurrencesNumber,
        endingOccurrencesNumber: 10
      }}
      onFieldChange={action('field changed')}
      onFieldsChange={action('fields changed')}
    >
      <Story />
    </RecurrenceProvider>
  )
]
