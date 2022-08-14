// react
import React from 'react'
// module
import { Story, Meta } from '@storybook/react'
// components
import { Button, ButtonProps } from './Button'

export default {
  title: 'atoms/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' }
  }
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'storybook Button'
}
