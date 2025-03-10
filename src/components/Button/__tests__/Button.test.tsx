import React from 'react'
import { render } from '@testing-library/react-native'
import Button from '../Button'

test('the component rendered', () => {

  render(
    <Button text={'Teste'} onPress={() => console.log('Teste')} />)
})