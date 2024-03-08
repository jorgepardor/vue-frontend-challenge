import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import RegisterFormView from '@/views/RegisterFormView.vue'

describe('RegisterFormView.vue', () => {
  it('renders input fields and submit button', () => {
    const wrapper = mount(RegisterFormView)

    expect(wrapper.find('input[type="text"]').exists()).toBe(true)
    expect(wrapper.find('input[type="email"]').exists()).toBe(true)
    expect(wrapper.find('input[type="password"]').exists()).toBe(true)
    expect(wrapper.findAll('input[type="password"]').length).toBe(2)
    expect(wrapper.find('button[type="submit"]').exists()).toBe(true)
  })

  it('validates username correctly', async () => {
    const wrapper = mount(RegisterFormView)
    const input = wrapper.find('input[type="text"]')

    await input.setValue('a'.repeat(65))
    expect(wrapper.vm.usernameIsValid).toBe(false)

    await input.setValue('username')
    expect(wrapper.vm.usernameIsValid).toBe(true)
  })

  it('validates email correctly', async () => {
    const wrapper = mount(RegisterFormView)
    const input = wrapper.find('input[type="email"]')

    await input.setValue('invalid-email')
    expect(wrapper.vm.emailIsValid).toBe(false)

    await input.setValue('email@example.com')
    expect(wrapper.vm.emailIsValid).toBe(true)
  })

  it('validates password correctly', async () => {
    const wrapper = mount(RegisterFormView)
    const input = wrapper.find('input[type="password"]')

    await input.setValue('password')
    expect(wrapper.vm.passwordIsValid).toBe(false)

    await input.setValue('Password1!')
    expect(wrapper.vm.passwordIsValid).toBe(true)
  })

  it('validates confirm password correctly', async () => {
    const wrapper = mount(RegisterFormView)
    const passwordInput = wrapper.findAll('input[type="password"]').at(0)
    const confirmPasswordInput = wrapper.findAll('input[type="password"]').at(1)

    await passwordInput.setValue('Password1!')
    await confirmPasswordInput.setValue('Password2!')
    expect(wrapper.vm.confirmPasswordIsValid).toBe(false)

    await confirmPasswordInput.setValue('Password1!')
    expect(wrapper.vm.confirmPasswordIsValid).toBe(true)
  })

  it('submits form correctly', async () => {
    const wrapper = mount(RegisterFormView)
    const usernameInput = wrapper.find('input[type="text"]')
    const emailInput = wrapper.find('input[type="email"]')
    const passwordInput = wrapper.findAll('input[type="password"]').at(0)
    const confirmPasswordInput = wrapper.findAll('input[type="password"]').at(1)
    const submitButton = wrapper.find('button[type="submit"]')

    await usernameInput.setValue('username')
    await emailInput.setValue('email@example.com')
    await passwordInput.setValue('Password1!')
    await confirmPasswordInput.setValue('Password1!')

    await submitButton.trigger('click')

    expect(wrapper.vm.submitClicked).toBe(true)
    expect(wrapper.vm.formIsValid).toBe(true)
  })
})