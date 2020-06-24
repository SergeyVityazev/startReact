import React from 'react'

import { action } from '@storybook/addon-actions'
import { Button } from '@storybook/react/demo'
import AboutMe from './AboutMe'

export default {
  title: 'Button',
  component: Button,
}

export const Text: React.FC<{}> = () => (
  <button onClick={action('button-click')}>
    <label>HelloButton</label>
  </button>
)

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
)

Emoji.story = {
  name: 'with emoji',
}

export const hello = () => <AboutMe myname={"sergey"} old={33} />
