import { mount, shallow } from 'vue-test-utils'
import VueEmbedGist from '../src/'

describe('Component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(VueEmbedGist, {
      propsData: {
        gistId: '8bab656a910829ab9c32d7700c570be6'
      }
    })
    expect(wrapper.isVueInstance()).toBe(true)
  })

  test('has required props', () => {
    const wrapper = shallow(VueEmbedGist, {
      propsData: {
        gistId: '8bab656a910829ab9c32d7700c570be6'
      }
    })
    expect(wrapper.props().gistId).not.toBe(undefined)
  })

  test('does not have optional props', () => {
    const wrapper = shallow(VueEmbedGist, {
      propsData: {
        gistId: '8bab656a910829ab9c32d7700c570be6'
      }
    })
    expect(wrapper.props().file).toBe(undefined)
  })

  test('has props', () => {
    const wrapper = shallow(VueEmbedGist, {
      propsData: {
        gistId: '8bab656a910829ab9c32d7700c570be6',
        file: 'index.js'
      }
    })
    expect(wrapper.props().gistId).not.toBe(undefined)
    expect(wrapper.props().gistId).toBe('8bab656a910829ab9c32d7700c570be6')
    expect(wrapper.props().file).not.toBe(undefined)
    expect(wrapper.props().file).toBe('index.js')
  })
})