// react
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
// module
import { Story, Meta } from '@storybook/react'
// components
import User from './User'

export default {
  title: 'pages/User',
  component: User,
  argTypes: {}
} as Meta

const Template: Story = (args) => {
  return (
    <MemoryRouter initialEntries={['/', 'user']}>
      <User {...args} />
    </MemoryRouter>
  )
}

export const Default = Template.bind({})
Default.args = {}
