import React from 'react'
import AboutMe from './AboutMe'
import { shallow, render } from 'enzyme'
import * as enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

enzyme.configure({ adapter: new Adapter() })

describe('My name and old', () => {
  it('adds name + number to equal String', () => {
    expect(render(<AboutMe myname={'vasya'} old={32} />).text()).toEqual(
      "Hello! I'm vasya and I'm 32 years old"
    )
  })
})
