// react
import React from 'react'
// module
import { Story, Meta } from '@storybook/react'
// components
import { FileTag, FileTagProps } from './FileTag'

export default {
  title: 'atoms/FileTag',
  component: FileTag,
  argTypes: {
    children: { control: 'text' }
  }
} as Meta

const Template: Story<FileTagProps> = (args) => <FileTag {...args} />

export const Default = Template.bind({})
Default.args = {
  extension: 'json',
  status: 'NODATA'
}

export const Nodata = Template.bind({})
Nodata.args = {
  extension: 'json',
  status: 'NODATA'
}

export const Loading = Template.bind({})
Loading.args = {
  extension: 'json',
  status: 'LOADING'
}

export const Loaded = Template.bind({})
Loaded.args = {
  extension: 'json',
  status: 'LOADED'
}

export const Failed = Template.bind({})
Failed.args = {
  extension: 'json',
  status: 'FAILED'
}
