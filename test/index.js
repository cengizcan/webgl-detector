import jsdom from 'jsdom-global';
import { assert } from 'chai';
import { describe, it, before } from 'mocha';

import { isWebGLSupported } from '../src';

describe('WebGL detector tests', () => {
  before(() => {
    jsdom();
  });
  it('should return false if window.WebGLRenderingContext is not extists.', () => {
    assert(isWebGLSupported() === false);
  });
  it('should return true if webgl context exists.', () => {
    window.WebGLRenderingContext = () => true;
    // eslint-disable-next-line no-global-assign
    document = { createElement: () => ({ getContext: (ctx) => ctx === 'webgl' }) };
    assert(isWebGLSupported() === true);
  });
  it('should return true if experimental-webgl context exists.', () => {
    window.WebGLRenderingContext = () => true;
    // eslint-disable-next-line no-global-assign
    document = { createElement: () => ({ getContext: (ctx) => ctx === 'experimental-webgl' }) };
    assert(isWebGLSupported() === true);
  });
});
