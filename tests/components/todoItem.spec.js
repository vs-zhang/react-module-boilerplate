import React from 'react'
import { shallow } from 'enzyme'
import { TodoItemComponent } from '../../src/components/todoItem'
import { expect } from 'chai'

describe('<TodoItemComponent />', () => {
  it('should render one div', () => {
    const props = { text: 'test' }
    const wrapper = shallow(<TodoItemComponent {...props} />)
    expect(wrapper.find('div')).to.have.length(1)
    expect(wrapper.find('div').text()).to.eql('test')
  })
})
