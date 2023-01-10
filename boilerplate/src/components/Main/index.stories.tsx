import { Meta } from '@storybook/react/types-7-0'
import Main from './index'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  },
  argTypes: {
    BackgroundColor: { control: 'color' }
  }
} as Meta

export const Basic = (
  args: JSX.IntrinsicAttributes & {
    title?: string | undefined
    description?: string | undefined
  }
) => <Main {...args} />

export const Default = (
  args: JSX.IntrinsicAttributes & {
    title?: string | undefined
    description?: string | undefined
  }
) => <Main {...args} />
