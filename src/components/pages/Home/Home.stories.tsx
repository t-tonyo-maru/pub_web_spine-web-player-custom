// react
import React from 'react'
// module
import { Story, Meta } from '@storybook/react'
// components
import Home from './Home'

export default {
  title: 'pages/Home',
  component: Home,
  argTypes: {}
} as Meta

const Template: Story = (args) => <Home {...args} />

export const Default = Template.bind({})
Default.args = {}
