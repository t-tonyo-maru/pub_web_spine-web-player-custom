// react
import React from 'react'
// module
import { Story, Meta } from '@storybook/react'
// components
import Header from './Header'

export default {
  title: 'organisms/Header',
  component: Header,
  argTypes: {
    children: { control: 'text' }
  }
} as Meta

const Template: Story = (args) => <Header {...args} />

export const Default = Template.bind({})
Default.args = {}
