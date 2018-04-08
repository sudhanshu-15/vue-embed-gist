import { mount, shallow } from 'vue-test-utils'
import VueGistCore from '../src/components/VueGistCore.vue'

describe('VueGistCoreCore Component', () => {
  test('is a Vue instance', () => {
    const wrapper = shallow(VueGistCore, {
      propsData: {
        gistDiv: '<h1>New Titile</h1>'
      }
    })
    expect(wrapper.isVueInstance()).toBe(true)
  })

  test('has required props', () => {
    const wrapper = shallow(VueGistCore, {
      propsData: {
        gistDiv: '<h1>New Titile</h1>'
      }
    })
    expect(wrapper.props().gistDiv).not.toBe(undefined)
  })

  test('has props', () => {
    const wrapper = shallow(VueGistCore, {
      propsData: {
        gistDiv: '<h1>New Titile</h1>'
      }
    })
    expect(wrapper.props().gistDiv).not.toBe(undefined)
    expect(wrapper.props().gistDiv).toBe('<h1>New Titile</h1>')
  })

  test('contains paragraph', () => {
    const wrapper = mount(VueGistCore, {
      propsData: {
        gistDiv: '<h1>New Titile</h1>'
      }
    })
    expect(wrapper.contains('p')).toBe(true)
  })
})