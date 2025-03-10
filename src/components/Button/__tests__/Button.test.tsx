import React from 'react';
import { render } from '@testing-library/react-native';
import Button from '../Button';
import { COLORS } from '../../../styles';

describe('Button', () =>
  test('the component variant default', () => {

    // const { getByText } = render(
    //   <Button text={'Button'} variant="default" onPress={() => console.log('Test')} />
    // );

    // // Buscar o texto 'Button'
    // const button = getByText('Button');

    // // Acessar o componente pai que envolve o texto (TouchableOpacity)
    // const buttonParent = button.parent.parent.parent;
    // console.log(buttonParent.props);

    // // Verificar se o estilo de backgroundColor está correto para a variant 'default'
    // expect(buttonParent.props.style[0].backgroundColor).toBe(COLORS.base.blueLight);
  })
);
