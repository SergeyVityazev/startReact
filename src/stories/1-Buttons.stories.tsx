import React from 'react'

import { action } from '@storybook/addon-actions'
import { Button } from '@storybook/react/demo'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

export default {
  title: 'Button',
  component: Button,
}

export const Text: React.FC<{}> = () => (
  <button onClick={action('button-click')}>
    <label>HelloButton4</label>
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

export const megaHeader: React.FC<{}> = () => (
  <h1> {text('Header', 'MEGAHEADER')}</h1>
)
