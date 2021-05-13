import { Meta, Story } from '@storybook/react'
import React from 'react'
import Recurrence from '../../index'
import RecurrenceProvider from '../RecurrenceProvider'
import { action } from '@storybook/addon-actions'
import { defaultStoryRecurrence } from '../../stories/constants'
import StartDateSelector from './StartDateSelector'

export default {
  title: 'Internals/StartDateSelector',
  component: Recurrence
} as Meta

const Template: Story = (args) => <StartDateSelector {...args} />

export const EmptyStartDate = Template.bind({})
EmptyStartDate.decorators = [
  (Story) => (
    <RecurrenceProvider
      recurrence={{
        ...defaultStoryRecurrence,
        startDate: null
      }}
      onFieldChange={action('field changed')}
      onFieldsChange={action('fields changed')}
    >
      <Story />
    </RecurrenceProvider>
  )
]

export const StartDateChosen = Template.bind({})
StartDateChosen.decorators = [
  (Story) => (
    <RecurrenceProvider
      recurrence={{
        ...defaultStoryRecurrence,
        startDate: new Date()
      }}
      onFieldChange={action('field changed')}
      onFieldsChange={action('fields changed')}
    >
      <Story />
    </RecurrenceProvider>
  )
]

export const StartDateWithValidation = Template.bind({})
StartDateWithValidation.args = {
  recurrence: {
    ...defaultStoryRecurrence,
    startDate: new Date(0, 0, 0)
  }
}
