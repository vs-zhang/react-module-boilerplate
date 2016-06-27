import React from 'react'
import { shallow } from 'enzyme'
import { TodoItemComponent } from '../../src/components/todoItem/container'
import { expect } from 'chai'
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import sinon from 'sinon'
const mockStore = configureStore([ thunk ]);

describe('<TodoItemComponent />', () => {
  it('should render one div', () => {
    const props = { name: 'test', isDone: false, index: 0 }
    const store = mockStore({ todos: [] })
    const wrapper = shallow(<TodoItemComponent {...props} store={store}/>)
    expect(wrapper.find('section')).to.have.length(1)
    expect(wrapper.find('section').text()).to.eql('test')
  })
})
