// react
import React from 'react'
// module
import { Story, Meta } from '@storybook/react'
// components
import { InputFiles, InputFilesProps } from './InputFiles'

export default {
  title: 'molecules/InputFiles',
  component: InputFiles,
  argTypes: {
    children: { control: 'text' }
  }
} as Meta

const Template: Story<InputFilesProps> = (args) => <InputFiles {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'storybook InputFiles'
}
