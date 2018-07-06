import React from 'react'
import { shallow } from 'enzyme'

import PhoneListContainer from './PhoneListContainer.js'

it('renders without props', () => {
  shallow(<PhoneListContainer />)
})
