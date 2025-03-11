import { Dimensions } from 'react-native';
import { renderHook } from '@testing-library/react-native';
import { useSharedValue, withSpring, withSequence, withRepeat } from 'react-native-reanimated';
import useBackgroundAnimation from './useBackgroundAnimation';

jest.mock('react-native-reanimated', () => {
  const actualReanimated = jest.requireActual('react-native-reanimated');
  return {
    ...actualReanimated,
    useSharedValue: jest.fn(),
    withSpring: jest.fn(),
    withSequence: jest.fn(),
    withRepeat: jest.fn(),
  };
});

export const dimensionsMock = {
  width: 1000,
  height: 1800,
  scale: 1,
  fontScale: 1,
}

describe('useBackgroundAnimation', () => {
  test('should initialize the animation with the screen width', () => {
    const { width } = dimensionsMock

    jest.spyOn(Dimensions, 'get').mockReturnValue(dimensionsMock);
    (useSharedValue as jest.Mock).mockReturnValue({ value: dimensionsMock });

    const mockWithSpring = jest.fn();
    (withSpring as jest.Mock).mockImplementation(mockWithSpring);

    renderHook(() => useBackgroundAnimation());

    expect(mockWithSpring).toHaveBeenCalledWith(width, { duration: 400 });
  });

  test('should execute two animations: one with the screen width and another with an increased width', () => {
    const { width } = dimensionsMock

    jest.spyOn(Dimensions, 'get').mockReturnValue(dimensionsMock);
    (useSharedValue as jest.Mock).mockReturnValue({ value: dimensionsMock });

    const mockWithSpring = jest.fn();
    (withSpring as jest.Mock).mockImplementation(mockWithSpring);

    renderHook(() => useBackgroundAnimation());

    expect(mockWithSpring).toHaveBeenCalledWith(width, { duration: 400 });
    expect(mockWithSpring).toHaveBeenCalledWith(width + width / 5, { duration: 400 });
  });

  test('should repeat the animation sequence after executing the two animations', () => {
    const { width } = dimensionsMock

    jest.spyOn(Dimensions, 'get').mockReturnValue(dimensionsMock);

    (useSharedValue as jest.Mock).mockReturnValue({ value: dimensionsMock });

    const mockWithSpring = jest.fn();
    const mockWithSequence = jest.fn();
    const mockWithRepeat = jest.fn();
    (withSpring as jest.Mock).mockImplementation(mockWithSpring);
    (withSequence as jest.Mock).mockImplementation(mockWithSequence);
    (withRepeat as jest.Mock).mockImplementation(mockWithRepeat);

    renderHook(() => useBackgroundAnimation());

    expect(mockWithSpring).toHaveBeenCalledWith(width, { duration: 400 });
    expect(mockWithSpring).toHaveBeenCalledWith(width + width / 5, { duration: 400 });
    expect(mockWithSequence).toHaveBeenCalled();
  });
});