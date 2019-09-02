/**
 * @jest-environment jsdom
 */
import { isWebGLSupported, isWebGL2Supported } from '../index';

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
  it('isWebGLSupported should return false if window.WebGLRenderingContext is not extists.', () => {
    setup(false, '');
    expect(isWebGLSupported()).toBe(false);
  });
  it('isWebGLSupported should return true if webgl context exists.', () => {
    setup(true, 'webgl');
    expect(isWebGLSupported()).toBe(true);
  });
  it('isWebGLSupported should return true if experimental-webgl context exists.', () => {
    setup(true, 'experimental-webgl');
    expect(isWebGLSupported()).toBe(true);
  });
  it('isWebGL2Supported should return false if window.WebGLRenderingContext is not extists.', () => {
    setup(false, '');
    expect(isWebGL2Supported()).toBe(false);
  });
  it('isWebGL2Supported should return true if webgl context exists.', () => {
    setup(true, 'webgl2');
    expect(isWebGL2Supported()).toBe(true);
  });
});
