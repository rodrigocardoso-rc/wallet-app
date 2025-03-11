import { renderHook } from "@testing-library/react-native";
import { Easing, useSharedValue, withTiming } from "react-native-reanimated";
import useImageAnimation from "./useImageAnimation";

jest.mock('react-native-reanimated', () => {
  const actualReanimated = jest.requireActual('react-native-reanimated');
  return {
    ...actualReanimated,
    useSharedValue: jest.fn(),
    withTiming: jest.fn(),
    runOnJS: jest.fn((fn) => {
      return jest.fn(() => fn());
    }),
  };
});

describe('useImageAnimation', () => {
  it('should animate the image when canAnimate is true', () => {
    const mockWithTiming = jest.fn();
    const callbackFunction = jest.fn();

    (withTiming as jest.Mock).mockImplementation(mockWithTiming);
    (useSharedValue as jest.Mock).mockReturnValue({ value: 1 });

    renderHook(() => useImageAnimation(true, callbackFunction));

    expect(mockWithTiming).toHaveBeenCalledWith(
      2,
      { duration: 800, easing: Easing.ease },
      expect.any(Function)
    );
  });

  it('should not animate the image when canAnimate is false', () => {
    const mockWithTiming = jest.fn();
    const mockSharedValue = { value: 1 };

    (withTiming as jest.Mock).mockImplementation(mockWithTiming);
    (useSharedValue as jest.Mock).mockReturnValue(mockSharedValue);

    const { result } = renderHook(() => useImageAnimation(false, () => { }));

    expect(result.current).toBe(mockSharedValue);
  });
});