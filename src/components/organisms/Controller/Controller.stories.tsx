// react
import React from 'react'
// module
import { Story, Meta } from '@storybook/react'
// components
import { Controller } from './Controller'

export default {
  title: 'organisms/Controller',
  component: Controller,
  argTypes: {
    children: { control: 'text' }
  }
} as Meta

const Template: Story = (args) => <Controller {...args} />

export const Default = Template.bind({})
Default.args = {}
