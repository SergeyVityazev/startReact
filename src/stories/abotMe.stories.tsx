import React from 'react'
import { withKnobs, number } from '@storybook/addon-knobs'

import AboutMe from '../AboutMe'

export default {
  title: 'startStories',
  decorators: [withKnobs],
}

export const aboutMe: React.FC<{}> = () => {
  const old = number('Old', 33)

  return <AboutMe myname="sergey" old={old}></AboutMe>
}
