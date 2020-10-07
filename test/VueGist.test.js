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

  test('Show Error component', () =>{
    const wrapper = shallow(VueGist, {
      propsData: {
        gistId: '8bab656a910829ab9c32d7700c570be6',
        file: 'index.js'
      }
    })
    wrapper.setData({ gistErr: true})
    // looking for the css selector
    expect(wrapper.find(".alert")).toBeTruthy()
  })

  test('Dynamically change the gist after the instance created', () => {
    const wrapper = shallow(VueGist, {
      propsData: {
        gistId: '8bab656a910829ab9c32d7700c570be6'
      }
    })
    // This should be called as soon as the watch handler triggered
    wrapper.vm.getGistData = jest.fn();
    // First gist Id 
    expect(wrapper.vm.gistData).toBe('loading...')
    // Change the data in the instance
    wrapper.setData({ gistId: 'f284fdc92dd66f8f16e6dee335ff3cef' });
    // Change the data again in the instance
    wrapper.setData({ gistId: '0c9be8f1974d126b38206380c9544592' });
    // the trigger should happen for 2 times
    expect(wrapper.vm.getGistData).toHaveBeenCalledTimes(2);
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