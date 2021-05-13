import { Meta, Story } from '@storybook/react'
import React from 'react'
import WeekDaysSelector, { WeekDaysSelectorProps } from './WeekDaysSelector'
import Recurrence from '../../index'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Internals/WeekDaysSelector',
  component: Recurrence
} as Meta

const Template: Story<WeekDaysSelectorProps> = (args) => (
  <WeekDaysSelector {...args} onDayClicked={action('Day clicked')} />
)

export const Empty = Template.bind({})
Empty.args = {}

export const DaysSelected = Template.bind({})
DaysSelected.args = {
  weekDaysRepetition: [0, 1, 3]
}
