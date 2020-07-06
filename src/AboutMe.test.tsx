import React from 'react'
import { shallow, render } from 'enzyme'
import AboutMe from './AboutMe'

describe('My name and old', () => {
  it('adds name + number to equal String', () => {
    expect(render(<AboutMe myname={'vasya'} old={32} />).text()).toEqual(
      "Hello! I'm vasya and I'm 32 years old"
    )
  })
})
