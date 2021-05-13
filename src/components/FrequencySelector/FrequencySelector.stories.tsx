import { Meta, Story } from '@storybook/react'
import React from 'react'
import FrequencySelector from './FrequencySelector'
import Recurrence from '../../index'
import RecurrenceProvider from '../RecurrenceProvider'
import { action } from '@storybook/addon-actions'
import { FrequencyType } from '../../types'
import { defaultStoryRecurrence } from '../../stories/constants'

export default {
  title: 'Internals/FrequencySelector',
  component: Recurrence
} as Meta

const Template: Story = (args) => <FrequencySelector {...args} />

export const DoesNotRepeat = Template.bind({})
DoesNotRepeat.decorators = [
  (Story) => (
    <RecurrenceProvider
      recurrence={{
        ...defaultStoryRecurrence,
        frequency: FrequencyType.None
      }}
      onFieldChange={action('field changed')}
      onFieldsChange={action('fields changed')}
    >
      <Story />
    </RecurrenceProvider>
  )
]

export const Hourly = Template.bind({})
Hourly.decorators = [
  (Story) => (
    <RecurrenceProvider
      recurrence={{
        ...defaultStoryRecurrence,
        frequency: FrequencyType.Hourly
      }}
      onFieldChange={action('field changed')}
      onFieldsChange={action('fields changed')}
    >
      <Story />
    </RecurrenceProvider>
  )
]

export const Daily = Template.bind({})
Daily.decorators = [
  (Story) => (
    <RecurrenceProvider
      recurrence={{
        ...defaultStoryRecurrence,
        frequency: FrequencyType.Daily
      }}
      onFieldChange={action('field changed')}
      onFieldsChange={action('fields changed')}
    >
      <Story />
    </RecurrenceProvider>
  )
]

export const Weekly = Template.bind({})
Weekly.decorators = [
  (Story) => (
    <RecurrenceProvider
      recurrence={{
        ...defaultStoryRecurrence,
        frequency: FrequencyType.Weekly
      }}
      onFieldChange={action('field changed')}
      onFieldsChange={action('fields changed')}
    >
      <Story />
    </RecurrenceProvider>
  )
]

export const Monthly = Template.bind({})
Monthly.decorators = [
  (Story) => (
    <RecurrenceProvider
      recurrence={{
        ...defaultStoryRecurrence,
        frequency: FrequencyType.Monthly
      }}
      onFieldChange={action('field changed')}
      onFieldsChange={action('fields changed')}
    >
      <Story />
    </RecurrenceProvider>
  )
]

export const Annually = Template.bind({})
Annually.decorators = [
  (Story) => (
    <RecurrenceProvider
      recurrence={{
        ...defaultStoryRecurrence,
        frequency: FrequencyType.Annually
      }}
      onFieldChange={action('field changed')}
      onFieldsChange={action('fields changed')}
    >
      <Story />
    </RecurrenceProvider>
  )
]
