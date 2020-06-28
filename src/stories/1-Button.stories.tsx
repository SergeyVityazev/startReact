import React from 'react'

import { action } from '@storybook/addon-actions'
import { Button } from '@storybook/react/demo'
import { withKnobs, number } from '@storybook/addon-knobs'

import AboutMe from './AboutMe'

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
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

export const aboutMe: React.FC<{}> = () => {
  const old = number("Old", 33);
  
  return (
    <AboutMe myname="sergey" old={old}>

    </AboutMe>
  )
}