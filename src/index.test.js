import { mount } from 'vue-test-utils'
import VueEmbedGist from './'

test('it works', () => {
  const wrapper = mount(VueEmbedGist)
  expect(wrapper.isVueInstance()).toBe(true)
})
