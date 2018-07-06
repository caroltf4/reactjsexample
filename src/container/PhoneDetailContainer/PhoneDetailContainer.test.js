import React from 'react'
import { shallow } from 'enzyme'

import PhoneDetailContainer from './PhoneDetailContainer.js'

it('renders without props', () => {
  shallow(<PhoneDetailContainer />)
})
