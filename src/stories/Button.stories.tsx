import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../components/Button'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Base: Story = {
  args: {
    isDisabled: false,
    label: 'Click me!',
    type: 'button',
  },
}
