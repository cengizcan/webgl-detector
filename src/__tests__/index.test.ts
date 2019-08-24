/**
 * @jest-environment jsdom
 */
import { isWebGLSupported } from '../index';

// https://github.com/TypeStrong/ts-node/issues/55

describe('WebGL detector tests', () => {
  
  it('should return false if window.WebGLRenderingContext is not extists.', () => {
    Object.defineProperty(window, 'WebGLRenderingContext', {
      writable: true,
      value: undefined
    });
    Object.defineProperty(document, 'createElement', {
      writable: true,
      value: () => ({ getContext: (ctx:string) => ctx === 'experimental-webgl' })
    });
    expect(isWebGLSupported()).toBe(false);
  });
  it('should return true if webgl context exists.', () => {
    Object.defineProperty(window, 'WebGLRenderingContext', {
      writable: true,
      value: () => true
    });
    Object.defineProperty(document, 'createElement', {
      writable: true,
      value: () => ({ getContext: (ctx:string) => ctx === 'webgl' })
    });
    expect(isWebGLSupported()).toBe(true);
  });
  it('should return true if experimental-webgl context exists.', () => {
    Object.defineProperty(window, 'WebGLRenderingContext', {
      writable: true,
      value: () => true
    });

    Object.defineProperty(document, 'createElement', {
      writable: true,
      value: () => ({ getContext: (ctx:string) => ctx === 'experimental-webgl' })
    });
    expect(isWebGLSupported()).toBe(true);
  });
});
