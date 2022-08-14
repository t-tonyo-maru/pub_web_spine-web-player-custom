// react
import React from 'react'
import { Story, Meta } from '@storybook/react'
// component
import { IconPropsTyoe, Icon } from './Icon'

export default {
  title: 'atoms/Icon',
  component: Icon
} as Meta

const Template: Story<IconPropsTyoe> = (args) => {
  return (
    <div>
      <Icon {...args} />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  size: 'md',
  isInActive: false
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'md',
  isInActive: false
}

export const Small = Template.bind({})
Small.args = {
  size: 'sm',
  isInActive: false
}

export const isInActive = Template.bind({})
isInActive.args = {
  size: 'md',
  isInActive: true
}
