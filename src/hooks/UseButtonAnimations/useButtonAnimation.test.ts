import { Easing } from 'react-native-reanimated';
import { renderHook } from '@testing-library/react-native';
import { useSharedValue, withTiming } from 'react-native-reanimated';
import useButtonAnimation from './useButtonAnimation';

jest.mock('react-native-reanimated', () => {
  const actualReanimated = jest.requireActual('react-native-reanimated');
  return {
    ...actualReanimated,
    useSharedValue: jest.fn(),
    withTiming: jest.fn(),
  };
});

describe('useButtonAnimation', () => {
  test('should animate the button position to down', () => {
    const mockWithTiming = jest.fn();
    (withTiming as jest.Mock).mockImplementation(mockWithTiming);

    (useSharedValue as jest.Mock).mockReturnValue({ value: 50 });

    renderHook(() => useButtonAnimation());

    expect(mockWithTiming).toHaveBeenCalledWith(0, {
      duration: 500,
      easing: Easing.bounce,
    });
  });
});