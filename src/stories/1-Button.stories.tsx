import React from 'react'

import { action } from '@storybook/addon-actions'
import { Button } from '@storybook/react/demo'
/*import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import { getJSDocThisTag } from 'typescript'*/

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

type dataProps = {
  myname: string,
  old: number,
}

class AbountMe extends React.Component<dataProps> {
  public myname: string
  public old:number

  constructor(myname:string,old:number){
    super(myname,old)
    this.myname = myname
    this.old = old
  }

  render() {
    return (
      <p>
        Hello! I'm {this.myname} and I'm {this.old} years old
      </p>
    );
  }
}

export const hello = () => new AbountMe("Sergey",33) ;

