// react
import React from 'react'
// module
import { Story, Meta } from '@storybook/react'
// components
import { SpineWebPlayer } from './SpineWebPlayer'

export default {
  title: 'organisms/SpineWebPlayer',
  component: SpineWebPlayer,
  argTypes: {
    children: { control: 'text' }
  }
} as Meta

const Template: Story = (args) => <SpineWebPlayer {...args} />

export const Default = Template.bind({})
Default.args = {}
