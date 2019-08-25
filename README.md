# WebGL Detector

[![dependencies Status](https://david-dm.org/cengizcan/webgl-detector.svg)](https://david-dm.org/cengizcan/webgl-detector) [![devDependencies Status](https://david-dm.org/cengizcan/webgl-detector/dev-status.svg)](https://david-dm.org/flexdinesh/npm-module-boilerplate?type=dev) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

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
const deviceDetect = jest.genMockFromModule('webgl-detector');

deviceDetect.setValue = value => {
  deviceDetect.isSupported = value;
};
deviceDetect.isWebGLSupported = () => deviceDetect.isSupported;
module.exports = deviceDetect;
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
