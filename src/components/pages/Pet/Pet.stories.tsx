// react
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
// module
import { Story, Meta } from '@storybook/react'
// components
import Pet from './Pet'

export default {
  title: 'pages/Pet',
  component: Pet,
  argTypes: {}
} as Meta

const Template: Story = (args) => {
  return (
    <MemoryRouter initialEntries={['/', 'pet']}>
      <Pet {...args} />
    </MemoryRouter>
  )
}

export const Default = Template.bind({})
Default.args = {}
