// react
import React from 'react'
// module
import { Story, Meta } from '@storybook/react'
// components
import Footer from './Footer'

export default {
  title: 'organisms/Footer',
  component: Footer,
  argTypes: {
    children: { control: 'text' }
  }
} as Meta

const Template: Story = (args) => <Footer {...args} />

export const Default = Template.bind({})
Default.args = {}
