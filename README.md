# WebGL Detector

![GitHub](https://img.shields.io/github/license/cengizcan/webgl-detector?style=flat-square) ![npm type definitions](https://img.shields.io/npm/types/webgl-detector?style=flat-square)

Test & mock friendly WebGL detection utility.

**Install**
```bash
npm install --save webgl-detector
```
**Usage**
```javascript
import { isWebGLSupported } from 'webgl-detector';

if (isWebGLSupported()){
  // WebGL is supported!
}
```
**Mocking - Jest & React**

Create a file at `__mocks__/webgl-detector.js`. Make sure `__mocks__` directory is adjacent to `node_modules`. 
```javascript
// __mocks__/webgl-detector.js
const webglDetector = jest.genMockFromModule('webgl-detector');

webglDetector.setValue = value => {
  webglDetector.isSupported = value;
};
webglDetector.isWebGLSupported = () => webglDetector.isSupported;
module.exports = webglDetector;
```
Suppose we have an Container component named `AnimationContainer` and a renderer container named `MyAnimation`. If WebGL is supported, `AnimationContainer` returns `MyAnimation` component:
```javascript
import React from 'react';
import { isWebGLSupported } from 'webgl-detector';

import MyAnimation from './MyAnimation';

const AnimationContainer = props => (
  <div>
    {isWebGLSupported() ? (
      <MyAnimation {...props} />
    ) : (
      <div>WebGL is not supported</div>
    )}
  </div>
);
export default AnimationContainer;
```
In our test file:
```javascript
describe('<AnimationContainer />', () => {
  // require mocked component with usual value
  beforeEach(() => {
    require('webgl-detector').setValue(true);
  });
  it('should render something if WebGL is supported', () => {
    expect(something).toBe(true); // pseudo expect
  });
  it('should not render something if WebGL is not supported', () => {
    // set module mock for WebGL disabled case
    require('webgl-detector').setValue(false);
    expect(something).toBe(false); // pseudo expect
  });
});
```
Learn more on mocking Node Modules in [Jest documentation](https://jestjs.io/docs/en/manual-mocks#mocking-node-modules)


# License

MIT © Cengiz Can

![CircleCI](https://img.shields.io/circleci/build/gh/cengizcan/webgl-detector?style=flat-square&token=28279ff846840a5986a4b01ef014b9143e26ef46) ![David](https://img.shields.io/david/cengizcan/webgl-detector?style=flat-square) ![David](https://img.shields.io/david/dev/cengizcan/webgl-detector?style=flat-square) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/webgl-detector?style=flat-square)