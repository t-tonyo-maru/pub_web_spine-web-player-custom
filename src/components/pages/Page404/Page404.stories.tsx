// react
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
// module
import { Story, Meta } from '@storybook/react'
// components
import Page404 from './Page404'

export default {
  title: 'pages/Page404',
  component: Page404,
  argTypes: {}
} as Meta

const Template: Story = (args) => {
  return (
    <MemoryRouter initialEntries={['/', 'page404']}>
      <Page404 {...args} />
    </MemoryRouter>
  )
}

export const Default = Template.bind({})
Default.args = {}
