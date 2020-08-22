// jest.mock("$", () => {
//     ajax: jest.fn(() => Promise.resolve({
//         div: 'Output Div'
//     }))
// })
import { mount, shallow } from 'vue-test-utils'
import VueGist from '../src/components/VueGist.vue'
import VueGistCore from '../src/components/VueGistCore.vue'
import jsonp from './__mocks__/jsonp'

describe('VueGist Component', () => {
  test('is a Vue instance', () => {
    const wrapper = shallow(VueGist, {
      propsData: {
        gistId: '8bab656a910829ab9c32d7700c570be6'
      }
    })
    expect(wrapper.isVueInstance()).toBe(true)
  })

  test('has required props', () => {
    const wrapper = shallow(VueGist, {
      propsData: {
        gistId: '8bab656a910829ab9c32d7700c570be6'
      }
    })
    expect(wrapper.props().gistId).not.toBe(undefined)
  })

  test('does not have optional props', () => {
    const wrapper = shallow(VueGist, {
      propsData: {
        gistId: '8bab656a910829ab9c32d7700c570be6'
      }
    })
    expect(wrapper.props().file).toBe(undefined)
  })

  test('has props', () => {
    const wrapper = shallow(VueGist, {
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

  test('contains VueGistCore', () => {
    const wrapper = mount(VueGist, {
      propsData: {
        gistId: '8bab656a910829ab9c32d7700c570be6'
      }
    })
    expect(wrapper.contains(VueGistCore)).toBe(true)
  })

  test('Check gistData initial value', () => {
    const wrapper = shallow(VueGist, {
      propsData: {
        gistId: '8bab656a910829ab9c32d7700c570be6'
      }
    })
    expect(wrapper.vm.gistData).toBe('loading...')
  })

  it('Ajax call -- check call parameters', () => {
    const wrapper = shallow(VueGist, {
        propsData: {
          gistId: 'gistId',
          file: 'test.java'
        }
    })
    wrapper.vm.getGistData('gistId')
    expect(jsonp).toBeCalledWith(
      'https://gist.github.com/gistId.json?file=test.java',
      { timeout: 20000 },
      expect.any(Function)
    )
  })
})