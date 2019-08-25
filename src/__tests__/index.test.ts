/**
 * @jest-environment jsdom
 */
import { isWebGLSupported } from '../index';

// https://github.com/TypeStrong/ts-node/issues/55

describe('WebGL detector tests', () => {
  const setup = (contextEnabled: boolean, contextType: string) => {
    Object.defineProperty(window, 'WebGLRenderingContext', {
      writable: true,
      value: contextEnabled ? true : null,
    });
    Object.defineProperty(document, 'createElement', {
      writable: true,
      value: () => ({ getContext: (ctx: string) => ctx === contextType }),
    });
  };
  it('should return false if window.WebGLRenderingContext is not extists.', () => {
    setup(false, '');
    expect(isWebGLSupported()).toBe(false);
  });
  it('should return true if webgl context exists.', () => {
    setup(true, 'webgl');
    expect(isWebGLSupported()).toBe(true);
  });
  it('should return true if experimental-webgl context exists.', () => {
    setup(true, 'experimental-webgl');
    expect(isWebGLSupported()).toBe(true);
  });
});
