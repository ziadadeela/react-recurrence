import { Meta, Story } from '@storybook/react'
import React from 'react'
import TimeSelector from './TimeSelector'
import Recurrence from '../../index'
import RecurrenceProvider from '../RecurrenceProvider'
import { action } from '@storybook/addon-actions'
import { defaultStoryRecurrence } from '../../stories/constants'

export default {
  title: 'Internals/TimeSelector',
  component: Recurrence
} as Meta

const Template: Story = (args) => <TimeSelector {...args} />

export const AllDay = Template.bind({})
AllDay.decorators = [
  (Story) => (
    <RecurrenceProvider
      recurrence={{
        ...defaultStoryRecurrence,
        isAllDay: true
      }}
      onFieldChange={action('field changed')}
      onFieldsChange={action('fields changed')}
    >
      <Story />
    </RecurrenceProvider>
  )
]

export const WithStartAndEndTime = Template.bind({})
WithStartAndEndTime.decorators = [
  (Story) => (
    <RecurrenceProvider
      recurrence={{
        ...defaultStoryRecurrence,
        isAllDay: false,
        startTime: new Date(),
        endTime: new Date()
      }}
      onFieldChange={action('field changed')}
      onFieldsChange={action('fields changed')}
    >
      <Story />
    </RecurrenceProvider>
  )
]
